import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Branding from "./components/categories/branding/Branding";
import BrandingProducts from "./components/categories/branding/BrandingProducts";
import Electrical from "./components/categories/electricals/Electrical";
import ElectricalProducts from "./components/categories/electricals/ElectricalProducts";
import Home from "./components/Home";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import { Footer, Navbar } from "flowbite-react";

function App() {
  return (
    <div className="bg-green-500">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/bproducts" element={<BrandingProducts />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/eproducts" element={<ElectricalProducts />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
