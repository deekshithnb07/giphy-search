import React from "react";
import reactDom from "react-dom"
import Gif from "./gif";

const addGif = (e) => {
    e.preventDefault();
    reactDom.render(<Gif />, document.getElementById("gifSearch"));
  };

  const posts = [];

export {addGif, posts}