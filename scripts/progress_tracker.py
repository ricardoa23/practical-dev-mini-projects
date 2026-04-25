#!/usr/bin/env python3
import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = ROOT / "progress.config.json"


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def ratio_from_ids(all_items, completed_ids):
    if not all_items:
        return 1.0
    ids = [item["id"] for item in all_items]
    completed = sum(1 for item_id in ids if item_id in completed_ids)
    return completed / len(ids)


def ratio_from_required_files(project_dir: Path, required_files):
    if not required_files:
        return 1.0
    found = sum(1 for relative_path in required_files if (project_dir / relative_path).exists())
    return found / len(required_files)


def run_test_commands(project_dir: Path, commands):
    if not commands:
        return 1.0, []

    passed = 0
    details = []
    for command in commands:
        try:
            result = subprocess.run(
                command,
                cwd=project_dir,
                shell=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                timeout=20,
            )
            ok = result.returncode == 0
            if ok:
                passed += 1
            details.append(
                {
                    "command": command,
                    "passed": ok,
                    "exitCode": result.returncode,
                    "outputPreview": "\n".join(result.stdout.splitlines()[:8]),
                }
            )
        except subprocess.TimeoutExpired:
            details.append(
                {
                    "command": command,
                    "passed": False,
                    "exitCode": 124,
                    "outputPreview": "Timed out after 20 seconds while running the test command.",
                }
            )
    return passed / len(commands), details


def resolve_target_project_tests(project_dir: Path, challenge: dict):
    target_project_file = challenge.get("targetProjectFile")
    if not target_project_file:
        return challenge.get("testCommands", []), []

    target_path_file = project_dir / target_project_file
    if not target_path_file.exists():
        return [], [{
            "command": "select target project",
            "passed": False,
            "exitCode": 1,
            "outputPreview": f"Create {target_project_file} with a relative project path such as projects/week-01-recipe-search-dashboard"
        }]

    relative_target = target_path_file.read_text(encoding="utf-8").strip()
    target_dir = ROOT / relative_target
    challenge_file = target_dir / "challenge.json"
    if not challenge_file.exists():
        return [], [{
            "command": "load target project",
            "passed": False,
            "exitCode": 1,
            "outputPreview": f"Target project not found: {relative_target}"
        }]

    target_challenge = load_json(challenge_file)
    commands = target_challenge.get("testCommands", [])
    if not commands:
        return [], [{
            "command": "load target project tests",
            "passed": False,
            "exitCode": 1,
            "outputPreview": f"Target project has no test commands: {relative_target}"
        }]

    return commands, [{
        "command": "selected target project",
        "passed": True,
        "exitCode": 0,
        "outputPreview": relative_target
    }]


def calculate_project(project_dir: Path, config):
    challenge_path = project_dir / config["challengeFileName"]
    challenge = load_json(challenge_path)
    progress_path = project_dir / config["progressFileName"]
    progress = {"completedTaskIds": [], "completedOptionalTaskIds": []}
    if progress_path.exists():
        progress.update(load_json(progress_path))

    weights = challenge.get("weights", config["defaultWeights"])
    required_tasks_ratio = ratio_from_ids(challenge.get("requiredTasks", []), set(progress.get("completedTaskIds", [])))
    optional_tasks_ratio = ratio_from_ids(challenge.get("optionalTasks", []), set(progress.get("completedOptionalTaskIds", [])))
    required_files_ratio = ratio_from_required_files(project_dir, challenge.get("requiredFiles", []))

    test_commands, preflight_details = resolve_target_project_tests(project_dir, challenge)
    if challenge.get("targetProjectFile") and not test_commands:
        tests_ratio = 0.0
        test_details = preflight_details
    else:
        tests_ratio, test_details = run_test_commands(project_dir, test_commands)
        test_details = preflight_details + test_details

    score = (
        required_tasks_ratio * weights["requiredTasks"]
        + tests_ratio * weights["tests"]
        + optional_tasks_ratio * weights["optionalTasks"]
        + required_files_ratio * weights["requiredFiles"]
    ) * 100

    return {
        "project": challenge["projectName"],
        "path": str(project_dir.relative_to(ROOT)),
        "stack": challenge.get("languageStack", []),
        "database": challenge.get("database"),
        "difficulty": challenge.get("difficulty"),
        "progressPercent": round(score, 2),
        "breakdown": {
            "requiredTasks": round(required_tasks_ratio * 100, 2),
            "tests": round(tests_ratio * 100, 2),
            "optionalTasks": round(optional_tasks_ratio * 100, 2),
            "requiredFiles": round(required_files_ratio * 100, 2),
        },
        "testDetails": test_details,
    }


def main():
    parser = argparse.ArgumentParser(description="Track weekly project progress")
    parser.add_argument("--json", action="store_true", dest="json_output")
    args = parser.parse_args()

    config = load_json(CONFIG_PATH)
    projects_dir = ROOT / config["projectsDirectory"]
    results = []
    for child in sorted(projects_dir.iterdir()):
        challenge_path = child / config["challengeFileName"]
        if child.is_dir() and challenge_path.exists():
            results.append(calculate_project(child, config))

    if args.json_output:
        print(json.dumps(results, indent=2))
        return

    print("Practical Dev Mini Projects Progress")
    print("=" * 38)
    for result in results:
        print(f"{result['project']}: {result['progressPercent']}% complete")
        print(f"  path: {result['path']}")
        print(f"  stack: {', '.join(result['stack'])}")
        print(f"  db: {result['database']}")
        print(
            "  breakdown: "
            f"tasks {result['breakdown']['requiredTasks']}% | "
            f"tests {result['breakdown']['tests']}% | "
            f"stretch {result['breakdown']['optionalTasks']}% | "
            f"files {result['breakdown']['requiredFiles']}%"
        )
        if result["testDetails"]:
            for detail in result["testDetails"]:
                status = "PASS" if detail["passed"] else "FAIL"
                print(f"    [{status}] {detail['command']}")
        print()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit(130)
