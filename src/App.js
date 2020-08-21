import React from "react";
import { store, persistor } from "./Redux/store";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Restaurants from "./Pages/Restaurants/Restaurants";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import { Provider } from "react-redux";
import LandingPage from "./Pages/landingPage/LandingPage";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import firebaseConfig from "./FirebaseConfig/config";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Signup/Signup";
import Checkout from "./Components/Checkout/Checkout";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute";
import Cart from "./Pages/Cart/Cart";
import { PersistGate } from "redux-persist/integration/react";

firebase.initializeApp(firebaseConfig);

function App() {
  console.log();
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/" component={LandingPage}></Route>
              <Route exact path="/restaurants" component={Restaurants}></Route>4
              <Route exact path="/cart" component={Cart}></Route>
              <Route
                exact
                path="/restaurants/restaurant/:resId"
                component={RestaurantDetails}
              ></Route>
              <ProtectedRoute
                path="/checkout"
                component={Checkout}
              ></ProtectedRoute>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
