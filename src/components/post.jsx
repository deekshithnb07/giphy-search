import React, { Component } from "react";
import Gif from "./gif";
import {Imggif, gifClose} from "./TextList"
import {addGif, posts, imgUrl, Allpost} from "./compMini"
import PostList, { Datedata, date_time } from "./postsDiv";


class Post extends Component {

  constructor(props) {  
    super(props);
    this.state = {
      postData: '',
      imgData: imgUrl[0],
      showGifComponent: false,
      title: ""
    }
    this.handleInputdata = this.handleInputdata.bind(this);
    this.clearPostData = this.clearPostData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.popup_gif = this.popup_gif.bind(this);
    this.handleInputTitle = this.handleInputTitle.bind(this);
  }

  // onChange title event
  handleInputTitle(e){
    this.setState({
      title: e.target.value
    });
    console.log(this.state.title);
  }

  // onChange text event
  handleInputdata(ev){ 
    this.setState ({
      postData: ev.target.value,
    });
    console.log(this.state.postData);
  };

  // add gif search bar
  popup_gif(e){
    e.preventDefault();
    this.setState({
      showGifComponent: !this.state.showGifComponent,
        }
      );
   }

  // onclear data event
  clearPostData(e){
    e.preventDefault()
    console.log("post data is cleared");
    imgUrl.shift()
    this.setState ({
      postData: '',
      imgData: imgUrl[0],
      title: ""
    });

    // setTimeout(function(){ alert("post data cleared"); }, 1000);
    console.log(" cleared post data state " + this.state.title + this.state.postData, this.state.imgData);
    document.getElementById('postData').focus()
  };

  // handling submit post and push the data 
  handleSubmit(e){
    e.preventDefault();
    
    // calling date and time
    Datedata(e);

    // assigning
    let data = this.state.postData;
    let imgSrc = imgUrl[0];
    let dateTime = date_time[0];
    let titleName = this.state.title;

    // assigning object of submited data to post
    let post = {
      postData: data,
      imgData: imgSrc,
      dateTime: dateTime,
      title: titleName
    };

    // pushing post object to posts array
    posts.splice(posts.length, 0 , post);

    console.log(posts);
    console.log(data);
    // this.clearPostData(e);  

    this.setState ({
      postData: '',
      imgData: '',
      showGifComponent: false,
      title: ""
    });
    imgUrl.shift();

  };

  render() {
    return (
      <main id="main">
        <div className="App form">
          <form className="mb-3">
            <div >
              <input 
              type="text"
              className="form-control"
              placeholder="enter title here"
              value={this.state.title}
              onChange={this.handleInputTitle}
              autoComplete="off"
              autoFocus
              />
              <textarea
                id="postData"
                name="message"
                ref="message"
                placeholder="enter message"
                className="search form-control"
                autoComplete="off"
                value={this.state.postData}
                onChange={this.handleInputdata}
              />
              <div id="gif-insert">
                 {imgUrl.length ? <Imggif url={imgUrl[0]} close={gifClose} /> : null} 
              </div>
            </div>
            <div className="control">
              <div className="button">
                <button className="bttn" onClick={this.popup_gif}>
                  {this.state.showGifComponent ? "close" : "add"} Gif
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
            {posts.length===0 ? <Allpost /> : <PostList />}
          </div>
        </div>
      </main>
    );
  }
}

export default Post;
