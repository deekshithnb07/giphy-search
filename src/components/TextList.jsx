import React from "react";
import ReactDOM from "react-dom";

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

const Item = (props) => {
  console.log(props.url);

  // this is gif click event
  function handleGif() {
    console.log(props.url + "  is selected");
    // handleClose();

    ReactDOM.render(
      <div id="GIF">
        <img
          src={props.url}
          alt="gif"
          name="postGif"
          width="80%"
          height="auto"
        />
        <i
          className="far fa-window-close d-flex justify-content-end"
          onClick={gifClose}
        />
      </div>,
      document.getElementById("gif-insert")
    );

    function gifClose(ev) {
      console.log("selected gif closed");
      // ReactDOM.unmountComponentAtNode(document.getElementById('GIF'));
      // document.getElementById('GIF').remove();
      window.location.reload(false);
    }
  }

  return (
    <div className="gif-item" onClick={handleGif}>
      <img src={props.url} alt="gif" />
    </div>
  );
};
export { TextList as default };
  