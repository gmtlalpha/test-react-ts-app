import React from "react";
import {
  BrowserRouter as Router,  Switch,  Route,  Link
} from "react-router-dom";

export default function Basic() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <AAA />
          </Route>
          <Route path="/BBB">
            <BBB />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// all of which are rendered
// dynamically in the browser (not server rendered).
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
function AAA() {
  return (<div><h2>AAA</h2></div>);
}
function BBB() {
  return (<div><h2>BBB</h2></div>);
}
