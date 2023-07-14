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

const Floors = [
  { path: "models/Interior/Floor/FloorTileSideV1.glb", icon: DoorIcon },
  { path: "models/Interior/Floor/FloorTileV1_00.glb", icon: DoorIcon },
  { path: "models/Interior/Floor/FloorTileV1_01.glb", icon: DoorIcon },
  { path: "models/Interior/Floor/FloorTileV1_02.glb", icon: DoorIcon },
];
const FurnitureAccs = [
  { path: "models/Interior/Furniture-Acc/FurnAcc_BedLamp.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Book.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_BookV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_BookV3.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Bowl.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Clock.glb", icon: DoorIcon },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_ClockSmall.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_ClockWall.glb",
    icon: DoorIcon,
  },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Glass.glb", icon: DoorIcon },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PaintingLarge.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PaintingLargeV2.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PaintingMedium.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PaintingSmall.glb",
    icon: DoorIcon,
  },
  { path: "models/Interior/Furniture-Acc/FurnAcc_PensV1.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_PensV2.glb", icon: DoorIcon },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PlantLarge.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Furniture-Acc/FurnAcc_PlantSmall.glb",
    icon: DoorIcon,
  },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Plate.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Stapler.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_Vase.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_VaseV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture-Acc/FurnAcc_WallArt.glb", icon: DoorIcon },
];

const Furnitures = [
  { path: "models/Interior/Furniture/AirConditioner.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Armchair.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Bar.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/BarShelf.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/BarStool.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/BarV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Bathtub.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Bed.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/BedV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Bookshelf.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/BookshelfV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLamp.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLampV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLampV3.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLampV4.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLampV5.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CeilingLampV6.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Chair.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CoffeeTable.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CouchV1.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CouchV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/CouchV3.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DeshChair.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Desk.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DeskV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DineTableChair.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DiningTable.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DiningTableV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DresserLargeV1.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DresserLargeV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DresserV1.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/DresserV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Ext-BrickV3.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/RugBlack.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/RugRound.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/RugSmall.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/RugWhite.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Sink.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/SinkCorner.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/SmokeDetector.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Thermostat.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/ThermostatV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/ToiletClosed.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/ToiletOpen.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/TvTable.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/TvTableV2.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/WallOutlet.glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Wallswitch(00).glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Wallswitch(01).glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Wallswitch(11).glb", icon: DoorIcon },
  { path: "models/Interior/Furniture/Wardrobe.glb", icon: DoorIcon },
];

const Stairs = [
  { path: "models/Interior/Stairs/StairRailLongV1.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairRailLongV1W.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairRailV1.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairRailV1W.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsLongV1.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsLongV1W.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsLongV2.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsLongV2W.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsV1.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsV1W.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsV2.glb", icon: DoorIcon },
  { path: "models/Interior/Stairs/StairsV2W.glb", icon: DoorIcon },
];

const IntV1Plane = [
  {
    path: "models/Interior/Walls/IntV1Plane/EndPcsCornerV1Plain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/EndPcsDoorframeV1Plain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/EndPcsV1Plain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1CornerHalfWallPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1CornerPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1DoorframePlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1GarageFramePlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1HalfWallPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1HalfWallSmallPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1WallPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1WallSmallPlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1WindowframePlain.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV1Plane/Int-V1WindowframeSmallPlain.glb",
    icon: DoorIcon,
  },
];

const IntV2Gray = [
  {
    path: "models/Interior/Walls/IntV2Gray/EndPcsCornerV2Gray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/EndPcsDoorframeV2Gray.glb",
    icon: DoorIcon,
  },
  { path: "models/Interior/Walls/IntV2Gray/EndPcsV2Gray.glb", icon: DoorIcon },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2CornerHalfWallGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2CornerGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2DoorframeGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2GarageFrameGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2HalfWallGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2HalfWallSmallGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2WallGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2WallSmallGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2WindowframeGray.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2Gray/Int-V2WindowframeSmallGray.glb",
    icon: DoorIcon,
  },
];

const IntV2White = [
  {
    path: "models/Interior/Walls/IntV2White/EndPcsCornerV2White.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/EndPcsDoorframeV2White.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/EndPcsV2White.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2CornerHalfWallWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2CornerWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2DoorframeWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2GarageFrameWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2HalfWallWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2HalfWallSmallWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2WallWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2WallSmallWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2WindowframeWhite.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV2White/Int-V2WindowframeSmallWhite.glb",
    icon: DoorIcon,
  },
];

const IntV3Stripes = [
  {
    path: "models/Interior/Walls/IntV3Stripes/EndPcsCornerV3Stripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/EndPcsDoorframeV3Stripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/EndPcsV3Stripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3CornerHalfWallStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3CornerStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3DoorframeStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3GarageFrameStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3HalfWallStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3HalfWallSmallStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3WallStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3WallSmallStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3WindowframeStripes.glb",
    icon: DoorIcon,
  },
  {
    path: "models/Interior/Walls/IntV3Stripes/Int-V3WindowframeSmallStripes.glb",
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
    category: "Interior",
    icon: WallIcon,
    children: [
      { category: "Furnitures", icon: FurnitureIcon, children: Furnitures },
      { category: "Floors", icon: DoorIcon, children: Floors },
      { category: "PlaneWall", icon: WallIcon, children: IntV1Plane },
      { category: "GrayWall", icon: WallIcon, children: IntV2Gray },
      { category: "WhiteWall", icon: WallIcon, children: IntV2White },
      { category: "StripesWall", icon: WallIcon, children: IntV3Stripes },
      { category: "Stairs", icon: WallIcon, children: Stairs },

      {
        category: "FurnitureAccs",
        icon: FurnitureIcon,
        children: FurnitureAccs,
      },
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
