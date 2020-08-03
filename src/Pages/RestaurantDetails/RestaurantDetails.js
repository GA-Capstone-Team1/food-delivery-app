import React from "react";
import Cart from "../../Components/Cart/Cart";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchDish from "../../Components/SearchDish/SearchDish";

function RestaurantDetails() {
  return (
    <div>
      <Cart></Cart>
      <SearchDish></SearchDish>
    </div>
  );
}

export default RestaurantDetails;
