import React from 'react';

const InvoiceGenerator = ({ invoices }) => {
  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.invoiceId}>
            Invoice ID: {invoice.invoiceId} | Name: {invoice.name} | Destination: {invoice.destination} | Package Cost: ${invoice.packageCost}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceGenerator;
