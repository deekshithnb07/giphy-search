import React, { Component } from "react";
import Gif from "../gif";
import ReactDOM from "react-dom";
import reactDom from "react-dom";

let posts = [];

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      postData: "",
      imgData: "",
      posts: []
    };
  }

  handleInputdata = (ev) => {
    this.setState = {
      postData: ev.target.value
    };
    const data = (this.postData = ev.target.value);
    console.log(this.postData);
    this.setState = {
      postData: data
    };
  };

  addGif = (e) => {
    e.preventDefault();
    reactDom.render(<Gif />, document.getElementById("gifSearch"));
  };

  clearPostData = () => {
    console.log("post data is cleared");
    this.setState = {
      postData: " ",
      imgData: ""
    };
    console.log(this.postData);
  };

  // handling submit
  handleSubmit = (e) => {
    e.preventDefault();
    let data = this.postData;
    let post = {
      postData: data,
     
    };
    posts.push(post);
    // posts.splice(posts.length, 0, ...post)
    console.log(posts);
    console.log(data);
    this.setState = {
      postData: data,
      imgData: ""
    };

  };

  render() {
    return (
      <main id="main">
        <div className="App form">
          <form className="mb-3">
            <div id="postData">
              <textarea
                id="postData"
                name="message"
                ref="message"
                placeholder="enter message"
                className="search form-control"
                autoComplete="off"
                autoFocus
                onChange={this.handleInputdata}
                value={this.postData}
              />
              <div id="gif-insert"></div>
            </div>
            <div className="control">
              <div className="button">
                <button className="bttn" onClick={this.addGif}>
                  add Gif
                </button>
              </div>
              <div className="button">
                <button className="bttn" onClick={this.clearPostData}>
                  clear
                </button>
              </div>
              <div className="button">
                <button onClick={this.handleSubmit} className="post bttn">
                  post
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div id="gifSearch"></div>
          </form>
        </div>

        <div id="poster" className="d-flex justify-content-center">
          <div id="posts"></div>
        </div>
      </main>
    );
  }
}

export default Post;
