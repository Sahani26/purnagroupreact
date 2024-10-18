 
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./components/Header";
 import Energy from "./components/Energy";
 import Footer from './components/Footer';
 import Service from './components/OurServices';
  import Power from './components/PowerProduct';
 
 
function App() {
  return (
    <Router>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Power />} />
       
      </Routes>
    <Footer/>
    </>
  </Router>

  );
}

export default App;
