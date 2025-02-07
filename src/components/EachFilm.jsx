import { Component } from "react";

class EachFilm extends Component {
  render() {
    return (
      <div style={{ margin: "0 20px" }} id="contenitoreFilm">
        <img src={this.props.film.Poster} alt="Film Poster" className=" w-100" id="immagineFilm" />
        <small className="text-secondary">{this.props.film.Year}</small>
        <p className="text-light h5 custom-text">{this.props.film.Title}</p>
      </div>
    );
  }
}

export default EachFilm;
