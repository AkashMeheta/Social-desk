import React from 'react';

const AdminPanel = ({ tickets, assignTicket, resolveTicket }) => {
  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="ticket-item">
          <p>Description: {ticket.description}</p>
          <p>Priority: {ticket.priority}</p>
          <p>Category: {ticket.category}</p>
          <p>Status: {ticket.status}</p>
          <button onClick={() => assignTicket(index)}>Assign</button>
          <button onClick={() => resolveTicket(index)}>Resolve</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
