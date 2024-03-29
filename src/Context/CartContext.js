import React, { createContext, useEffect, useState } from 'react'



export const context = createContext();
const { Provider } = context;
export const CustomProvider = ( { children } ) => {

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  
  console.log(products);

  const addProduct = (product, quantity) => {
    
  console.log(products); 

    if (isInCart(product.id)) {
      const found = products.find((newProduct) => newProduct.id === product.id);
      const index = products.indexOf(found);
      const aux = [...products];
      aux[index].quantity += quantity
      setProducts(aux);
    } else { 
      console.log('no existe');
      product.quantity = quantity;
      setProducts([...products, product]);
    }
    
  };

  const removeProduct = (id) => {
    const removeProducts = products.filter(product => product.id !== id)
    setProducts(removeProducts);
  };

  const clear = () => {
    setProducts([]);
  };



  const getTotal = () => {
    let total = 0;
    products.forEach( product => total += product.price * product.quantity)
    setTotal(total);
  }

  const isInCart = (id) => {

    return products.some(product => product.id === id)
  };



  

  return (
    <Provider value={{ products, addProduct, removeProduct, clear, total, getTotal }}>
      {children}
    </Provider>
  )

}
