import React, { useState } from "react";
import styles from "./DetectLocation.module.scss";
import Axios from "axios";

function DetectLocation() {
  const [data, setData] = useState();
  const searchLocation = () => {
    if (navigator.geolocation) {
      console.log("called Searchlocation");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log("called : " + lat, lon);

    // fetchApi(lat, lon);
  }
  const getLocation = (e) => {
    e.preventDefault();
    searchLocation();
    let proxy = "https://cors-anywhere.herokuapp.com/";
  };

  // const fetchApi = (lat, lon) => {
  //   console.log();

  //   Axios.get(
  //     `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e85f12ec97bc367ae2d3cec2c693d22e`
  //   )
  //     .then(({ data }) => {
  //       console.log(data.name);

  //       setData(data.name);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      <input type="text" value={data}></input>
      <button onClick={(e) => getLocation(e)}>Detect</button>
    </div>
  );
}

export default DetectLocation;
