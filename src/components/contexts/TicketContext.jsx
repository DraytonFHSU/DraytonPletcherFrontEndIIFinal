import { useState, createContext, useEffect } from "react";
import TicketData from "../Ticket/TicketData";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketList, setTicketList] = useState([]);
  const [ticketEdit, setTicketEdit] = useState({
    ticket: {},
    edit: false,
  });

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const ticketListRef = collection(db, "ticketList");
        const q = query(ticketListRef, orderBy("title"), limit(10));
        const querySnapshot = await getDocs(q);
        const ticketList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTicketList(ticketList);
      } catch (error) {
        console.error("Error Fetching Ticket List", error);
      }
    };
    fetchTicket();
  }, []);

  //Add the ticket
  const addTicket = (newTicket) => {
    newTicket.id = uuidv4();
    newTicket.checked = false;
    try {
      const docRef = addDoc(collection(db, "ticketList"), newTicket);
      // console.log("Document written: ", docRef.id);
      setTicketList((preTicketList) => [
        ...preTicketList,
        { id: docRef.id, data: newTicket },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  //To edit the ticket
  const editTicket = (ticket) => {
    setTicketEdit({ ticket, edit: true });
  };

  //Update ticket
  const updateTicket = (id, updTicket) => {
    const docRef = doc(db, "ticketList", id);
    console.log(id, updTicket);
    updateDoc(docRef, updTicket);
    // setTicketList(
    //   ticketList.map((ticket) => (ticket.id === id ? { ...ticket, ...updTicket } : ticket))
    // );
    setTicketList((preTicketList) => [
      ...preTicketList,
      { id: docRef.id, data: updTicket },
    ]);
  };


  //Delete the ticket
  const deleteTicket = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const docRef = doc(db, "ticketList", id);
        await deleteDoc(docRef);
        setTicketList(ticketList.filter((ticket) => ticket.id !== id));
      } catch (error) {
        console.error("Error deleting ticket:", error);
      }
    }
  };

  const checkTicket = (id) => {
    setTicketList(
      ticketList.map((ticket) =>
        ticket.id === id ? { ...ticket, checked: !ticket.checked } : ticket
      )
    );
  };

  return (
    <TicketContext.Provider
      value={{
        ticketList,
        deleteTicket,
        checkTicket,
        addTicket,
        editTicket,
        updateTicket,
        ticketEdit,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketContext;
