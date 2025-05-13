import React, { useState, useContext } from "react";
import TicketContext from "../contexts/TicketContext";
import SearchTicket from "./SearchTicket";
import Ticket from "./Ticket";
import { useNavigate } from "react-router-dom";

export default function Tickets() {
  const [search, setSearch] = useState("");

  const { ticketList } = useContext(TicketContext);
    const navigate = useNavigate();

  // const result = ticketList.filter((ticket) =>
  //   ticket.title.toLowerCase().includes(search.toLowerCase())
  // );

  const result = ticketList;

  return (
    <>
      <SearchTicket search={search} setSearch={setSearch} />
      {result.length ? (
        <div>
          {result.map((ticket, index) => (
            <>
            <Ticket
              key={ticket.data.id}
              id={ticket.id}
              title={ticket.data.title}
              description={ticket.data.description}
              date={ticket.data.date}
              location={ticket.data.location}
              price={ticket.data.price}
              checked={ticket.data.checked}
              ticket={ticket}
            />
            <button onClick={() => 
              navigate("/EventDetailsPage", {state: {eventDetails:ticket}})
            } className="Event Details">
            <p>See Details</p>
            </button>
            </>
          ))}
        </div>
      ) : (
        <p>Ticket List is empty</p>
      )}
    </>
  );
}
