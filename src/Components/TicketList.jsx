import React from 'react';

const TicketList = ({ tickets, updateTicket }) => {
  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      {tickets.length === 0 && <p>No tickets available.</p>}
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket-item">
          <p>Description: {ticket.description}</p>
          <p>Priority: {ticket.priority}</p>
          <p>Category: {ticket.category}</p>
          <p>Status: {ticket.status}</p>
          <button onClick={() => updateTicket(index)}>Update Status</button>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
