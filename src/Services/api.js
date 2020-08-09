// import axios from "axios";
// import React, { useEffect } from "react";
// import { api } from "../api";

// function Api() {
//   // let query = "categories";
//   useEffect(() => {
//     axios
//       .get(api + "location_details?entity_id=172835&entity_type=subzone", {
//         headers: {
//           Accept: "application/json",
//           "user-key": "dae550f2de39692413804f96c793bc96",
//         },
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   });
//   return <div>{/* <h1>THis is an api call</h1> */}</div>;
// }

// export default Api;
export const api =
  "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/";
