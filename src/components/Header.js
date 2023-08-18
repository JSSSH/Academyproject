import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../css/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return(
    <div className="Header">
      <Navbar>
        <Container>
          <Navbar.Brand className="logoimg" onClick={() => {navigate('/')}}>
            <img style={{cursor: "pointer"}} className="logo" width='100px' height='50px' src={`${process.env.PUBLIC_URL}/img/logo.png`} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className="nav_left">
              <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={() => {navigate('/shop')}}>Shop</Nav.Link>
            </div>
            <div className="nav_right">
              <Nav.Link onClick={() => {navigate('/signup')}}>Sign up</Nav.Link>
              <Nav.Link onClick={() => {navigate('/login')}}>Login</Nav.Link>
              <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;