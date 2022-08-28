import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CartScreen from "./screens/CartScreen/CartScreen";

// Components
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/Sidebar/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
    
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
     
    
    </Router>
  );
}

export default App;
