# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Task Description:

Created a ReactJS application that fetches product data from the Fake Store API and allows users to add products to the cart through a modal interface.

Task Requirements:

Used the Fake Store API to fetch a list of products.

Displayed the fetched products in a user-friendly format on the main page.

Each product displays key information, such as the product image, title, price, and add to cart button.

When the add to cart button is clicked it adds the product in the cart.

When the product is already added to the cart second time onclick will display the Alert with the message “Item already added to the cart”.

the products are displayed in a responsive layout.

the current cart items count is displayed in a Navbar component.

A modal will open, If a user clicks the "Cart" button which contains no.of.products in the cart.

The modal will display all the products which are added in the cart.

"Remove" button for all the products within the modal, when clicked, removes the product from the cart.

necessary datas (product details, cart state, etc.)are passed down to the child components using props.

Clean, readable, and well-documented code.

A responsive design that works well on both desktop and mobile devices.

Techstacks needs to be used :

ReactJs
HTML/Tailwind CSS for styling
JavaScript for functionality
