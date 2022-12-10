
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer.jsx/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./components/NavBar/NavBar";
import CartWidgetList from './components/CartWidget/CartWidgetList';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cartWidgetList' element={<CartWidgetList />}/>
        
        <Route path='*' element={ <h1>404: Recurso no encontrado </h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
