/// <reference path="./global.d.ts" />
// @ts-check

/
 
//Creates a new visitor.*
//@param {string} name
//@param {number} age
//@param {string} ticketId
//@returns {Visitor} the visitor that was created*/
export function createVisitor(name, age, ticketId) {
  let visitorPark = {
    name: name,
    age: age,
    ticketId: ticketId,
  }

  return visitorPark
}

/
 
Revokes a ticket for a visitor.*
@param {Visitor} visitor the visitor with an active ticket
@returns {Visitor} the visitor without a ticket*/
export function revokeTicket(visitor) {
  visitor.ticketId = null

  return visitor
}

/
 
Determines the status a ticket has in the ticket tracking object.*
@param {Record<string, string|null>} tickets
@param {string} ticketId
@returns {string} ticket status*/
export function ticketStatus(tickets, ticketId) {
  let ticket
    if (tickets[ticketId] === null) {
      ticket = 'not sold'
    } else if (tickets[ticketId] != undefined) {
      ticket = sold to ${tickets[ticketId]}
    } else {
      ticket = 'unknown ticket id'
  }
  return ticket
}

/
 
Determines the status a ticket has in the ticket tracking object
and returns a simplified status message.*
@param {Record<string, string|null>} tickets
@param {string} ticketId
@returns {string} ticket status*/
export function simpleTicketStatus(tickets, ticketId) {
    let ticket
    if (tickets[ticketId] === null) {
      ticket = 'invalid ticket !!!'
    } else if (tickets[ticketId] != undefined) {
      ticket = ${tickets[ticketId]}
    } else {
      ticket = 'invalid ticket !!!'
  }
  return ticket
}

/**
 
Determines the version of the GTC that was signed by the visitor.*
@param {VisitorWithGtc} visitor
@returns {string | undefined} version*/
export function gtcVersion(visitor) {
  let visitorStatus
  if (visitor.gtc) {
    visitorStatus = visitor.gtc.version
  } else {
    visitorStatus = undefined
  }

  return visitorStatus
}