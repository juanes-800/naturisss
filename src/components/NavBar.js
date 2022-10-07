import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/logo.jpg';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="success">
        <Container>
          <Navbar.Brand href="../App.js">
            <img
              alt="imagen de la shooping"
              src={logo}
              width="160"
            />
            NATURISS
          </Navbar.Brand>
          <CartWidget/>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;