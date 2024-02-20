import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(){
  return (
    <>
                <Navbar bg="dark" variant="dark">
                    <Container className="justify-content-start">
                        <Link to="/" className="text-white ms-5 text-decoration-none">Menu</Link>
                        <Link to="/Home" className="text-white ms-5 text-decoration-none">Home</Link>
                        <Link to="/Contacto" className="text-white ms-5 text-decoration-none">Contacto</Link>
                        <Navbar.Brand >Happy Cake</Navbar.Brand>
                    </Container>
                </Navbar>
        </>
    );
};

export default Navigation;
