import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navigation() {


    return (


        <Navbar bg="danger" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    Components
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Props</Nav.Link>
                    <Nav.Link as={Link} to="/character2">Hooks States</Nav.Link>
                    <Nav.Link as={Link} to="/character3">CRUD</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;