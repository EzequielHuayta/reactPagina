import React, { createContext, useState } from 'react'



export const context = createContext();
const { Provider } = context;
export const CustomProvider = ( { children } ) => {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => { 
    console.log(product)
    isInCart(product.id) ? console.log('existe') : setProducts([...products, product])

  };

  const removeProduct = (id) => {
    const removeProducts = products.filter(product => product.id !== id)
    setProducts(removeProducts);
  };

  const clear = () => {
    setProducts([]);
  };

  const isInCart = (id) => {

    return products.some(product => product.id === id)
  };

  const getTotal = () => {
    console.log("total")
  }

  console.log(products);
  

  return (
    <Provider value={{ products, addProduct, removeProduct, getTotal, clear }}>
      {children}
    </Provider>
  )

}
