import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
         <NavBar/>
          <Routes>
           <Route path= '/' element={<ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}/>}/>
           <Route path= '/categoria/:categoriaId' element={<ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}/>}/>
           <Route path= '/cart' element={<CartWidget/>}/>
           <Route path= '/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
