import React from "react";
import reactDom from "react-dom"
import Gif from "./gif";
import { useState } from "react";
import ReactDOM from "react-dom";
import PostList from "./postsDiv";

const addGif = (e) => {
    e.preventDefault();
    reactDom.render(<Gif />, document.getElementById("gifSearch"));
  };

  function Allpost(){
    if (posts.post === undefined){
    return(
          <textarea id="Data" disabled readOnly >No Post found</textarea>
    )}
    else{
    return(
          null
      )
    }
  }
  


  const posts = [];
  let imgUrl = [];

export {addGif, posts, imgUrl, Allpost}