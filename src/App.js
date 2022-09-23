import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}> </ItemListContainer>
    </div>
  );
}

export default App;
