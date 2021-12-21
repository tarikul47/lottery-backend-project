const res = require("express/lib/response");
const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns ticket
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create bulk ticket and retun result as Array
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCraete(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
      return result;
    }
  }

  /**
   * return all available tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * find a single ticket
   * @param {string} ticketId
   */
  findById(ticketId) {
    /**
     * @param {Ticket} ticket
     * @returns ticket
     */
    const ticket = this.tickets.find((ticket) => ticket.id == ticketId);
    return ticket;
  }
  /**
   * find tickets under a username
   * @param {string} username
   * @returns tickets
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      (ticket) => ticket.username == username
    );
    return tickets;
  }
  /**
   *
   * @param {string} ticketId
   * @param {{username:string,price:number}} ticketBody
   * @returs Ticket
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id == ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  /**
   * find winners
   * @param {number} winnerCount
   * @returns array Tickets
   */
  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    for (let i = 0; i < indexes.length; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
    const winners = indexes.map((index = this.tickets[index]));
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;
