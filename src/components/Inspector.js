import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Inspector = (props) => {
  const { controlStatus, setControlStatus } = props;
  //   const scene = useThree((state) => state.scene);

  return (
    <div className="inspector">
      <div className="inspector-header"> Inspector </div>
    </div>
  );
};
export default Inspector;
