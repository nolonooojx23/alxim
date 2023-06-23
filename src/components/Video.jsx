import React from "react";
import ReactPlayer from "react-player/youtube";
import "./Video.css";
function Videos({ video }) {
  return (
    <div className="video" style={{display: "none"}}>
      <ReactPlayer url={video} width="100%" height="100%" />
    </div>
  );
}

export default Videos;
