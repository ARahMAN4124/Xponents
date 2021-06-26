import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ detail }) => {
  console.log(detail);
  const { videoLink, tum } = detail;
  return (
    <ReactPlayer url={videoLink} light={tum?.src} playing controls />
  );
};

export default VideoPlayer;
