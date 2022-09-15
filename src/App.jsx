import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import "../scss/main.scss";
export default function App() {
  return (
    <Router>
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
