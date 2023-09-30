import { Container } from "react-bootstrap";

export function Contacto() {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-column min-vh-100">
      <h1>Cuéntanos ¿en qué te podemos ayudar?</h1>

      <div className="form d-flex flex-column w-100 text-center gap-3 mt-5">
        <p>Correo:</p>
        <input type="email" placeholder="name@example.com" />
        <p>Descripción:</p>
        <textarea rows="8" />
        <div className="button align-center">
          <button className="btn btn-primary bg-pink">Enviar</button>
        </div>
      </div>
    </Container>
  );
}
