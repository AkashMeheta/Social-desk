import React, { useState } from 'react';

const TicketForm = ({ createTicket }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTicket({ description, priority, category });
    setDescription('');
    setPriority('Low');
    setCategory('General');
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <h2>Raise a Ticket</h2>
      <div>
        <label>Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Priority</label>
        <select 
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Category</label>
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Technical">Technical</option>
          <option value="Billing">Billing</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
