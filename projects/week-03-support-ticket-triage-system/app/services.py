from .models import Ticket

TICKETS = [
    Ticket(1, "Cannot reset password", "high", "open", "maya"),
    Ticket(2, "Billing export missing rows", "medium", "closed", None),
    Ticket(3, "Printer setup help", "low", "open", "eli"),
]


def filter_tickets(status: str | None = None, assigned_user: str | None = None):
    rows = list(TICKETS)

    if status:
        # TODO: bug: this keeps non-matching tickets instead of filtering them out.
        rows = [ticket for ticket in rows if ticket.status != status]

    if assigned_user:
        rows = [ticket for ticket in rows if ticket.assigned_user == assigned_user]

    return rows


def assign_ticket(ticket_id: int, username: str):
    for ticket in TICKETS:
        if ticket.id == ticket_id:
            ticket.assigned_user = username
            return ticket
    raise ValueError("Ticket not found")
