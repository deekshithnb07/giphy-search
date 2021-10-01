import React, { Component } from "react";
import Gif from "./gif";
import ReactDOM from "react-dom";
import reactDom from "react-dom";
import {addGif, posts} from "./compMini"
import {imgUrl} from "./TextList"
import PostList from "./postsDiv"



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

  // onChange text event
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

  // onclear data event
  clearPostData = () => {
    console.log("post data is cleared");
    this.setState = {
      postData: " ",
      imgData: ""
    };
    console.log(" cleared state" + this.postData, this.imgData);
  };

  // handling submit post and push the data 
  handleSubmit = (e) => {
    e.preventDefault();
    // setting state to null
    this.setState = {
      postData: null,
      imgData: []
    };

    // assigning postData to data
    let data = this.postData;
    let imgSrc = imgUrl[0];
    // assigning object of submited data to post
    let post = {
      postData: data,
      imgData: imgSrc
    };

    // pushing post object to posts
    // posts.push(post);
    posts.splice(posts.length, 0 , post)

    console.log(posts);
    console.log(data);

    // setting state to current data
    this.setState = {
      postData: data,
      imgData: imgSrc
    };


    

    ReactDOM.render(
    <PostList 
      postData={posts.postData} 
      imgData={posts.imgData}
    />,
    document.getElementById("posts"));
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
                <button className="bttn" onClick={addGif}>
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
