import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'

export const ItemListContainer = ({saludo}) => {

  const data = [
    {id: 1, name: 'Adidas superstar', description: 'Las Superstar son un auténtico ícono que han hecho historia. Desde hace 50 años las Superstar triunfan en las canchas, los escenarios, el skatepark y las calles. Un clásico siempre luce bien', price: 23000, stock: 20, picture: 'https://images.unsplash.com/photo-1593287073863-c992914cb3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'},
    {id: 2, name: 'Adidas Stan Smith', description:'Las Stan Smith llevan más de 50 años dejando su huella. Tras su glorioso debut en las pistas de tenis pasaron a triunfar en las pasarelas, los escenarios y en las calles de la ciudad. Una de las zapatillas mas solicitadas!', price: 22200, stock: 16, picture:'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
    {id: 3, name: 'Nike Air Jordan', description:'El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket.', price: 36000, stock: 5, picture:'https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
  ]

  const promesa = new Promise ( (res, rej)  => {
      setTimeout(() => {
          res(data);
      }, 2000);
  });

  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    promesa.then(res=>{
      setProduct(res)
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoaded(false);
    })
  }, [])

  return (
    <>
    <h1>{saludo}</h1>
    <ItemCount stock = {5} initial = {1}  />
    <div>
    { loaded ? <h1>Loading...</h1> : <ItemList productList = {product}/>}
    </div>
    </>
  )
}
