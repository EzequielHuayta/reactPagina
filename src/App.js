import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { CartWidget } from './components/CartWidget';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
<meta name="viewport" content="initial-scale=1, width=device-width" />

function App() {
  return (
    <>
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={'Bienvenido a mi pagina react!'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer saludo={'Bienvenido a mi pagina react!'}/>}/>
          <Route path="/product/:productId" element={<ItemDetailContainer />}/>
          <Route path="cart/" element={<CartWidget/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
