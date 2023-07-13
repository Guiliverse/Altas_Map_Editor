import React from "react";
import AddShapeIcon from "../assets/models.png";
import CubeIcon from "../assets/cube.png";
import CylinderIcon from "../assets/cylinder.png";
import SphereIcon from "../assets/sphere.png";
import ConeIcon from "../assets/cone.png";
const Toolbar = (props) => {
  const { addShape } = props;

  return (
    <div className="toolbar">
      <div className="toolbar-header"> Add </div>
      <div className="toolbar-menu">
        <img src={AddShapeIcon} className="toolbar-icon" />
        <div className="toolbar-submenu">
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cylinder")}>
            <img src={CylinderIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("sphere")}>
            <img src={SphereIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cone")}>
            <img src={ConeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
          <button className="toolbar-item" onClick={() => addShape("cube")}>
            <img src={CubeIcon} className="toolbar-item-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
