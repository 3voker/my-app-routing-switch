import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Welcome from "./components/welcome/Welcome";
import Something from "./components/something/Something";
//Import the Navigation component
import Navigation from "./components/navigation/Navigation";
import NotFound from "./components/notfound/NotFound";

//Import the Route component
import {
  BrowserRouter as Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name=""/>}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/clock" component={Clock} />
        <Route path="/welcome/:name" />
        <Route path="/something" />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
