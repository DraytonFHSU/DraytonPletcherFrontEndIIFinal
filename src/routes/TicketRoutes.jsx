import React from "react";
import { Routes, Route } from "react-router-dom";
import Ticket from "../components/Ticket/Ticket";
import NewTicket from "../components/Ticket/NewTicket";

export default function TicketRoutes() {
  return (
    <Routes>
      <Route index element={<Ticket />} />
      <Route path=":id" element={<Ticket />} />
      <Route path="newTicket" element={<NewTicket />} />
    </Routes>
  );
}
