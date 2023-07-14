import React from "react";
import DoorIcon from "../assets/toolbar-icon/door.png";
import WindowIcon from "../assets/toolbar-icon/window.png";
import WallIcon from "../assets/toolbar-icon/wall.png";
import FurnitureIcon from "../assets/toolbar-icon/furniture.png";
import RoofIcon from "../assets/toolbar-icon/roof.png";

const Doors = [
  { path: "models/Exterior/Door/Door00.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door01.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door02.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door03.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door04.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door05.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door06.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door07.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/Door08.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/GarageDoor00.glb", icon: DoorIcon },
  { path: "models/Exterior/Door/GarageDoor01.glb", icon: DoorIcon },
];
const DoorHandles = [
  { path: "models/Exterior/Doorhandles/DoorHandle00.glb", icon: DoorIcon },
  { path: "models/Exterior/Doorhandles/DoorHandle01.glb", icon: DoorIcon },
  { path: "models/Exterior/Doorhandles/DoorHandle02.glb", icon: DoorIcon },
  { path: "models/Exterior/Doorhandles/DoorHandle03.glb", icon: DoorIcon },
];
const Roofs = [
  { path: "models/Exterior/Roof/RoofFlat.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofFlatCorner.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofFlatCornerInv.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofFlatSmall.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofMiddle.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofShed.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofShedCorner.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofShedSmallLeft.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofShedSmallMiddle.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofShedSmallRight.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofSlope.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofSlopeCorner.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof/RoofSlopeSmall.glb", icon: RoofIcon },
];

const RoofAccs = [
  { path: "models/Exterior/Roof-Acc/RoofAcc_Lamps.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof-Acc/RoofAcc_LampsSmall.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof-Acc/RoofAcc_RadioTower.glb", icon: RoofIcon },
  {
    path: "models/Exterior/Roof-Acc/RoofAcc_SkylightLarge.glb",
    icon: RoofIcon,
  },
  {
    path: "models/Exterior/Roof-Acc/RoofAcc_SkylightSmall.glb",
    icon: RoofIcon,
  },
  {
    path: "models/Exterior/Roof-Acc/RoofAcc_SkylightSmallV2.glb",
    icon: RoofIcon,
  },
  { path: "models/Exterior/Roof-Acc/RoofAcc_SolarPanel.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof-Acc/RoofAcc_Unit.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof-Acc/RoofAcc_UnitV2.glb", icon: RoofIcon },
  { path: "models/Exterior/Roof-Acc/RoofAcc_Vents.glb", icon: RoofIcon },
];

const BrickV1 = [
  { path: "models/Exterior/Walls/BrickV1/BrickV1.glb", icon: WindowIcon },
  { path: "models/Exterior/Walls/BrickV1/BrickV1Corner.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1HalfWallSmall.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV1/BrickV1Small.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/BrickV1Windowframe.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV1/Ext-BrickV1.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1Corner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1CornerHalfWall-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1Corner-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1HalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1Small.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV1/Ext-BrickV1Windowframe.glb",
    icon: WindowIcon,
  },
];

const BrickV2 = [
  { path: "models/Exterior/Walls/BrickV2/BrickV2.glb", icon: WindowIcon },
  { path: "models/Exterior/Walls/BrickV2/BrickV2Corner.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2HalfWallSmall.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV2/BrickV2Small.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/BrickV2Windowframe.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV2/Ext-BrickV2.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2Corner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2CornerHalfWall-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2Corner-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2HalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2Small.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV2/Ext-BrickV2Windowframe.glb",
    icon: WindowIcon,
  },
];
const BrickV3 = [
  { path: "models/Exterior/Walls/BrickV3/BrickV3.glb", icon: WindowIcon },
  { path: "models/Exterior/Walls/BrickV3/BrickV3Corner.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3HalfWallSmall.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV3/BrickV3Small.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/BrickV3Windowframe.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/BrickV3/Ext-BrickV3.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3Corner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3CornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3CornerHalfWall-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3Corner-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3Doorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3GarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3HalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3HalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3Small.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3SmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/BrickV3/Ext-BrickV3Windowframe.glb",
    icon: WindowIcon,
  },
];

const Concrete = [
  { path: "models/Exterior/Walls/Concrete/Concrete.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteCorner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteCornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteDoorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteGarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteHalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteSmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/ConcreteWindowframe.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/Concrete/Ext-Concrete.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteCorner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteCornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteCornerHalfWall-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteCorner-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteDoorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteGarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteHalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteSmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Concrete/Ext-ConcreteWindowframe.glb",
    icon: WindowIcon,
  },
];

