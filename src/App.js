import { Routes, Route } from 'react-router-dom'; 

import Header from './components/Header';

import HomePage from './routes/HomePage';
import ContactUs from './routes/ContactUs';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}
