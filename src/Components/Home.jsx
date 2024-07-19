import React, { useState } from "react";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import AdminPanel from "./AdminPanel";
import Navbar from "./Navbar";
import "../App.css";

const Home = ({display}) => {
   const [tickets, setTickets] = useState([]);

  const createTicket = (ticket) => {
    setTickets([...tickets, { ...ticket, status: "Open" }]);
  };

  const updateTicket = (index) => {
    const newTickets = [...tickets];
    newTickets[index].status =
      newTickets[index].status === "Open" ? "In Progress" : "Closed";
    setTickets(newTickets);
  };

  const assignTicket = (index) => {
    const newTickets = [...tickets];
    newTickets[index].status = "Assigned";
    setTickets(newTickets);
  };

  const resolveTicket = (index) => {
    const newTickets = [...tickets];
    newTickets[index].status = "Resolved";
    setTickets(newTickets);
  };

  return (
    <div className="app">
      <Navbar></Navbar>
      {
        display ?  <><TicketForm createTicket={createTicket} />
        <TicketList tickets={tickets} updateTicket={updateTicket} />
        </> : <AdminPanel
        tickets={tickets}
        assignTicket={assignTicket}
        resolveTicket={resolveTicket}
      />
      }
    </div>
  );
};

export default Home;
