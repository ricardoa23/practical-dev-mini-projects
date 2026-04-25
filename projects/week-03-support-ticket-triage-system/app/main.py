import logging
from fastapi import FastAPI

from .services import assign_ticket, filter_tickets

app = FastAPI()
logger = logging.getLogger("triage")


@app.get("/tickets")
def list_tickets(status: str | None = None, assigned_user: str | None = None):
    return {"data": [ticket.__dict__ for ticket in filter_tickets(status, assigned_user)]}


@app.post("/tickets/{ticket_id}/assign")
def assign(ticket_id: int, username: str):
    # TODO: add more useful logging here.
    logger.info("assigning ticket")
    ticket = assign_ticket(ticket_id, username)
    return ticket.__dict__
