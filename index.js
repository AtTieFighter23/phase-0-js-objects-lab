// Declare and Initialize the Attendee Object
const attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};

// Log Attendee Name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}

// Log Ticket Price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}

// Update Ticket Type
function updateTicketType(attendee, newTicketType) {
    attendee.ticketType = newTicketType;
}

// Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
    attendee.ticketPrice = newTicketPrice;
}

// Remove Event Property
function removeEventProperty(attendee) {
    delete attendee.event;
}

// Add Checked-in Property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};