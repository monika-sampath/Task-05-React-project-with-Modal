
import React, { useEffect, useState } from "react";
import ProductBox from "./Components/ProductBox";
import NavBar from "./Components/NavBar";
import CartModal from "./Components/CartModal";

// create a function with variable name App

const App = () => {
  
// useState is used to Rerender productData, cart and showModal
  const [productData, setProducttData] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
// fetch() method is used to get data from fakestoreapi 
const API_URL = "https://fakestoreapi.com/products";
  const getProductData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducttData(data);
  };
// useEffect is used to call getProductData funtion
  useEffect(() => {
    getProductData();
  }, []);
// function to show alert message whwn product is already added to the cart
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const itemExists = cart.some((item) => item.id === product.id);
    if (itemExists) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const openCart = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };  

// components NavBar,ProductBox and CartModal is been imported
  return (
    <div className="">
      <NavBar cartCount={cart.length} openCart={openCart} />
      <div className="flex flex-wrap justify-evenly items-center gap-6 bg-orange-50 shadow-lg mx-10 py-7">
        {productData.map((product) => {
          return (
            <ProductBox
              key={product.id}
              product={product}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          );
        })}
      </div>
      {showModal && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
