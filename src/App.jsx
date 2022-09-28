import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing Pages components
import StartPage from './components/Pages/StartPage';
import BookingPage from './components/Pages/BookingPage';
import TicketsPage from './components/Pages/TicketsPage';
import LogInPage from './components/Pages/LogInPage';
import RegisterPage from './components/Pages/RegisterPage';
import Footer from './components/UI/Footer';
import Nav from "./components/UI/Nav";
//import Header from './components/UI/Header';
//react-bootstrap.github.io/getting-started/introduction/
// Importing boostrap

import '../scss/main.scss';

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/boka' element={<BookingPage />} />
            <Route path='/biljetter' element={<TicketsPage />} />
            <Route path='/logga-in' element={<LogInPage />} />
            <Route path='/registrera' element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}
