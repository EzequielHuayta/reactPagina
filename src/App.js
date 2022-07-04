import NavBar from './components/NavBar';
import FontStyle from './fontStyles';
import GlobalStyles from './globalStyles';
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

    <NavBar />
    <ItemListContainer saludo={'Bienvenido a mi pagina react!'}/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
