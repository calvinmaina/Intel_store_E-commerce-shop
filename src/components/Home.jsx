
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext"; // Import CartContext
import "./Home.css"; // Import CSS for styling
import product1 from "../assets/sneaker1.png";
import product2 from "../assets/sneaker2.png";
import product3 from "../assets/sneaker3.png";
import product4 from "../assets/sneaker4.png";
import product5 from "../assets/sneaker5.png";
import product6 from "../assets/sneaker6.png";
import product7 from "../assets/sneaker7.png";
import product8 from "../assets/sneaker8.png";
import product9 from "../assets/sneaker9.png";
import product10 from "../assets/sneaker10.png";
import product11 from "../assets/sneaker11.png";
import product12 from "../assets/sneaker12.png";
import product13 from "../assets/sneaker13.png";
import product14 from "../assets/sneaker14.png";
import product15 from "../assets/sneaker15.png";
import product16 from "../assets/sneaker16.png";
import product17 from "../assets/sneaker17.png";
import product18 from "../assets/sneaker18.png";

// Sample product data
const initialProducts = [
  {
    id: 1,
    name: "Leather Boots shoes White",
    price: 4000,
    image: product1,
    stock: 10, // Add stock field
  },
  {
    id: 2,
    name: "J4 Yellow",
    price: 3500,
    image: product2,
    stock: 15, // Add stock field
  },
  {
    id: 3,
    name: "Women Casual shoes",
    price: 3500,
    image: product3,
    stock: 15, // Add stock field
  },
  {
    id: 4,
    name: "Trendy Sneakers Stylish",
    price: 3500,
    image: product4,
    stock: 15, // Add stock field
  },
  {
    id: 5,
    name: "Sports Unisex sneakers",
    price: 3500,
    image: product5,
    stock: 15, // Add stock field
  },
  {
    id: 6,
    name: "White Airforce",
    price: 3500,
    image: product6,
    stock: 15, // Add stock field
  },
  {
    id: 7,
    name: "Green Airforce 1",
    price: 3500,
    image: product7,
    stock: 15, // Add stock field
  },
  {
    id: 8,
    name: "Women Sports Sneakers",
    price: 3500,
    image: product8,
    stock: 15, // Add stock field
  },
  {
    id: 9,
    name: "Leather Sneakers",
    price: 3500,
    image: product9,
    stock: 15, // Add stock field
  },
  {
    id: 10,
    name: "Men Sneakers",
    price: 3500,
    image: product10,
    stock: 15, // Add stock field
  },
  {
    id: 11,
    name: "Casual Sneakers White",
    price: 3500,
    image: product11,
    stock: 15, // Add stock field
  },
  {
    id: 12,
    name: "Comfortable Best Men sneakers",
    price: 3500,
    image: product12,
    stock: 15, // Add stock field
  },
  {
    id: 13,
    name: "Unisex Sports Blue Sneakers",
    price: 3500,
    image: product13,
    stock: 15, // Add stock field
  },
  {
    id: 14,
    name: "Fabric Casual Sneakers",
    price: 3500,
    image: product14,
    stock: 15, // Add stock field
  },
  {
    id: 15,
    name: "Red J1 Sneakers",
    price: 3500,
    image: product15,
    stock: 15, // Add stock field
  },
  {
    id: 16,
    name: "Men White Black Sneakers",
    price: 3500,
    image: product16,
    stock: 15, // Add stock field
  },
  {
    id: 17,
    name: "Men White Casual Sneakers",
    price: 3500,
    image: product17,
    stock: 15, // Add stock field
  },
  {
    id: 18,
    name: "Unisex White Sneakers",
    price: 3500,
    image: product18,
    stock: 15, // Add stock field
  },
];

const Home = ({ searchQuery, setSearchQuery }) => {
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [products, setProducts] = useState(initialProducts); // State for products
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "", // Add stock field
    image: null,
  });

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle image file input
  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const product = {
      id: Date.now(), // Unique ID for the product
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock), // Add stock field
      image: newProduct.image ? URL.createObjectURL(newProduct.image) : "https://via.placeholder.com/150", // Use a placeholder if no image is uploaded
    };

    // Add the new product to the products list
    setProducts([...products, product]);

    // Reset the form
    setNewProduct({
      name: "",
      price: "",
      stock: "", // Reset stock field
      image: null,
    });
  };

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      addToCart(product); // Add to cart
      // Decrease the stock by 1
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
    } else {
      alert("This product is out of stock!");
    }
  };

  return (
    <div className="home-page">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="store-info">
          <h2>FREE DELIVERY!! SHOP SMART!!</h2>
          <p>Welcome to Intel stores! We offer the best sneakers for all!</p>
          <p>Location: Nyamakima street, Nairobi</p>
          <div className="social-links">
            <a href="https://instagram.com/Jimecstores" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
            <br />
            <a href="https://facebook.com/Jimecstores" target="_blank" rel="noopener noreferrer">
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Product Form */}
        <div className="product-form">
          <h2>Add a New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Price (ksh):</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Stock Available:</label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Product Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Add Product
            </button>
          </form>
        </div>

        {/* Product List */}
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p>ksh {product.price.toFixed(2)}</p>
              <p>Stock: {product.stock}</p> {/* Display stock */}
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart"
                disabled={product.stock === 0} // Disable button if stock is 0
              >
                {product.stock === 0 ? "Out of Stock" : "Add To Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;