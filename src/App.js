import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';



function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container">

      <Router>
        <Routes>
          <Route path='/main' element={<Home />} />
        </Routes>
      </Router>



        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Router>



        <Router>
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>

        <Router>
          <Routes>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
