import React from "react";
import DoorIcon from "../assets/toolbar-icon/door.png";
import WindowIcon from "../assets/toolbar-icon/window.png";
import WallIcon from "../assets/toolbar-icon/wall.png";
import FurnitureIcon from "../assets/toolbar-icon/furniture.png";
import RoofIcon from "../assets/toolbar-icon/roof.png";
const Doors = [
  { path: "models/door/Door00.glb", icon: DoorIcon },
  { path: "models/door/Door01.glb", icon: DoorIcon },
  { path: "models/door/Door02.glb", icon: DoorIcon },
  { path: "models/door/Door03.glb", icon: DoorIcon },
  { path: "models/door/Door04.glb", icon: DoorIcon },
  { path: "models/door/Door05.glb", icon: DoorIcon },
  { path: "models/door/Door06.glb", icon: DoorIcon },
  { path: "models/door/Door07.glb", icon: DoorIcon },
  { path: "models/door/Door08.glb", icon: DoorIcon },
  { path: "models/door/GarageDoor00.glb", icon: DoorIcon },
  { path: "models/door/GarageDoor01.glb", icon: DoorIcon },
];
const Roofs = [
  { path: "models/roof/RoofAcc_Lamps.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_LampsSmall.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_RadioTower.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_SkylightLarge.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_SkylightSmall.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_SkylightSmallV2.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_SolarPanel.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_Unit.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_UnitV2.glb", icon: RoofIcon },
  { path: "models/roof/RoofAcc_Vents.glb", icon: RoofIcon },
];

const BrickV1 = [
  { path: "models/BrickV1/BrickV1.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1Corner.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1CornerHalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1Doorframe.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1GarageFrame.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1HalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1HalfWallSmall.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1Small.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1SmallWindowframe.glb", icon: WindowIcon },
  { path: "models/BrickV1/BrickV1Windowframe.glb", icon: WindowIcon },
];

const BrickV2 = [
  { path: "models/BrickV2/BrickV2.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2Corner.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2CornerHalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2Doorframe.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2GarageFrame.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2HalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2HalfWallSmall.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2Small.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2SmallWindowframe.glb", icon: WindowIcon },
  { path: "models/BrickV2/BrickV2Windowframe.glb", icon: WindowIcon },
];

const BrickV3 = [
  { path: "models/BrickV3/BrickV3.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3Corner.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3CornerHalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3Doorframe.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3GarageFrame.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3HalfWall.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3HalfWallSmall.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3Small.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3SmallWindowframe.glb", icon: WindowIcon },
  { path: "models/BrickV3/BrickV3Windowframe.glb", icon: WindowIcon },
];

const Plain = [
  { path: "models/Plain/Plain.glb", icon: WindowIcon },
  { path: "models/Plain/PlainCorner.glb", icon: WindowIcon },
  { path: "models/Plain/PlainCornerHalfWall.glb", icon: WindowIcon },
  { path: "models/Plain/PlainDoorframe.glb", icon: WindowIcon },
  { path: "models/Plain/PlainGarageFrame.glb", icon: WindowIcon },
  { path: "models/Plain/PlainHalfWall.glb", icon: WindowIcon },
  { path: "models/Plain/PlainHalfWallSmall.glb", icon: WindowIcon },
  { path: "models/Plain/PlainSmall.glb", icon: WindowIcon },
  { path: "models/Plain/PlainSmallWindowframe.glb", icon: WindowIcon },
  { path: "models/Plain/PlainWindowframe.glb", icon: WindowIcon },
];

const Concrete = [
  { path: "models/Concrete/Concrete.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteCorner.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteCornerHalfWall.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteDoorframe.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteGarageFrame.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteHalfWall.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteHalfWallSmall.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteSmall.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteSmallWindowframe.glb", icon: WindowIcon },
  { path: "models/Concrete/ConcreteWindowframe.glb", icon: WindowIcon },
];
const assets = [
  {
    icon: DoorIcon,
    group: Doors,
  },
  {
    icon: WallIcon,
    group: BrickV1,
  },
  {
    icon: WindowIcon,
    group: BrickV2,
  },
  {
    icon: WallIcon,
    group: BrickV3,
  },
  {
    icon: WindowIcon,
    group: Plain,
  },
  {
    icon: WallIcon,
    group: Concrete,
  },
  {
    icon: RoofIcon,
    group: Roofs,
  },
];
const Toolbar = (props) => {
  const { addShape } = props;

  return (
    <div className="toolbar">
      <div className="toolbar-header"> Add </div>
      {assets.map((asset, i) => (
        <div className="toolbar-menu" key={i}>
          <img src={asset.icon} className="toolbar-icon" />
          <div className="toolbar-submenu">
            {asset.group.map((item, index) => (
              <button
                className="toolbar-item"
                key={index}
                onClick={() => addShape(item.path)}
              >
                <img src={item.icon} className="toolbar-item-icon" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
