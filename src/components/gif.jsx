import React from "react";
export default Getgif;
function Getgif() {
  const apikey = "zIn1s1kSNuU9WMhWYJSObdkx1Zvh4zUp";
  return (
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
  );
}
