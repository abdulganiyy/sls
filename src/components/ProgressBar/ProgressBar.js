import React from "react";

import "./ProgressBar.css";

const ProgressBar = ({ width, name }) => {
  return (
    <div className="progressbar-container">
      <h5>{name}</h5>
      <div className="progressbar">
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            position: "absolute",
            backgroundColor: "rgb(93, 193, 233)",
          }}
        >
          <div className="tool-tip">{width}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
