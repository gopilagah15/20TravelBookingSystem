import React from 'react';

const MonthlyReport = ({ bookings }) => {
  const currentMonth = new Date().getMonth();
  const monthlyBookings = bookings.filter(
    (booking) => new Date(booking.date).getMonth() === currentMonth
  );

  return (
    <div>
      <h2>Monthly Report</h2>
      <ul>
        {monthlyBookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} booked a trip to {booking.destination} on {new Date(booking.date).toLocaleDateString()} for ${booking.packageCost}
          </li>
        ))}
      </ul>
      <p>Total Bookings This Month: {monthlyBookings.length}</p>
    </div>
  );
};

export default MonthlyReport;
