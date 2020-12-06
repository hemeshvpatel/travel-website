import React from "react";
import "../../App.css";
import video2 from "../../videos/video-2.mp4";

export default function Trailer() {
  return (
    <>
      <div className="hero-container">
        <video src={video2} autoPlay loop muted />
      </div>
      {/* <h1 className="trailer">Trailer</h1> */}
    </>
  );
}
