import { Component } from "react";
import MyGallery from "./MyGallery";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import SearchCarousel from "./SearchCarousel";

class MyHome extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-between align-items-center">
          <Col>
            <div className="d-flex align-items-center">
              <h2 className="text-white pe-md-3 pe-1">TV Shows</h2>
              <Dropdown>
                <Dropdown.Toggle
                  className="btn btn-dark border-white rounded-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu className="rounded-0">
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-end align-items-center h-100">
              <div className="btn-group" role="group" aria-label="Basic example" data-bs-theme="dark">
                <Button
                  type="button"
                  className="btn btn-primary btn-darkgray border rounded-0 fs-5 btn-outline-light bg-dark"
                >
                  <i className="bi bi-list"></i>
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary btn-darkgray border rounded-0 fs-5 btn-outline-light bg-dark"
                >
                  <i className="bi bi-grid-fill"></i>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        {/* SERVE PER CREARE UN CAROSELLO DINAMICO IN BASE ALLA SCRITTURA DI UNA PAROLA CHIAVE  
          FUNZIONA SOLO SE SI PREME IL TASTO BOTTONE SEARCH*/}
        <SearchCarousel />
        {/* QUESTA SEZIONE AVRA' al suo interno le tre gallerie che riceveranno come props cosa cercare */}
        <h3 className=" text-light">Fast & Furious!</h3>
        <MyGallery research="Fast&Furious" />
        <h3 className=" text-light">Harry Potter!</h3>
        <MyGallery research="Harry Potter" />
        <h3 className=" text-light">Toy Story!</h3>
        <MyGallery research="Toy Story" />
      </Container>
    );
  }
}

export default MyHome;
