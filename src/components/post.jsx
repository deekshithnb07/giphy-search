import React, { Component } from "react";
import Modal from './modal.jsx';


class Post extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
      <form className="mb-3 form">
        <textarea
          name="message"
          placeholder="enter message"
          className="search form-control"
          autoComplete="off"
          autoFocus
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
            >Clear</button>
          </div>
          <div className="button">
            <button className="post form-control bttn" >
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
                    Close 
                    <i className="fas fa-times-circle"></i>
                    </button>
                    </div>
        </Modal>
      </main>
    );
  }
}

export default Post;