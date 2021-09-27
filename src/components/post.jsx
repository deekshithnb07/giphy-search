import React, { Component, useState } from "react";
import Modal from './modal.jsx';

let posts = [];

class Post extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

 

  handleSubmit = (events) =>{
    events.preventDefault()

    const data = Object.fromEntries(new FormData(events.target).entries());
    posts.push(data)
    console.log(posts.values(data))
    console.log(data);
  }

  showModal = (event) => {
    event.preventDefault()
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <div className="App">
      <form className="mb-3 form" onSubmit={this.handleSubmit}>
        <textarea
          name="message"
          placeholder="enter message"
          className="search form-control"
          autoComplete="off"
          autoFocus
          required
        />
        <div className="control">
          <div className="button">
            <button
              onClick={this.showModal}
              name="gif"
              className="gif form-control bttn"
            >
              add GIF
            </button>
          </div>
          <div className="button">
            <button
              type="reset"
              value="clear"
              className="reset form-control bttn"
            >clear</button>
          </div>
          <div className="button">
            <button type="submit" className="post form-control bttn" >
              post
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    </div>


        <Modal show={this.state.show} handleClose={this.hideModal}>
        <div className="gifForm form-popup" id="myForm">
                    <input
                    type="search"
                    id="gifs"
                    placeholder="serach for GIF"
                    name="gifName"
                    autoComplete="off"
                    className="get-gif"
                    autoFocus
                    />
                    <button type="submit" id="submit"className="get-gif">
                    Search GIF
                    <i className="fas fa-search"></i>
                    </button>
                    <button type="button" onClick={this.hideModal} className="close-btn get-gif">
                    close 
                    <i className="fas fa-times-circle"></i>
                    </button>
                    </div>
        </Modal>
      </main>
    );
  }
}

export default Post;