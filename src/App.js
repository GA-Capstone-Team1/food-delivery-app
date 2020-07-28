import React from "react";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FiltersSideBar from "./Components/FiltersSideBar/FIltersSideBar";
import Card from "./Components/Card";
import Api from "./Components/Api";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Api></Api>
      <SearchBar />
      <FiltersSideBar></FiltersSideBar>
      <Card></Card>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
