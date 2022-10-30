
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../style/navBar.css';
import '../style/itemContador.css';

const NavBar = () => {
  return (
    <>
     <Navbar /*className='sticky-top'*/ bg="light" variant="light">
        <Container>
          <Nav className=" menu ">
            <Nav.Link className='color' as= {NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as= {NavLink} to='/categoria/te'> Te</Nav.Link>
            <Nav.Link as= {NavLink} to='/categoria/vitamina'>Vitamina</Nav.Link>
          </Nav>
            <span> <Nav.Link as= {NavLink} to='cart' className='carrito'><CartWidget/></Nav.Link></span>
          
        </Container>
      </Navbar></>
  );
}

export default NavBar;