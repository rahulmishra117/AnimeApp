import React, { Component } from "react";
import { connect } from "react-redux";
import Animecard from "./Animecard";
import { data } from "../data";
import { addMovies, setShowFavourites } from "../actions";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

class Animehero extends Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index !== -1)
      //we have found the movie
      return true;
    else return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies } = this.props;
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div>
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${!showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              <Button className="bttn-res" variant="outline-success">Movies</Button>
            </div>

            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              <Button className="bttn-res" variant="outline-warning">Favourites</Button>
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <Animecard
                movie={movie}
                key={`movies${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Movies to show!</div>
          ) : null}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

export default connect(mapStateToProps)(Animehero);
