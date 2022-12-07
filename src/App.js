
import './App.css';
import Footer from './components/Footer.jsx/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola, este es el contenido" />
    <Footer />
    </>
  );
}

export default App;
