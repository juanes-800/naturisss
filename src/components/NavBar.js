
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={<Link to='/' >Home</Link>}></Nav.Link>
            <Nav.Link as={<Link to='/categoria'>Te</Link>}> </Nav.Link>
            <Nav.Link as={<Link to='/categoria' >Vitamina</Link>}></Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar></>
  );
}

export default NavBar;