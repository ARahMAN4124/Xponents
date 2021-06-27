import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ tum,src }) => {
  return (
    <ReactPlayer url={src} light={tum?.src} playing controls />
  );
};

export default VideoPlayer;
//videoLink