


// src/App.js
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./AuthContext";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Profile from './Profile';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import { useState } from 'react';





// src/components/Cart.js

const App = () => {
  const [searchQuery, setSearchQuery] = useState('') ;
  return (
    <CartProvider>
      <Router>
      <AuthProvider>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
         
        
        
        
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthProvider>
      </Router>  
    </CartProvider>
  );
};

export default App;