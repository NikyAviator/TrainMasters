import { useState, useEffect } from 'react';
import useStates from './utilities/useStates';
import { factory } from './utilities/FetchHelper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import BookingPage from './pages/BookingPage';
import TicketsPage from './pages/TicketsPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
