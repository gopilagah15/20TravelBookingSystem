import React, { useState } from 'react';

const ItineraryAlerts = ({ alerts, addAlert }) => {
  const [message, setMessage] = useState('');

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    addAlert({ id: Date.now(), message });
    setMessage('');
  };

  return (
    <div>
      <h2>Itinerary Alerts & Reminders</h2>
      <form onSubmit={handleAlertSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Alert message"
          required
        />
        <button type="submit">Add Alert</button>
      </form>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>{alert.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryAlerts;
