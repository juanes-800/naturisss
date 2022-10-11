import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}/>}/>
        <Route path= '/categoria' element={<ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}/>}/>
        <Route path= '/detalle' element={<ItemDetailContainer/>}/>

      </Routes>
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
