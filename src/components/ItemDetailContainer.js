import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {

    const data = {id: 1, name: 'Adidas superstar', description: 'Las Superstar son un auténtico ícono que han hecho historia. Desde hace 50 años las Superstar triunfan en las canchas, los escenarios, el skatepark y las calles. Un clásico siempre luce bien', price: 23000, stock: 20, picture: 'https://images.unsplash.com/photo-1593287073863-c992914cb3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
      
    
      const getItem = new Promise ( (res, rej)  => {
          setTimeout(() => {
              res(data);
          }, 2000);
      });
    
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(true);

  

  useEffect(() => {
    getItem.then(res=>{
      setProduct(res)
    }).catch(err => {
      console.log(err);
    }).finally(() => {
        setSelected(true);
    })
  }, [])

  return (
    <>
        { selected ? <ItemDetail productList = {product} /> : null}
    </>
  )
}
