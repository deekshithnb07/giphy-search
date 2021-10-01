import React from "react";
import { ReactDOM } from "react";
import reactDom from "react-dom";
import {posts} from "./compMini"


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
          <div id="onlyText">
              <Textdata postData={data.postData} />
          {/* <textarea readOnly id="Data" disabled >{data.postData}</textarea> */}
          </div>
          <img src={data.imgData} />
        </div>
      );
    });
    return <div className="postData">{items}</div>;
  };
  
  export default PostList