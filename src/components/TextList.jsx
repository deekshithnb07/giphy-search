import React, { useState }from "react";
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import {imgUrl} from "./compMini";
import Gif from "./gif";


const TextList = (props) => {
  const items = props.gifs.map((itemData) => {
    return (
      <Item
        url={itemData.images.original.url}
        key={itemData.images.fixed_height.url}
      />
    );
  });
  return <div className="text-container">{items}</div>;
};

// close gif selected
function gifClose(ev) {
  ev.preventDefault();
  console.log("selected gif closed");
  imgUrl.shift();
  console.log(imgUrl);
}
  


function Item(props){
 const [gifimg, setGif] = useState(false);

  console.log(props.url);

// this is gif click event
function handleGif(e){
  e.preventDefault();
  setGif(true)
  console.log(props.url + "  is selected");

  console.log("before shift or pop " + imgUrl)
  imgUrl.shift()
  console.log("after shift or pop " + imgUrl)

  console.log("before push " + imgUrl)
  imgUrl.push(props.url);
  console.log("after push " + imgUrl)
  

}

  return (
    <div className="gif-item" onClick={handleGif}>
      <img src={props.url} alt="gif" />
    </div>
  );

};

function Imggif(props){
  return(
    <div id="GIF" className="text-container">
      <img
        src={props.url}
        alt="gif"
        name="postGif"
        width="300px"
        height="auto"
      />
      <i
        className="far fa-window-close d-flex justify-content-end"
        onClick={props.close}
      />
    </div>
  )
};

export { TextList as default };
export {imgUrl, Imggif, Item, gifClose}

  