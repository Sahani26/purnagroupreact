import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Energy from "./components/Energy";
import Footer from './components/Footer';
import Service from './components/OurServices';
import Power from './components/PowerProduct';
import Main from './components/Main';
import Contact from './components/ContactUs';
import NotFound from './components/NotFound'; // Optional: create a NotFound component

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
        
    <Route path="/contact" element={<Contact />} />
 
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
