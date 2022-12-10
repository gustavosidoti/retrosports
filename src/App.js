
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer.jsx/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
