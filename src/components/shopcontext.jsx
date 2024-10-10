import React, { createContext, useState } from 'react';
import { PRODUCTS, PRODUCTS1 } from '../components/products';

// context
export const ShopContext = createContext(null);

// function to get default cart
const getDefaultCart = () => {
  const cart = [];
  for (let i = 0; i < PRODUCTS.length + PRODUCTS1.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = [...PRODUCTS, ...PRODUCTS1].find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  // Get total number of products in cart
  const getTotalCartProducts = () => {
    let totalProducts = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProducts += cartItems[item];
      }
    }
    return totalProducts;
  };

  // Cart operations
  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: newAmount,
    }));
  };

  const clearCart = () => {
    const updatedCartItems = {};
    for (const productId in cartItems) {
      updatedCartItems[productId] = 0;
    }
    setCartItems(updatedCartItems);
  };

  const resetCart = () => {
    const updatedCartItems = getDefaultCart(); // Reset to default cart
    setCartItems(updatedCartItems);
  };

  const viewProductDetails = (productId) => {
    setSelectedProduct(productId);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartProducts,
    resetCart, // Include resetCart here
    clearCart,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
    products: [...PRODUCTS, ...PRODUCTS1], // Provide all products in context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
