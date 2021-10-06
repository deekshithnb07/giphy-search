import React, { Component } from "react";
import Gif from "./gif";
import ReactDOM from "react-dom";
import reactDom from "react-dom";
import {addGif, posts, imgUrl, Allpost} from "./compMini"
import PostList, { Datedata, date_time } from "./postsDiv";


class Post extends Component {

  constructor(props) {  
    super(props);
    this.state = {
      postData: "",
      imgUrl: "",
      showGifComponent: false,
      handle: "add"
    }
    this.handleInputdata = this.handleInputdata.bind(this);
    this.clearPostData = this.clearPostData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.popup_gif = this.popup_gif.bind(this);
  }


  // onChange text event
  handleInputdata(ev){ 
    this.setState ({
      postData: ev.target.value
    });
    this.postData = ev.target.value
    console.log(this.postData);
  };

  popup_gif(e){
    e.preventDefault();
    let a = this.state.handle
    let h
    function add(a){    
    if(a === false){
      return h = "add"
    }
    if(a === true){
      return h = "close"
    }
  }
    this.setState({
      showGifComponent: !this.state.showGifComponent,
      handle: h
        });
      }

  // onclear data event
  clearPostData(e){
    e.preventDefault()
    console.log("post data is cleared");
    
    imgUrl.shift()

    this.setState ({
      postData: "",
      imgData: ""
    });

    // setTimeout(function(){ alert("post data cleared"); }, 1000);
    console.log(" cleared state " + this.postData, this.imgData);
    document.getElementById('postData').focus()
  };

  // handling submit post and push the data 
  handleSubmit(e){
    e.preventDefault();
    
    // calling date and time
    Datedata(e);

    // assigning
    let data = this.postData;
    let imgSrc = imgUrl[0];
    let dateTime = date_time[0];

    // assigning object of submited data to post
    let post = {
      postData: data,
      imgData: imgSrc,
      dateTime: dateTime
    };

    // pushing post object to posts array
    posts.splice(posts.length, 0 , post);

    console.log(posts);
    console.log(data);

    //  PostList();
    ReactDOM.render(
      <PostList />,
    document.getElementById("posts"));

    this.setState ({
      postData: "",
      imgData: ""
    });

  };

  render() {
    return (
      <main id="main">
        <div className="App form">
          <form className="mb-3">
            <div >
              <textarea
                id="postData"
                name="message"
                ref="message"
                placeholder="enter message"
                className="search form-control"
                autoComplete="off"
                autoFocus
                value={this.state.postData}
                onChange={this.handleInputdata}
              />
              <div id="gif-insert">
                
              </div>
            </div>
            <div className="control">
              <div className="button">
                <button className="bttn" onClick={this.popup_gif}>
                  {this.state.handle} Gif
                </button>
              </div>
              <div className="button">
                <button className="bttn" type="reset" onClick={this.clearPostData}>
                  clear
                </button>
              </div>  
              <div className="button">
                <button onClick={this.handleSubmit} type="submit" value="Submit" className="post bttn">
                  post
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div id="gifSearch">
            {this.state.showGifComponent ? <Gif /> : null}
            </div>
          </form>
        </div>

        <div id="poster" className="d-flex justify-content-center">
          <div id="posts">
            <Allpost />
          </div>
        </div>
      </main>
    );
  }
}

export default Post;
