import React, { useEffect, useState } from "react";

import MoveIcon from "../assets/toolbar-icon/move.png";
import RotationIcon from "../assets/toolbar-icon/rotate.png";

const Controller = (props) => {
  const { setControlStatus, controlStatus } = props;
  return (
    <div className="basic-controls">
      <div className="basic-button-group">
        <button
          className={`basic-button ${
            controlStatus.mode === "translate" ? "selected" : ""
          }`}
          onClick={() => {
            setControlStatus({ ...controlStatus, mode: "translate" });
          }}
        >
          <img src={MoveIcon} className="controller-icon" />
        </button>
        <button
          className={`basic-button ${
            controlStatus.mode === "rotate" ? "selected" : ""
          }`}
          onClick={() => {
            setControlStatus({ ...controlStatus, mode: "rotate" });
          }}
        >
          <img src={RotationIcon} className="controller-icon" />
        </button>
      </div>
    </div>
  );
};

export default Controller;
