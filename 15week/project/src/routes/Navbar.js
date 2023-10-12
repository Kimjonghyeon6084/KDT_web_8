import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function NavbarMain() {

  const navigate = useNavigate()

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/list')}}>List</Nav.Link>
            <Nav.Link onClick={() => {navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}