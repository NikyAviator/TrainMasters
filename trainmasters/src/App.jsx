import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<StartPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
