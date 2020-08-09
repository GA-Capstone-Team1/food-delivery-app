import React from "react";
import { store } from "./Redux/store";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import Restaurants from "./Pages/Restaurants/Restaurants";
import Navbar from "./Layout/Navbar/Navbar";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
// import Api from "./Components/Api";
import { Provider } from "react-redux";
import LandingPage from "./Pages/landingPage/LandingPage";
import firebase from "firebase/app";
import firebaseConfig from "./FirebaseConfig/config";
import Login from "./Pages/Login/Login";
import RestaurantDish from "./Components/RestaurantDish/RestaurantDish";

firebase.initializeApp(firebaseConfig);

function App() {
  console.log();
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/restaurants" component={Restaurants}></Route>
            <Route exact path="/res" component={RestaurantDetails}></Route>
            <Route exact path="/resdish" component={RestaurantDish}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
