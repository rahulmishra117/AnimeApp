import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { addFavourites, removeFromFavourites } from "../actions";
import {Card,CardDeck} from 'react-bootstrap';
class Animecard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourites(movie));
  };
  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;

    return (
      // Testing in Boot strap card
      <div>
      <div className="parent-div-value">
      <center>
        <CardDeck className="parent-div" >
          <Card className="Card-anime-d">
             <Card.Title className="movie-anime">{movie.title}</Card.Title>

           
            <Card.Body className="card-body">
            
            <Card.Img className="card-img-val" variant="top" src={movie.image_url} />
            <div className="card-body-child">
            <Card.Text className="movie-anime1" >{movie.type}</Card.Text>
              <Card.Text className="rating">{movie.score}</Card.Text>
              <Card.Text className="ratin">{movie.synopsis}</Card.Text>
              <small className="text-muted">
                
                {isFavourite ? (
                  <Button
                  variant="outline-primary"
                    onClick={this.handleUnFavouriteClick}
                  >
                    UnFavourite
                  </Button>
                ) : (
                  <Button
                    className="favourite-btn"
                    onClick={this.handleFavouriteClick}
                  >
                    Favourite
                  </Button>
                )}
              </small>
              </div>
            </Card.Body>
          </Card>
        </CardDeck></center>
        </div>
        </div>
    );
  }
}
export default Animecard;
