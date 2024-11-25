
import React from "react";
// Props method is used to send data from app.jsx to component ProductBox
// function ProductBox returns a div that displayes product img, title, price and a add to cart button 
// when onClick happens the product will be added to the cart-modal and the cart count will increase
const ProductBox = ({ product, addToCart, isInCart }) => {
  return (
    <div className="flex flex-col items-center gap-6 border-2 bg-white shadow-lg p-4 rounded-xl w-60 h-80">
      <img className="w-28 h-32" src={product.image} alt={product.title} />
      <p className="line-clamp-2 font-semibold text-center text-sm">
        {product.title}
      </p>
      <p className="text-gray-700 text-sm">Price: $ {product.price}</p>
      <button
        type="button"
      className="border-2 hover:shadow-sm hover:shadow-blue-800 px-4 py-2 border-blue-900 rounded-xl"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};



export default ProductBox
