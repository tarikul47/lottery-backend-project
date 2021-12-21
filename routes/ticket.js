const router = require("express").Router();
const db = require("../db/db");

/*
router.get("/tickets/t/:ticketId", () => {});
router.patch("/tickets/t/:ticketId", () => {});
router.delete("/tickets/t/:ticketId", () => {});
*/

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const updateTicket = db.updateById(ticketId, req.body);
    res.status(200).json({ message: "Updated Successfully", updateTicket });
  })
  .delete((req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
  });

router
  .route("/u/:username")
  .get((req, res) => {
    const username = req.params.username;
    const ticket = db.findByUsername(username);
    res.status(200).json(ticket);
  })
  .patch(() => {})
  .delete(() => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  console.log(req.body);
  const ticket = db.create(username, price);
  res.status(201).json({ message: "Ticket Created Successfully", ticket });
});
router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = db.bulkCraete(username, price, quantity);
  res
    .status(201)
    .json({ message: "Bulk Ticket Created Successfully", tickets });
});
router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = db.draw(winnerCount);
  res.status(200).json(winners);
});
router.get("", (_req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
