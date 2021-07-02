import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {Nav,Navbar,Form,FormControl,Button}from 'react-bootstrap';
function Topview() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand ><Link to="/"><p className="top-nav">Anime</p></Link></Navbar.Brand>
        <Button className="butt" variant="light">
        <Link to="/AnimeHero">AnimeHero</Link></Button>
        <Button className="butt"  variant="light">
        <Link to="/Findanime">
        FindAnime</Link></Button>
        <Nav className="mr-auto">
          
        </Nav>
        
      </Navbar>
    </div>
  );
}
export default Topview;
