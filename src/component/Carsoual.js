import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import './style.css'
function Carsoual() {
    return (
        <div>
        <Carousel>
        <Carousel.Item  interval={1000}>
          <img
          className="car-img"
            src="https://cdn.dribbble.com/users/583186/screenshots/12575207/media/3b380399c286bdee1731c13a609231e3.gif"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
          className="car-img"
            src="https://cdn.dribbble.com/users/56226/screenshots/6727735/street_sharks_page1colorv2.jpg?compress=1&resize=800x600"
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="car-img"
            src="https://cdn.dribbble.com/users/56226/screenshots/10057499/media/66c4abd602a64846dea89e5c0ea4ef1e.jpg?compress=1&resize=1200x900"
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
        </div>
    )
}
export default Carsoual;