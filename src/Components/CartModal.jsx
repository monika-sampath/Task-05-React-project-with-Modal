import React from "react";

// Props method is used to send data from app.jsx to component CartModal
// function CartModal returns a div that displayes product img, title, remove button and a close button 


function CartModal({ cart, removeFromCart, closeModal }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-80 max-h-96 overflow-y-auto gap-2">
        <h2 className="font-bold text-xl">Your Cart</h2>
        <ul className="mt-4">
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-2 border-b"
              >
                <img src={item.image} alt="" className="h-6" />
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 px-2 py-1 rounded text-white"
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
        <button
          onClick={closeModal}
          className="bg-gray-500 mt-4 px-4 py-2 rounded w-full text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