const Plain = [
  { path: "models/Exterior/Walls/Plain/Plain.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/Plain/PlainCorner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainCornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainDoorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainGarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainHalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainSmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/PlainWindowframe.glb",
    icon: WindowIcon,
  },
  { path: "models/Exterior/Walls/Plain/Ext-Plain.glb", icon: WindowIcon },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainCorner.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainCornerHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainCornerHalfWall-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainCorner-Inv.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainDoorframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainGarageFrame.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainHalfWall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainHalfWallSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainSmall.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainSmallWindowframe.glb",
    icon: WindowIcon,
  },
  {
    path: "models/Exterior/Walls/Plain/Ext-PlainWindowframe.glb",
    icon: WindowIcon,
  },
];

const WallAccs = [
  { path: "models/Exterior/Wall-Acc/DoorwayLights00.glb", icon: DoorIcon },
  { path: "models/Exterior/Wall-Acc/DoorwayLights01.glb", icon: DoorIcon },
  { path: "models/Exterior/Wall-Acc/WallLight00.glb", icon: DoorIcon },
  { path: "models/Exterior/Wall-Acc/WallLight01.glb", icon: DoorIcon },
  { path: "models/Exterior/Wall-Acc/WindowAcc_Lights.glb", icon: DoorIcon },
  {
    path: "models/Exterior/Wall-Acc/WindowLargeAcc_Lights.glb",
    icon: DoorIcon,
  },
];

const Windows = [
  { path: "models/Exterior/Windows/Window00.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/Window01.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/Window02.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/Window03.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/Window04.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/Window05.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge00.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge01.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge02.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge03.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge04.glb", icon: DoorIcon },
  { path: "models/Exterior/Windows/WindowLarge05.glb", icon: DoorIcon },
];

const WindowAccs = [
  { path: "models/Exterior/Win-Acc/WindowAcc_Flowers.glb", icon: DoorIcon },
  { path: "models/Exterior/Win-Acc/WindowAcc_FlowersV2.glb", icon: DoorIcon },
  { path: "models/Exterior/Win-Acc/WindowAcc_Planks.glb", icon: DoorIcon },
  { path: "models/Exterior/Win-Acc/WindowAcc_PlanksV2.glb", icon: DoorIcon },
  { path: "models/Exterior/Win-Acc/WindowAcc_Sign.glb", icon: DoorIcon },
  {
    path: "models/Exterior/Win-Acc/WindowLargeAcc_Flowers.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Exterior/Win-Acc/WindowLargeAcc_FlowersV2.glb",
    icon: DoorIcon,
  },
  { path: "models/Exterior/Win-Acc/WindowLargeAcc_Planks.glb", icon: DoorIcon },
  {
    path: "models/Exterior/Win-Acc/WindowLargeAcc_PlanksV2.glb",
    icon: DoorIcon,
  },
];

const assets = [
  {
    category: "Exterior",
    icon: DoorIcon,
    children: [
      { category: "Door", icon: DoorIcon, children: Doors },
      { category: "Roof", icon: RoofIcon, children: Roofs },
      { category: "RoofAcc", icon: RoofIcon, children: RoofAccs },
      { category: "BrickV1", icon: WallIcon, children: BrickV1 },
      { category: "BrickV2", icon: WallIcon, children: BrickV2 },
      { category: "BrickV3", icon: WallIcon, children: BrickV3 },
      { category: "Concrete", icon: WallIcon, children: Concrete },
      { category: "Plain", icon: WallIcon, children: Plain },
      { category: "WallAcc", icon: WallIcon, children: WallAccs },
      { category: "DoorHandles", icon: DoorIcon, children: DoorHandles },
      { category: "Windows", icon: WindowIcon, children: Windows },
      { category: "WindowAccs", icon: WindowIcon, children: WindowAccs },
    ],
  },
  {
    category: "Exterior",
    icon: DoorIcon,
    children: [
      { category: "Door", icon: DoorIcon, children: Doors },
      { category: "Roof", icon: DoorIcon, children: Roofs },
      { category: "BrickV1", icon: DoorIcon, children: BrickV1 },
      { category: "BrickV2", icon: DoorIcon, children: BrickV2 },
      { category: "BrickV3", icon: DoorIcon, children: BrickV3 },
    ],
  },
];
const Toolbar = (props) => {
  const { addShape } = props;

  return (
    <div className="toolbar">
      <div className="toolbar-header"> Add </div>
      <div className="toolbar-menu">
        {assets.map((item1, index1) => (
          <div className="toolbar-menu-item hover-effect" key={index1}>
            <img src={item1.icon} className="toolbar-icon" />
            <div className="toolbar-submenu1 submenu-bg">
              {item1.children.map((item2, index2) => (
                <div className="toolbar-menu-item1 hover-effect" key={index2}>
                  <img src={item2.icon} className="toolbar-icon" />
                  <div className="toolbar-submenu2 submenu-bg">
                    {item2.children.map((item3, index3) => (
                      <img
                        key={index3}
                        src={item3.icon}
                        className="toolbar-icon hover-effect"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
