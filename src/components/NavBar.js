import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
/*import imagenes from '../assets/img/imagenes';*/
import logo from '../assets/img/logo.jpg';
import Cart from '../components/Cart';
import navBar from '../style/navBar.css'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../App.js">
            <img
              alt=""
              src={logo}
              width="250"
              className="d-inline-block align-top"
            />
            NATURISS
            
          </Navbar.Brand>
          <span className="carrito" ><Cart /></span>
        </Container>
        
      </Navbar>
    </div>
  );
}

export default NavBar;