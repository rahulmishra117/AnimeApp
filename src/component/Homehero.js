import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns, Card, blockquote } from "react-bootstrap";
function Homehero() {
  return (
    <div>
    <div><h1>ANIME HERO</h1></div>
    <br></br>
      <CardColumns>
        <Card className="animehero">
          <Card.Img className="animehero-img"
            variant="top"
            src="https://cdn.dribbble.com/users/56226/screenshots/14410557/media/a020bb494ab0a1add72e00317bd6b95e.jpg?compress=1&resize=1200x900"
          />
        </Card>
        <Card className="p-3">
          <Card.Img className="animehero-img"
            variant="top"
            src="https://cdn.dribbble.com/users/56226/screenshots/13763525/media/e64e67a9ff293f0f083091292805670b.jpg?compress=1&resize=1200x900"
          />
        </Card>
        <Card className="animehero" >
          <Card.Img className="animehero-img"
            variant="top"
            src="https://cdn.dribbble.com/users/642793/screenshots/8811037/media/4aa0f2c95adadfd856c0c0397689d65b.jpg?compress=1&resize=1200x900"
          />
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <center><p>ANIME HERO</p></center>
          </blockquote>
        </Card>
        <Card className="animehero" >
          <Card.Img className="animehero-img"
            variant="top"
            src="https://cdn.dribbble.com/users/56226/screenshots/6507159/todo_4x.jpg?compress=1&resize=1200x900"
          />
        </Card>
        <Card className="text-center"></Card>
        <Card>
          <Card.Img className="animehero-img" src="https://cdn.dribbble.com/users/5670394/screenshots/14399010/media/412d80de5158e90039a36beeb9d0d19f.png?compress=1&resize=1200x900" />
        </Card>
        <Card className="text-right"></Card>
        <Card>
          <Card.Img className="animehero-img" src="https://cdn.dribbble.com/users/56226/screenshots/10189556/media/634ba103af649f855b134616de60e0aa.jpg?compress=1&resize=1200x900" />
        </Card>
      </CardColumns>
    </div>
  );
}
export default Homehero;
