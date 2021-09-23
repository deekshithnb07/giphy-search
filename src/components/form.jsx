import React, { Component } from "react";
// import Getgif from "./gif";
export default  class Head extends Component {
    render(){
        const clearAll = events => {
            events.preventDefault()
            console.log("cleared")
        }
        const clickHandle = event => {
            event.preventDefault()
            console.log("clicked")
            return(
                <div className="gifForm">
                    <input
                    type="search"
                    placeholder="serach for GIF"
                    name="gifName"
                    autoComplete="off"
                    />
                    <button type="submit" className="form">
                    get gif
                    </button>
                    </div>
                )
            };


  return (
    <div className="App">
      <form className="mb-3 form">
        <textarea
          name="message"
          placeholder="enter message"
          className="search form-control"
          autoComplete="off"
        />
        <div className="control">
          <div className="button">
            <button
              onClick={clickHandle}
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
              onClick={clearAll}
            >Clear</button>
          </div>
          <div className="button">
            <button className="post form-control bttn" onClick={clickHandle}>
              post
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
}
