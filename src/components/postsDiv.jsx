import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import reactDom from "react-dom";
import {posts} from "./compMini";

export const date_time = []

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

// conditionaly rendering
function Textdata(props){
    if(props.postData == undefined){
        return(
            <span />
        );
    }
    return(
        <textarea readOnly id="Data" disabled >{props.postData}</textarea>
    )
}

// mapping worked
const PostList = (props) => {
    const items = posts.map((data, i) => {
      return (
        <div id="post" className="post" key={i}>
          <p>post {++i}</p>
          <div id="dateTime">
              <p>{data.dateTime.date}</p>
              <p>{data.dateTime.time}</p>
          </div>
          <div id="onlyText">
              <Textdata postData={data.postData} />
          </div>
          <img src={data.imgData} />
        </div>
      );
    });
    return <div className="postData">{items}</div>;
  };
  
  export default PostList
  export {Datedata}