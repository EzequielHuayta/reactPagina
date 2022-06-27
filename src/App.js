import NavBar from './components/NavBar';
import FontStyle from './fontStyles';
import GlobalStyles from './globalStyles';
import { ItemListContainer } from './components/ItemListContainer';

<meta name="viewport" content="initial-scale=1, width=device-width" />

function App() {
  return (
    <>

      <NavBar />
      <ItemListContainer saludo={'Bienvenido a mi pagina react!'}/>
    </>
  );
}

export default App;
