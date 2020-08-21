import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Welcome from "./components/welcome/Welcome";
//Import the Navigation component
//import Navigation from "./components/navigation/Navigation";

//Import the Route component
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/welcome/:name">Welcome</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
export default App;
