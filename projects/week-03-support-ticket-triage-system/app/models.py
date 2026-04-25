from dataclasses import dataclass


@dataclass
class Ticket:
    id: int
    title: str
    priority: str
    status: str
    assigned_user: str | None
