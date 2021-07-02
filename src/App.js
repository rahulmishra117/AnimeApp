import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import data from './data';
import "bootstrap/dist/css/bootstrap.min.css";
import Topview from "./component/Topview";
import Carsoual from "./component/Carsoual";
import Homehero from "./component/Homehero";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Animehero from "./component/Animehero";
import Findanime from "./component/Findanime";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Topview />

          <div>
          <Switch>
            <Route exact path="/Findanime" component={Findanime}></Route>
            <Route exact path="/Animehero" component={Animehero}></Route>
            <Route exact path="/" component={Main}></Route>
            </Switch>
          </div>
          <br></br>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
