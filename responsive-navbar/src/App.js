import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navbar from './components/Navbar';
import { Home } from './components/Pages/Home';
import { About } from './components/Pages/About';
import { Blog } from './components/Pages/Blog';
import { Contact } from './components/Pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
