import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar className="navbar">
      <Container>
        <Container className="d-flex gap-5">
          <Link to="/">🏡 Home</Link>
          <Link to="/contacto">📒 Contacto</Link>
        </Container>
        <Navbar.Brand>🍰 Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
