import './App.css';
import React from 'react';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Veg from './Pages/Veg';
import FAQpage from './Pages/FAQpage';
import NonVeg from './Pages/NonVeg';
import Seafood from './Pages/SeaFood';
import Login from './Pages/Login';
import InfoFood from './Pages/InfoFood';
import Cart from './Pages/Cart';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {

  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/home")
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faq" element={<FAQpage />} />
        <Route path="veg/*" element={<Veg />} />
        <Route path="nonveg/*" element={<NonVeg />} />
        <Route path="seafood/*" element={<Seafood />} />
        <Route path="login/*" element={<Login />} />
        <Route path="/meals/:id" element={<InfoFood />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
