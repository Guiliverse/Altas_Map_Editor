import React, { useEffect, useState } from "react";
import { degrees_to_radians, radians_to_degrees } from "../utils";
const Inspector = (props) => {
  const {
    controlStatus,
    setControlStatus,
    inspectProperties,
    setInspectProperties,
    setFlag,
  } = props;

  const { name, uuid, type, position, rotation, scale, color } =
    inspectProperties;

  const onNameChange = (name) => {
    setInspectProperties({ ...inspectProperties, name: name });
  };
  const onColorChange = (color) => {
    setInspectProperties({ ...inspectProperties, color: color });
    setFlag(true);
  };

  const onPositionChange = (position) => {
    setInspectProperties({ ...inspectProperties, position: position });
  };
  const onRotationChange = (rotation) => {
    setInspectProperties({ ...inspectProperties, rotation: rotation });
  };

  return (
    <div
      className={`inspector ${controlStatus.current !== null ? "show" : ""}`}
    >
      <div className="inspector-header"> Inspector </div>
      <div className="inspector-body">
        <table className="inspector-elements">
          <tr>
            <td className="inspector-tag">Object</td>
          </tr>
          <tr className="inspector-element">
            <td className="label">Name </td>
            <td>
              <input
                className="input-value"
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
              />
            </td>
          </tr>
          <tr className="inspector-element">
            <td className="label">UUID</td>
            <td className="content">{uuid}</td>
          </tr>
          <tr className="inspector-element">
            <td className="label">Type</td>
            <td className="content">{type}</td>
          </tr>
          <tr className="inspector-element">
            <td className="label">Position</td>
            <td className="flex-row">
              <p className="content">X</p>
              <input
                className="input-value"
                value={position.x}
                onChange={(e) =>
                  onPositionChange({
                    x: +e.target.value,
                    y: +position.y,
                    z: +position.z,
                  })
                }
              />
              <p className="content">Y</p>
              <input
                className="input-value"
                value={position.y}
                onChange={(e) =>
                  onPositionChange({
                    x: +position.x,
                    y: +e.target.value,
                    z: +position.z,
                  })
                }
              />
              <p className="content">Z</p>
              <input
                className="input-value"
                value={position.z}
                onChange={(e) =>
                  onPositionChange({
                    x: +position.x,
                    y: +position.y,
                    z: +e.target.value,
                  })
                }
              />
            </td>
          </tr>

          <tr className="inspector-element">
            <td className="label">Rotation</td>
            <td className="flex-row">
              <p className="content">X</p>
              <input
                className="input-value"
                value={radians_to_degrees(rotation.x)}
                onChange={(e) =>
                  onRotationChange({
                    x: degrees_to_radians(+e.target.value),
                    y: +rotation.y,
                    z: +rotation.z,
                  })
                }
              />
              <p className="content">Y</p>
              <input
                className="input-value"
                value={radians_to_degrees(rotation.y)}
                onChange={(e) =>
                  onRotationChange({
                    x: +rotation.x,
                    y: degrees_to_radians(+e.target.value),
                    z: +rotation.z,
                  })
                }
              />
              <p className="content">Z</p>
              <input
                className="input-value"
                value={radians_to_degrees(rotation.z)}
                onChange={(e) =>
                  onRotationChange({
                    x: +rotation.x,
                    y: +rotation.y,
                    z: degrees_to_radians(+e.target.value),
                  })
                }
              />
            </td>
          </tr>

          <tr className="inspector-tag">
            <td className="label"> Material</td>
          </tr>
          <tr className="inspector-element">
            <td className="align-start label">Color</td>
            <td>
              <input
                type="color"
                value={color}
                onChange={(e) => onColorChange(e.target.value)}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Inspector;
