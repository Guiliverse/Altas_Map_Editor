import React, { useEffect, useState } from "react";

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
          Move
        </button>
        <button
          className={`basic-button ${
            controlStatus.mode === "rotate" ? "selected" : ""
          }`}
          onClick={() => {
            setControlStatus({ ...controlStatus, mode: "rotate" });
          }}
        >
          Rotate
        </button>
      </div>
    </div>
  );
};

export default Controller;
