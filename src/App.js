import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';





function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>
      <ItemListContainer greeting ={"Envios gratis por compras superiores a $ 100.000"}> </ItemListContainer>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
