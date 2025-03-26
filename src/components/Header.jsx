


import React, { useContext } from 'react';
import { FaShoppingCart, FaSearch, FaHome , FaUser} from 'react-icons/fa'; // Import icons
import './Header.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { CartContext } from './CartContext';




const Header = ({ searchQuery, setSearchQuery }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <header className="header">
      {/* Store Name with Cart Icon */}
      <div className="store-name">
        <h1>INTEL STORES</h1>
        <p className='cart-name'>Cart</p>
        <Link to="/cart">
           <FaShoppingCart className="cart-icon" />
        
        </Link>
        
      </div>
      <CartContext />

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        <FaSearch className="search-icon" />
        
      </div>

      {/* User Authentication Links */}
      <nav className="auth-links">
        {/* Home Icon */}
        <Link to="/" className="home-icon">
          <FaHome size={25}/>
        
          
        </Link>

        {user ? (
          <>
            {/* Profile Link */}
            <Link to="/profile" className="profile-link">
              <FaUser /> {user.email} {/* Display user email */}
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;