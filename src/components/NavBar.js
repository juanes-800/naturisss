
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features"> Te</Nav.Link>
            <Nav.Link href="#pricing">Vitamina</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar></>
  );
}

export default NavBar;