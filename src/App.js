import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Api from "./Components/Api";
import FiltersSideBar from "./Components/FiltersSideBar/FIltersSideBar";

function App() {
  return (
    <div>
      <Api></Api>
      <FiltersSideBar></FiltersSideBar>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
