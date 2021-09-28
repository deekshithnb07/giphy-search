import React from "react";
import reactDom from "react-dom";
import {handleClose} from "./gif";


const TextList = (props) => {
  const items = props.gifs.map((itemData) => {
    return <Item url={itemData.images.original.url} key={itemData.images.fixed_height.url} />;
  });
  return <div className="text-container">{items}</div>;
};



const Item = (props) => {
  console.log(props.url);


  // this is gif click event
function handleGif(){
  console.log(props.url + " " +"is selected");
  // handleClose();
  // ReactDOM.render(
  // <img src={props.url} alt="gif" />,
  // document.getElementById('postData')
  // );
  }

  return (
    <div className="gif-item" onClick={handleGif}>
      <img src={props.url} alt="gif" />
    </div>
  );
};
export default TextList;
