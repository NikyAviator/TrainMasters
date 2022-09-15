import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
export default function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}
