import React from "react";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Navbar from "./Layout/Navbar/Navbar";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Api from "./Components/Api";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Api></Api>
      {/* <div style={{ margin: "0 auto" }}>
      </div> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Restaurants}></Route>
          <Route exact path="/res" component={RestaurantDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
