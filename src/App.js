import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CustomProvider } from './Context/CartContext';
import { Cart } from './components/Cart';
import { Form } from './components/Form';
<meta name="viewport" content="initial-scale=1, width=device-width" />

function App() {
  return (
    <>
      <BrowserRouter>
      <CustomProvider >
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={'Bienvenido a mi pagina react hecha por Ezequiel Huayta Romay para CoderHouse!'}/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer saludo={'Bienvenido a mi pagina react hecha por Ezequiel Huayta Romay para CoderHouse!'}/>}/>
            <Route path="/product/:productId" element={<ItemDetailContainer />}/>
            <Route path="cart/" element={<Cart/>}/>
            <Route path="/payment" element={<Form/>}/>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
