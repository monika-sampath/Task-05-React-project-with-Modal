import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

// Props method is used to send data from app.jsx to component NavBar
// function NavBar returns a div that displayes the store name and a button named cart and cart count 
// when onClick happens a modal opens with cart information
function NavBar({ cartCount, openCart }) {
  return (
    <div className="flex flex-row justify-around items-center gap-4 border-blue-950 bg-orange-50  mx-10 py-2 border-b-2  h-28" id='navBar'>
      <h1 className="font-semibold text-4xl text-blue-950" id='h1'>Urban Haven</h1>
      <div className="flex flex-row items-center gap-5">
        <FaCartShopping />
        <button
          className="font-semibold hover:font-bold text-4xl text-blue-950 hover:underline"
          onClick={openCart}
        >
          Cart
        </button>
        <div
          className="items-center bg-blue-200 shadow-md rounded-full w-8 h-8 text-center text-lg font-semibold"
          onClick={openCart}
        >
          {cartCount}
        </div>
      </div>
    </div>
  );
}



export default NavBar
