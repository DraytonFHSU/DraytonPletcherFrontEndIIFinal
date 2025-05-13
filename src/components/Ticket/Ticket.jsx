import React, { useContext } from "react";
import Card from "../shared/Card";
import TicketContext from "../contexts/TicketContext";

export default function Ticket({ id, title, description, date, location, price, checked, ticket }) {
  const { checkTicket, deleteTicket, editTicket } = useContext(TicketContext);
  return (
    <>
      <Card>
        <div
          className="text-display"
          style={null}
        >
          {title}
        </div>
        <div
          className="text-display"
          style={null}
        >
          {description}
        </div>
        <div
          className="text-display"
          style={null}
        >
          {date}
        </div>
        <div
          className="text-display"
          style={null}
        >
          {location}
        </div>
        <div
          className="text-display"
          style={null}
        >
          {price}
        </div>
        <button onClick={() => editTicket(ticket)} className="edit">
          <p>Edit</p>
        </button>
        <button onClick={() => deleteTicket(id)} className="delete">
          <p>Delete</p>
        </button>
      </Card>
    </>
  );
}
