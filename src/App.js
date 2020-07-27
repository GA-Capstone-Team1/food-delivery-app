import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Api from "./Components/Api";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Api></Api>
      <SearchBar/>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
