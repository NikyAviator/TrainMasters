import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing Pages components
import StartPage from './pages/StartPage';
import BookingPage from './pages/BookingPage';
import TicketsPage from './pages/TicketsPage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import Header from './components/Header';
//react-bootstrap.github.io/getting-started/introduction/
// Importing boostrap
import './App.scss';
import '../scss/main.scss';

export default function App() {
  return (
    <>
      <Router>
        <Header />
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
