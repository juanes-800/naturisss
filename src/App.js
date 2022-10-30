import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import Alerted from './components/Alerted';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
         <NavBar/>
          <Routes>
           <Route path= '/' element={<ItemListContainer greeting ={<Alerted/>}/>}/>
           <Route path= '/categoria/:categoriaId' element={<ItemListContainer />}/>
           <Route path= '/cart' element={<Cart/>}/>
           <Route path= '/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
