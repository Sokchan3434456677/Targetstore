
// // src/Cart/CartContext.js
// import React, { createContext, useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add items to the cart
//   const addToCart = (product) => {
//     setCartItems((prevCartItems) => {
//       const existingItem = prevCartItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         toast.info(`${product.name} quantity increased!`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         return prevCartItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         toast.success(`${product.name} added to cart!`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         return [...prevCartItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // Function to remove items from the cart
//   const removeFromCart = (productId) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== productId)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// src/Cart/CartContext.js
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart with size and quantity
  const addToCart = (product, size, quantity) => {
    // Ensure quantity is a valid number and at least 1
    const validQuantity = Number.isInteger(quantity) && quantity > 0 ? quantity : 1;

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existingItem) {
        toast.info(`${product.name} (${size}) quantity increased!`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return prevCartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + validQuantity }
            : item
        );
      } else {
        toast.success(`${product.name} (${size}) added to cart!`, {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return [...prevCartItems, { ...product, size, quantity: validQuantity }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  // Function to update the size and quantity of an item in the cart
  const updateCartItem = (productId, updates) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, ...updates } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};



// // CartContext.js
// import React, { createContext, useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items from localStorage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(savedCartItems);
//   }, []);

//   // Save cart items to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add items to the cart with size and quantity
//   const addToCart = (product, size, quantity = 1) => {
//     console.log('Adding product to cart:', product, size, quantity);
//     const validQuantity = Number.isInteger(quantity) && quantity > 0 ? quantity : 1;

//     setCartItems((prevCartItems) => {
//       const existingItem = prevCartItems.find(
//         (item) => item.id === product.id && item.size === size
//       );

//       if (existingItem) {
//         toast.info(`${product.name} (${size}) quantity increased!`, {
//           position: 'top-right',
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         return prevCartItems.map((item) =>
//           item.id === product.id && item.size === size
//             ? { ...item, quantity: item.quantity + validQuantity }
//             : item
//         );
//       } else {
//         toast.success(`${product.name} (${size}) added to cart!`, {
//           position: 'top-right',
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         return [...prevCartItems, { ...product, size, quantity: validQuantity }];
//       }
//     });
//   };

//   // Function to remove items from the cart
//   const removeFromCart = (productId) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.filter((item) => item.id !== productId)
//     );
//   };

//   // Function to update the size and quantity of an item in the cart
//   const updateCartItem = (productId, updates) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((item) =>
//         item.id === productId ? { ...item, ...updates } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateCartItem }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };