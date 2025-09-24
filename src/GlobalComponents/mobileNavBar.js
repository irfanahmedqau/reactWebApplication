import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function CollapsibleMobileNav(props) {

   const navigate = useNavigate();


  return (
    <>
      <header className="showmobile">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className="navbar navbar-light sticky-top showmobile"
        >
         <Container fluid>
          {/* Logo / Brand */}
          <Navbar.Brand className="d-flex align-items-center">
            <h1 className="headerText mb-0">WELLS FARGO</h1>
          </Navbar.Brand>
 {!props.screenLogin && (<>
          {/* Hamburger toggle for mobile */}
          <Navbar.Toggle aria-controls="main-navbar-nav" />

          {/* Menu Items */}
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className=" d-flex nav-buttons">
  {[
    "Account",
    "Phone",
    "Specialty Processing",
    "Sys Admin",
    "User",
    "Tools",
    "Help",
  ].map((label) => (
    <Button key={label} className="nav-btn mx-2" onClick={() => navigate("/comingsoon")}>
      {label}
    </Button>
  ))}
</Nav>

          </Navbar.Collapse></>)}
        </Container>
        </Navbar>
      </header>
    </>
  );
}

export default CollapsibleMobileNav;
