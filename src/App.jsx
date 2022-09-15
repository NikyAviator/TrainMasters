import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
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
