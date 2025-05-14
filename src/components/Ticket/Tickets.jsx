import React, { useState, useContext } from "react";
import TicketContext from "../contexts/TicketContext";
import SearchTicket from "./SearchTicket";
import Ticket from "./Ticket";
import { useNavigate } from "react-router-dom";


export default function Tickets() {
  const [search, setSearch] = useState("");
  const { ticketList } = useContext(TicketContext);
  const navigate = useNavigate();

  // Filter tickets based on search input
  const filteredTickets = ticketList.filter((ticket) =>
    ticket.data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchTicket search={search} setSearch={setSearch} />
      {filteredTickets.length ? (
        <div>
          {filteredTickets.map((ticket) => (
            <div key={ticket.id}>
              <Ticket
                id={ticket.id}
                title={ticket.data.title}
                description={ticket.data.description}
                date={ticket.data.date}
                location={ticket.data.location}
                price={ticket.data.price}
                checked={ticket.data.checked}
                ticket={ticket}
              />
              <button
                onClick={() =>
                  navigate("/EventDetailsPage", {
                    state: { eventDetails: ticket },
                  })
                }
                className="event-details-button"
              >
                <p>See Details</p>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tickets found.</p>
      )}
    </>
  );
}