import TextList from "./TextList";
import Error from "./Error";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";

const giphy = new GiphyFetch("zIn1s1kSNuU9WMhWYJSObdkx1Zvh4zUp");

function Gif() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState(false);

  const handleInput = (e) => {
    setText(e.target.value);
  };


  const handleClose = (ev) =>{
    setResults([]);
    console.log("gif search closed");
  }

  const handleSubmit = (e) => {
    if (text.length === 0) {
      //set error state to true
      setErr(true);
      return;
    }
    console.log(text);

    const apiCall = async () => {
      const res = await giphy.search(text, { limit: "20" });
      console.log(text, res);
      setResults(res.data);
    };

    apiCall();
    //change error state back to false
    setText("");
    setErr(false);
  };

  return (
    <div className="Gif gifForm" id="myForm">
      <input 
      className="input-field" 
      value={text} 
      onChange={handleInput} 
      placeholder="search GIF here"
      />
      <button className="submit-btn get-gif" onClick={handleSubmit} id="submit">
      Search GIF
    <i className="fas fa-search" />
      </button>
      <button className="submit-btn get-gif" onClick={handleClose} id="close">
      close
    <i className="fas fa-times-circle" />
      </button>
      <Error isError={err} text="need length longer than 0 for input" />
      {results && <TextList gifs={results} />}
    </div>
  );
}
export default Gif;
