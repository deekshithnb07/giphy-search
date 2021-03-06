import TextList from "./TextList";
import React, {ReactDOM, useEffect} from "react";
import Error from "./Error";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState, Component } from "react";
import { findDOMNode } from "react-dom";

const giphy = new GiphyFetch("zIn1s1kSNuU9WMhWYJSObdkx1Zvh4zUp");
let imgUrl = [];

function loadDataOnlyOnce(){
  const a = () =>{
    <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
  }
}

function Gif() {

  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);  

  useEffect(()=>{
    console.log("here is gif search results");
    loadDataOnlyOnce()
  },[results])

  const handleInput = (e) => {
    e.preventDefault()
    setText(e.target.value);
  };

  const handleClose = (ev) =>{
    ev.preventDefault()
    setResults([]);
    console.log("gif search has no data");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length === 0) {
      //set error state to true
      setErr(true);
      return;
    }
    console.log(text);

    const apiCall = async () => {
      const res = await giphy.search(text, { limit: 20 });
      console.log(text, res);
      setResults(res.data);
    };

    apiCall();
    //change error state back to false
    setText("");
    setErr(false);
  };

  // display if any error
  const Add = (props) => {
    if (!props.isError) {
      return null;
    }
  
    return <p className="error">{props.text}</p>;
  };
  
  return (
    
    <div className="Gif gifForm" id="myForm">
      <input 
      className="input-field" 
      value={text} 
      onChange={handleInput} 
      placeholder="search GIF here"
      autoFocus
      />
      <button className="submit-btn get-gif" onClick={handleSubmit} id="submit">
      Search GIF
    <i className="fas fa-search" />
      </button>
      <button className="submit-btn get-gif" onClick={handleClose} id="close">
      close
    <i className="fas fa-times-circle" />
      </button>
      
      <Error isError={err} text="Please search for valid gif" />
      {results && 
      <div>
      {/* <p style={{color: "white"}} >Double click on Gif to select</p> */}
      <TextList gifs={results} />
      </div>
      }
    </div>
  );
}


export default Gif;
