import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/pages/StartPage";
import BookingPage from "./components/pages/BookingPage";
import TicketsPage from "./components/pages/TicketsPage";
import LogInPage from "./components/pages/LogInPage";
import RegisterPage from "./components/pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
