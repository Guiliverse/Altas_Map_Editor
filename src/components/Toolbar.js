import React, { useEffect, useState } from "react";

const Toolbar = (props) => {
  const { objects, addShape } = props;

  return (
    <div className="tool-bar">
      <div className="tool-bar-header"> Toolbar </div>
      <button className="tool-icon" onClick={() => addShape("cube")}>
        Cube
      </button>
      <button className="tool-icon" onClick={() => addShape("cylinder")}>
        Cylinder
      </button>
    </div>
  );
};

export default Toolbar;
