import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {



  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cargo-Meister</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/containers">Containers</Nav.Link>
            <Nav.Link href="/boxes">Boxes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;
