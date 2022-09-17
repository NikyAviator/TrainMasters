import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import BookingPage from "./pages/BookingPage";
import TicketsPage from "./pages/TicketsPage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";

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
