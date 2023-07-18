import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import DoorIcon from "../assets/toolbar-icon/door.png";
import WindowIcon from "../assets/toolbar-icon/window.png";
import WallIcon from "../assets/toolbar-icon/wall.png";
import FurnitureIcon from "../assets/toolbar-icon/furniture.png";
import RoofIcon from "../assets/toolbar-icon/roof.png";

const Walls = [
  { path: "models/Plain/Plain.glb", icon: "models/Plain/Plain.png" },
  {
    path: "models/Plain/PlainCorner.glb",
    icon: "models/Plain/PlainCorner.png",
  },
  {
    path: "models/Plain/PlainCornerHalfWall.glb",
    icon: "models/Plain/PlainCornerHalfWall.png",
  },
  {
    path: "models/Plain/PlainDoorframe.glb",
    icon: "models/Plain/PlainDoorframe.png",
  },
  {
    path: "models/Plain/PlainGarageFrame.glb",
    icon: "models/Plain/PlainGarageFrame.png",
  },
  {
    path: "models/Plain/PlainHalfWall.glb",
    icon: "models/Plain/PlainHalfWall.png",
  },
  {
    path: "models/Plain/PlainHalfWallSmall.glb",
    icon: "models/Plain/PlainHalfWallSmall.png",
  },
  { path: "models/Plain/PlainSmall.glb", icon: "models/Plain/PlainSmall.png" },
  {
    path: "models/Plain/PlainSmallWindowframe.glb",
    icon: "models/Plain/PlainSmallWindowframe.png",
  },
  {
    path: "models/Plain/PlainWindowframe.glb",
    icon: "models/Plain/PlainWindowframe.png",
  },
];

const Roof = [
  { path: "models/Roof/RoofFlat.glb", icon: "models/Roof/RoofFlat.png" },
  {
    path: "models/Roof/RoofFlatCorner.glb",
    icon: "models/Roof/RoofFlatCorner.png",
  },
  {
    path: "models/Roof/RoofFlatCornerInv.glb",
    icon: "models/Roof/RoofFlatCornerInv.png",
  },
  {
    path: "models/Roof/RoofFlatSmall.glb",
    icon: "models/Roof/RoofFlatSmall.png",
  },
  { path: "models/Roof/RoofMiddle.glb", icon: "models/Roof/RoofMiddle.png" },
  { path: "models/Roof/RoofShed.glb", icon: "models/Roof/RoofShed.png" },
  {
    path: "models/Roof/RoofShedCorner.glb",
    icon: "models/Roof/RoofShedCorner.png",
  },
  {
    path: "models/Roof/RoofShedSmallLeft.glb",
    icon: "models/Roof/RoofShedSmallLeft.png",
  },
  {
    path: "models/Roof/RoofShedSmallMiddle.glb",
    icon: "models/Roof/RoofShedSmallMiddle.png",
  },
  {
    path: "models/Roof/RoofShedSmallRight.glb",
    icon: "models/Roof/RoofShedSmallRight.png",
  },
  { path: "models/Roof/RoofSlope.glb", icon: "models/Roof/RoofSlope.png" },
  {
    path: "models/Roof/RoofSlopeCorner.glb",
    icon: "models/Roof/RoofSlopeCorner.png",
  },
  {
    path: "models/Roof/RoofSlopeSmall.glb",
    icon: "models/Roof/RoofSlopeSmall.png",
  },
];

export const assets = [
  {
    category: "Wall",
    icon: WallIcon,
    children: Walls,
  },
  {
    category: "Roof",
    icon: RoofIcon,
    children: Roof,
  },
];
const Toolbar = (props) => {
  const { addShape, controlStatus, setControlStatus } = props;

  return (
    <div className="toolbar">
      <div className="toolbar-header"> Add </div>
      <div className="toolbar-menu">
        {assets.map((item1, index1) => (
          <div className="toolbar-menu-item hover-effect" key={index1}>
            <img src={item1.icon} className="toolbar-icon" />
            <div className="toolbar-submenu1 submenu-bg">
              {item1.children.map((item2, index2) => {
                useLoader.preload(GLTFLoader, item2.path, (loader) => {
                  const draco = new DRACOLoader();
                  draco.setDecoderPath("gltf/");
                  draco.setDecoderConfig({ type: "js" });
                  loader.setDRACOLoader(draco);
                });
                return (
                  <img
                    key={index2}
                    src={item2.icon}
                    className="toolbar-icon  hover-effect"
                    onClick={() => {
                      addShape(item2.path);
                      setControlStatus({
                        ...controlStatus,
                        current: null,
                      });
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
