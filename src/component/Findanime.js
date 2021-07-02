import React, { Component } from "react";
import { connect } from "react-redux";
import { Card ,Button } from "react-bootstrap";
import { addMovieToList, handleMovieSearch } from "../actions";

class Findanime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    const { result: movie, showSearchResults } = this.props.search;

    return (
      <div>
      <center>
        <Card className="anime-find-div" style={{ width: "18rem" }}>
        <Card.Title className="Title-card">FIND ANIME</Card.Title><br></br>
          <Card.Img variant="top" src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20210514-11995-1xrfz2r.svg.png" />
          <Card.Body>
            
            <Card.Text>
              <div className="search-container">
                <br></br>
                <center>
                <input className ="find-anime-box" onChange={this.handleChange} />
                </center>
                <br></br>
                <Button variant="outline-primary" id="search-btn" onClick={this.handleSearch}>
                  Search
                </Button>

                {showSearchResults && (
                  <div className="search-results">
                    <div className="search-result">
                      <img src={movie.image_url} alt="search-pic" />
                      <div className="movie-info">
                        <span>{movie.title}</span>
                        <Button variant="outline-primary" onClick={() => this.handleAddToMovies(movie)}>
                          Add to ANIME
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card.Text>
          </Card.Body>

          <Card.Body>
            
          </Card.Body>
        </Card></center>
      </div>
    );
  }
}
function mapStateToProps({ search }) {
  return {
    search, //shorthand
  };
}
export default connect(mapStateToProps)(Findanime);
