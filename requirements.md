# Lottery API

- sell lottery ticket
- update lottery ticket
- delter lottrey ticket
- get all tickets
- get ticket by id
- bulk buy (user can buy multiple ticket at a time)
- raffle draw

Ticket:

- number (unique)
- username
- price
- timestamp

Routes:

- /tickets/t/:ticketId - GET find Single ticket
- /tickets/t/:ticketId - PATCH update ticket by id
- /tickets/t/:ticketId - delete ticket by id
- /tickets/u/:username - GET find Single ticket by username
- /tickets/u/:username - PATCH update tickets for username
- /tickets/u/:username - DELETE all ticket for username
- /tickets/sell -create lottery
- /tickets/bulk - bulk see ticket
- /tickets/draw
- /tickets - find all lottery
-
