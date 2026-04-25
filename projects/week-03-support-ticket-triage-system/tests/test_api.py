from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_list_tickets_returns_data():
    response = client.get("/tickets")
    assert response.status_code == 200
    assert len(response.json()["data"]) >= 1


def test_status_filter_only_returns_matching_rows():
    response = client.get("/tickets", params={"status": "open"})
    ids = [ticket["id"] for ticket in response.json()["data"]]
    assert ids == [1, 3]
