# AGENTS.md

## Project Status
- This repository is currently a blank workspace with a `LICENSE` file and Git history initialized.
- There is no application code, package manager, build system, or test runner configured yet.
- Treat this file as the default operating guide for future work until project-specific docs are added.

## Goals
- Keep changes small, reviewable, and easy to explain.
- Prefer establishing one mini-project at a time instead of scaffolding multiple unfinished apps.
- Add project-specific instructions close to the code once a stack is chosen.

## Working Rules
- Before adding dependencies or frameworks, document the choice in a `README.md` or the relevant project folder.
- Prefer simple, conventional tooling over custom setup unless there is a clear need.
- Keep file and folder names descriptive and consistent.
- Do not introduce unrelated refactors while bootstrapping a new mini-project.

## Repository Structure
- If this repo stays multi-project, place each mini-project in its own top-level directory.
- Give each mini-project its own local README with run, test, and build instructions.
- Shared utilities should only be extracted after at least two projects need them.

## Code Quality
- Match the formatter, linter, and test setup of the specific mini-project you are editing.
- If no tooling exists yet, choose minimal defaults and document them.
- Prefer readable implementations over premature abstraction.
- Add tests for non-trivial behavior once a test framework exists.

## Agent Guidance
- Check for a more specific `AGENTS.md` in subdirectories before making changes.
- When starting a new mini-project, first create the folder, a local README, and the minimal tooling required to run it.
- Record assumptions clearly when repository conventions do not exist yet.
- Avoid making stack decisions implicitly through generated files without explanation.

## Suggested Next Step
- Add a root `README.md` describing the first mini-project you want to build and the stack you want to use.
