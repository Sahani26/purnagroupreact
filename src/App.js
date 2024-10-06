 
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Header from "./components/Header";
 import Energy from "./components/Energy";
 import Footer from './components/Footer'
 
 
 
function App() {
  return (
    <Router>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Energy />} />
       
      </Routes>
    <Footer/>
    </>
  </Router>

  );
}

export default App;
