import React, { useState } from 'react';

export default function RequestGood2Go() {
  const [sellerEmail, setSellerEmail] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [amount, setAmount] = useState('');
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files]);
  };

  const handleSubmit = () => {
    console.log({ sellerEmail, itemDetails, amount, photos });
    alert('Good2Go request submitted!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Request a Good2Go</h1>
      <input placeholder="Seller's Email" value={sellerEmail} onChange={e => setSellerEmail(e.target.value)} /><br />
      <textarea placeholder="Item Details" value={itemDetails} onChange={e => setItemDetails(e.target.value)} /><br />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} /><br />
      <input type="file" multiple onChange={handlePhotoUpload} /><br />
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}
