import React from "react";
import Card from "../shared/Card";

export default function SearchTicket({ search, setSearch }) {
  return (
    <Card>
      <h2>Search Ticket from your list</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Ticket"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Card>
  );
}
