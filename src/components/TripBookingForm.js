import React, { useState } from 'react';

const TripBookingForm = ({ onBook, generateInvoice }) => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [packageCost, setPackageCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { id: Date.now(), name, destination, date, packageCost };
    onBook(booking);
    generateInvoice({ ...booking, invoiceId: `INV-${Date.now()}` });
    setName('');
    setDestination('');
    setDate('');
    setPackageCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Trip</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={packageCost}
        onChange={(e) => setPackageCost(e.target.value)}
        placeholder="Package Cost"
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default TripBookingForm;
