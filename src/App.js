import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import AppLayout from './components/AppLayout/AppLayout';

function App() {


  return (
    <div>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AppLayout>

      </Router>
    </div>
  );
}

export default App;
