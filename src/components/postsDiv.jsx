import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import reactDom from "react-dom";
import {posts} from "./compMini";

export const date_time = []

// date and time
function Datedata(e) {
    e.preventDefault();
    date_time.shift();
    let date = new Date();
    console.log(date.toLocaleDateString());
    let time = new Date();
    console.log(time.toLocaleTimeString());
    const dateTime = {
        date: date.toLocaleDateString(),
        time: time.toLocaleTimeString()
    }
    console.log(dateTime.date + " " + dateTime.time + " date and time")

    date_time.push(dateTime)
    console.log(date_time[0].date + " " + date_time[0].time + " pushed date")
}

// conditionaly rendering of posts
function Textdata(props){
    if(props.postData === undefined){
        return(
            null
        );
    }
    return(
        <textarea readOnly id="Data" disabled >{props.postData}</textarea>
    )
}

// mapping worked
const PostList = () => {
    const items = posts.map((data, i) => {
      return (
        <div id="post" className="post" key={i}>
          <p id="pNum">post {++i}</p>
          <div id="dateTime">
              <label>posted on</label>
              <p>{data.dateTime.date}</p>
              <p>{data.dateTime.time}</p>
          </div>
          <div id="onlyText">
              <caption className="caption-top">Title</caption>
              <Textdata postData={data.title} className="form-control" />
              <caption className="caption-top">Message</caption>
              <Textdata postData={data.postData} />
          </div>
          <div className="text-container">
          <img src={data.imgData} />
          </div>
        </div>
      );
    });
    return <div className="postData">{items.reverse()}</div>;
  };
  
  export default PostList
  export {Datedata}