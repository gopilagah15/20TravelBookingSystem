import React, { useState } from 'react';
import TripBookingForm from './components/TripBookingForm';
import ItineraryAlerts from './components/ItineraryAlerts';
import InvoiceGenerator from './components/InvoiceGenerator';
import MonthlyReport from './components/MonthlyReport';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [invoices, setInvoices] = useState([]);

  const addBooking = (booking) => setBookings([...bookings, booking]);
  const addAlert = (alert) => setAlerts([...alerts, alert]);
  const addInvoice = (invoice) => setInvoices([...invoices, invoice]);

  return (
    <div>
      <h1>Travel Booking System</h1>
      <TripBookingForm onBook={addBooking} generateInvoice={addInvoice} />
      <ItineraryAlerts alerts={alerts} addAlert={addAlert} />
      <InvoiceGenerator invoices={invoices} />
      <MonthlyReport bookings={bookings} />
    </div>
  );
};

export default App;
