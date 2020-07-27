import React from "react";


import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import RecipeReviewCard from "./Components/Card.js";

function App() {
  return (
    <div>
      
      <RecipeReviewCard></RecipeReviewCard>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
