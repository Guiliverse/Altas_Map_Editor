import React, { useEffect, useState } from "react";

const Inspector = (props) => {
  const {
    controlStatus,
    setControlStatus,
    inspectProperties,
    setInspectProperties,
  } = props;

  const {
    name,
    uuid,
    type,
    position,
    rotation,
    scale,
    visible,
    castShadow,
    receiveShadow,
    renderOrder,
    color,
    metalness,
    roughness,
    emissive,
  } = inspectProperties;

  const [colorInput, setColorInput] = useState(color);
  const [emissiveInput, setEmissiveInput] = useState(emissive);

  useEffect(() => {
    setColorInput(color);
  }, [color]);
  useEffect(() => {
    setEmissiveInput(emissive);
  }, [emissive]);

  return (
    <div className="inspector">
      <div className="inspector-header"> Inspector </div>
      {controlStatus.current && (
        <div className="inspector-body">
          <table className="inspector-elements">
            <tr>
              <div className="inspector-tag">Object</div>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Name</div>
              </td>
              <td>
                <input className="input-value" value={name} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">UUID</div>
              </td>
              <td>
                <div className="content">{uuid}</div>
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Type</div>
              </td>
              <td>
                <div className="content">{type}</div>
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Position</div>
              </td>
              <td className="flex-row">
                <div className="content">X</div>
                <input className="input-value" value={position.x} />
                <div className="content">Y</div>
                <input className="input-value" value={position.y} />
                <div className="content">Z</div>
                <input className="input-value" value={position.z} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Scale</div>
              </td>
              <td className="flex-row">
                <div className="content">X</div>
                <input className="input-value" value={scale.x} />
                <div className="content">Y</div>
                <input className="input-value" value={scale.y} />
                <div className="content">Z</div>
                <input className="input-value" value={scale.z} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Rotation</div>
              </td>
              <td className="flex-row">
                <div className="content">X</div>
                <input className="input-value" value={rotation.x} />
                <div className="content">Y</div>
                <input className="input-value" value={rotation.y} />
                <div className="content">Z</div>
                <input className="input-value" value={rotation.z} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Visible</div>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-value"
                  checked={visible ? "checked" : ""}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Cast Shadows</div>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-value"
                  checked={castShadow ? "checked" : ""}
                />
              </td>
            </tr>

            <tr className="inspector-element">
              <td>
                <div className="label">Receive Shadows</div>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="checkbox-value"
                  checked={receiveShadow ? "checked" : ""}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Render Order</div>
              </td>
              <td>
                <input className="input-value" value={renderOrder} />
              </td>
            </tr>
            <tr>
              <div className="inspector-tag">Material</div>
            </tr>
            <tr className="inspector-element">
              <td className="align-start">
                <div className="label">Color</div>
              </td>
              <td>
                <input
                  type="color"
                  value={colorInput}
                  onChange={(e) => setColorInput(e.target.value)}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Roughness</div>
              </td>
              <td>
                <input className="input-value" value={roughness} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Metalness</div>
              </td>
              <td>
                <input className="input-value" value={metalness} />
              </td>
            </tr>
            <tr className="inspector-element">
              <td className="align-start">
                <div className="label">Emissive</div>
              </td>
              <td>
                <input
                  type="color"
                  value={emissiveInput}
                  onChange={(e) => setEmissiveInput(e.target.value)}
                />
              </td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};
export default Inspector;
