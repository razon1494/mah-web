import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../assets/css/NavigationBar.css";
import logo from "../../../../assets/img/LOGO.png";
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                className="nav-items fs-5 px-5  py-2 fw-bold text-dark"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="nav-items fs-5 px-5  py-2 fw-bold text-dark"
                to="/property"
              >
                Property Preservation
              </Link>
              <Link
                className="nav-items fs-5 px-5  py-2 fw-bold text-dark"
                to="/web"
              >
                Web Development
              </Link>
              <Link
                className="nav-items fs-5 px-5  py-2 fw-bold text-dark"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="nav-items fs-5 px-5  py-2 fw-bold text-dark"
                to="/contact"
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
