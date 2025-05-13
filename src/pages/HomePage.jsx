import AddTicket from "../components/Ticket/AddTicket";
import Tickets from "../components/Ticket/Tickets";


export default function HomePage() {
  return (
    <div className="container">
      <AddTicket />
      <Tickets />
    </div>
  );
}
