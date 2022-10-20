import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing Pages components
import StartPage from './components/Pages/StartPage';
import BookingPage from './components/Pages/BookingPage';
import TicketsPage from './components/Pages/TicketsPage';
import LogInPage from './components/Pages/LogInPage';
import RegisterPage from './components/Pages/RegisterPage';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import CardDetails from './components/Pages/CardDetails';
import PaymentPage from './components/Pages/PaymentPage';
import ConfirmationPage from './components/Pages/ConfirmationPage';
import { useState } from 'react';
//react-bootstrap.github.io/getting-started/introduction/
// Importing boostrap

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <main>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/boka' element={<BookingPage />} />
            <Route path='/biljetter' element={<TicketsPage />} />
            <Route
              path='/logga-in'
              element={
                <LogInPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              }
            />
            <Route path='/registrera' element={<RegisterPage />} />
            <Route path='/details' element={<CardDetails />} />
            <Route path='/betala' element={<PaymentPage />} />
            <Route path='/bekraftelse' element={<ConfirmationPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
