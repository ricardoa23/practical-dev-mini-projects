from app.services import assign_ticket, filter_tickets


def test_assign_ticket_updates_user():
    ticket = assign_ticket(2, "nora")
    assert ticket.assigned_user == "nora"


def test_filter_tickets_by_status():
    data = filter_tickets(status="open")
    assert [ticket.id for ticket in data] == [1, 3]
