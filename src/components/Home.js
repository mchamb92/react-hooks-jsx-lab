import React from "react";
import ReactDOM from "react-dom"
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const element = <div id = "home">`${name} is a Web Developer from ${city}`</div>;
  ReactDOM.render(element,  <Home />)




}

export default Home;
