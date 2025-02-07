import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <header className="container-fluid">
      <Row>
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <img src="/src/assets/img/netflix_logo.png" alt="logo netflix_logo" width="100px" height="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="w-100 justify-content-between">
                <div className="d-lg-flex">
                  <Nav.Item>
                    <Nav.Link aria-current="page" active>
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>TV Shows</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Movies</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Recently Added</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>My List</Nav.Link>
                  </Nav.Item>
                </div>
                <div className="d-lg-flex">
                  <Nav.Item>
                    <Container fluid className=" d-flex flex-column flex-lg-row">
                      <Nav.Item>
                        <NavDropdown
                          title={<img src="/src/assets/img/avatar.png" alt="YourAvatar" width="30" height="30" />}
                          id="dropdownProfile"
                          menuVariant="dark"
                          drop={"start"}
                        >
                          <NavDropdown.Item>
                            <img
                              src="/src/assets/img/avatar.png"
                              alt="YourAvatar"
                              width="30"
                              height="30"
                              className="me-4"
                            />
                            Epicoder #1
                          </NavDropdown.Item>
                          <NavDropdown.Item>Manage profiles</NavDropdown.Item>
                          <NavDropdown.Item>Account</NavDropdown.Item>
                          <NavDropdown.Item>Help Center</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item>Signout Netflix</NavDropdown.Item>
                        </NavDropdown>
                      </Nav.Item>
                    </Container>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </header>
  );
};
export default MyNavbar;
