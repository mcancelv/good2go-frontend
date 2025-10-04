import React, { useEffect, useState } from 'react';

export default function SellerDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Dummy data
    setTransactions([{ id: '1', buyerId: 'john@example.com', itemDetails: 'Softball bat', amount: 75 }]);
  }, []);

  const handleAccept = (id) => {
    const trackingNumber = prompt('Enter tracking number:');
    const carrier = prompt('Enter carrier (e.g., USPS, UPS, FedEx):');
    alert(`Transaction ${id} marked as shipped via ${carrier} - ${trackingNumber}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Seller Dashboard</h1>
      {transactions.map(tx => (
        <div key={tx.id} style={{ marginBottom: '1rem' }}>
          <p>Buyer: {tx.buyerId}</p>
          <p>Item: {tx.itemDetails}</p>
          <p>Amount: ${tx.amount}</p>
          <button onClick={() => handleAccept(tx.id)}>Accept & Add Tracking Info</button>
        </div>
      ))}
    </div>
  );
}
