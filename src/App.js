import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestGood2Go from './components/RequestGood2Go';
import SellerDashboard from './components/SellerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestGood2Go />} />
        <Route path="/seller" element={<SellerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
