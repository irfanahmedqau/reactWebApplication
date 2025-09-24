import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Home, Phone, Settings, User, Tool, HelpCircle } from "react-feather";

function CustomNavBar(props) {
  const navigate = useNavigate();

  return (
    <>
      {/* Full Sticky Header (everything inside stays fixed on scroll) */}
      <div className="sticky-top">
        {/* Top Header Bar */}
        <header className="hidemobile">
          <Navbar variant="light" className="navbar navbar-light bg-secondary sticky-top">
            <Container fluid>
              <Navbar.Brand className="d-flex align-items-center">
                <h1 className="headerText mb-0 text-white">WELLS FARGO</h1>
              </Navbar.Brand>

              {/* Right-aligned Login Circle */}
              {!props.screenLogin && (
                <div className="ms-auto">
                  <Button
                    variant="light"
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <User size={28} color="#000000" />
                  </Button>
                </div>
              )}
            </Container>
          </Navbar>
        </header>

        {/* Second Nav Bar */}
        {!props.screenLogin && (
          <>
            <Navbar bg="light" className="border-bottom">
              <Container
                fluid
                className="d-flex justify-content-between align-items-center"
              >
                {/* Left side - Menu buttons */}
                <Nav className="me-auto">
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/account")}
                  >
                    Accounts
                  </Button>
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/comingsoon")}
                  >
                    Phone
                  </Button>
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/comingsoon")}
                  >
                    Speciality Processing
                  </Button>
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/comingsoon")}
                  >
                    Sys Admin
                  </Button>
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/comingsoon")}
                  >
                    User
                  </Button>
                  <Button
                    variant=""
                    className="me-2"
                    onClick={() => navigate("/comingsoon")}
                  >
                    Tools
                  </Button>
                  <Button
                    variant=""
                    onClick={() => navigate("/comingsoon")}
                  >
                    Help
                  </Button>
                </Nav>

                {/* Right side - Search box */}
                <Form className="d-flex" style={{ width: "300px" }}>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Container>
            </Navbar>

            {/* Icon bar under nav */}
            <div className="bg-light border-top border-bottom icon-navbar">
              <Container fluid className="d-flex justify-content-start">
                <Button variant="light" className="icon-navbar-btn">
                  <Home size={22} color="#d71e28" />
                </Button>
                <Button variant="light" className="icon-navbar-btn">
                  <Phone size={22} color="#28a745" />
                </Button>
                <Button variant="light" className="icon-navbar-btn">
                  <Settings size={22} color="#007bff" />
                </Button>
                <Button variant="light" className="icon-navbar-btn">
                  <User size={22} color="#6f42c1" />
                </Button>
                <Button variant="light" className="icon-navbar-btn">
                  <Tool size={22} color="#fd7e14" />
                </Button>
                <Button variant="light" className="icon-navbar-btn">
                  <HelpCircle size={22} color="#20c997" />
                </Button>
              </Container>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CustomNavBar;
