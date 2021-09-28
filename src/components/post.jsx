import React, { Component, useState} from "react";
import Gif from "./gif";

let posts =[];
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  clearPostData = (events) =>{
    console.log("post data is cleared");
    this.setState ({data: ""})
  }

  handleSubmit = (events) =>{
    events.preventDefault()
    const data =  new FormData(events.target.values);

    const post =[
      {
        messagepost: data
      }
    ]

console.log(post);
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
          ref="message"
          placeholder="enter message"
          className="search form-control"
          autoComplete="off"
          autoFocus
        />
        <div id="gif-insert"></div>
        </div>
        <div className="control">
            
          <div className="button">
            <button
              type="reset"
              className="reset bttn"
              onClick={this.clearPostData}
            >clear</button>
          </div>
          <div className="button">
            <button 
            onClick={this.handleSubmit} 
            className="post bttn" >
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