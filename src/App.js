import React from "react";
import { store } from "./Redux/store";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Navbar from "./Layout/Navbar/Navbar";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
// import Api from "./Components/Api";
import { Provider } from "react-redux";
import LandingPage from "./Pages/landingPage/LandingPage";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar></Navbar>
        {/* <Api></Api> */}
        {/* <div style={{ margin: "0 auto" }}>
      </div> */}
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/restaurants" component={Restaurants}></Route>
            <Route exact path="/res" component={RestaurantDetails}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
