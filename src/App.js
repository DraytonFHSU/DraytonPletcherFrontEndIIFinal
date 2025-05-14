import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import TicketRoutes from "./routes/TicketRoutes";
import { TicketProvider } from "./components/contexts/TicketContext";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider } from "./components/contexts/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import EventDetails from "./pages/EventDetailsPage"
import CartPage from "./pages/CartPage"
import AddTicket from "./components/Ticket/AddTicket";
import BookingConfirmation from "./pages/BookingConfirmationPage";

// Where all the routing happens
export default function App() {
  return (
    <>
      <AuthContextProvider>
        <TicketProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Ticket/*"
                element={
                  <ProtectedRoute>
                    <TicketRoutes />
                  </ProtectedRoute>
                }
              />
              <Route 
                path="/AddTicket" 
                element={<AddTicket />}  
              />
              <Route 
                path="/EventDetailsPage" 
                element={<EventDetails />}  
              />
              <Route 
                path="/CartPage" 
                element={<CartPage />}  
              />
              <Route 
                path="/BookingConfirmation" 
                element={<BookingConfirmation />}  
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TicketProvider>
      </AuthContextProvider>
    </>
  );
}