import { Navbar, Container, Nav, NavDropdown, Row } from "react-bootstrap";

const ProfilePageNavBar = function (props) {
  function handlePage(page) {
    props.callbackDetailPage(page);
  }
  return (
    <header className="container-fluid">
      <Row>
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand onClick={() => handlePage("main")} id="cursorePointer">
              <img src="/src/assets/img/netflix_logo.png" alt="logo netflix_logo" width="100px" height="50px" />
            </Navbar.Brand>

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
                      <NavDropdown.Item onClick={() => handlePage("main")}>Home</NavDropdown.Item>
                      <NavDropdown.Item onClick={() => handlePage("settings")}>Settings</NavDropdown.Item>

                      <NavDropdown.Item>Help Center</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Log out</NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Item>
                </Container>
              </Nav.Item>
            </div>
          </Container>
        </Navbar>
      </Row>
    </header>
  );
};
export default ProfilePageNavBar;
