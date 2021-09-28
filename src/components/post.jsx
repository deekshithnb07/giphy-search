import React, { Component, useState} from "react";
import Gif from "./gif";

let posts =[];
class Post extends Component {

  clearPostData = (events) =>{
    console.log("post data is cleared");
  }

  handleSubmit = (events) =>{
    events.preventDefault()
    const data = Object.fromEntries(new FormData(events.target).entries());
    posts.push(data)
    console.log(posts.values(data));
    console.log(data);
  }

  render() {
    return (
      <main>
        <div className="App form">
      <form className="mb-3" >
        <div id="postData">
        <textarea
        id="postData"
          name="message"
          placeholder="enter message"
          className="search form-control"
          autoComplete="off"
          autoFocus
          required
        />
        <div id="gif-insert"></div>
        </div>
        <div className="control">
            
          <div className="button">
            <button
              type="reset"
              className="reset form-control bttn"
              onClick={this.clearPostData}
            >clear</button>
          </div>
          <div className="button">
            <button onClick={this.handleSubmit} className="post form-control bttn" >
              post
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        </form>


        <div id="gifSearch">
        <Gif />
        </div>     
        
    </div>
    </main>
    );
  }
}

export default Post;