const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  bulkCraete() {}

  find() {}

  findById() {}
  updateById() {}

  deleteById() {}

  draw() {}
}

const myDB = new MyDB();

module.exports = myDB;
