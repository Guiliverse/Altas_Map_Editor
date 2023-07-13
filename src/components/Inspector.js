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

  const onNameChange = (name) => {
    setInspectProperties({ ...inspectProperties, name: name });
  };
  const onColorChange = (color) => {
    setInspectProperties({ ...inspectProperties, color: color });
  };
  const onEmissiveChange = (emissive) => {
    setInspectProperties({ ...inspectProperties, emissive: emissive });
  };
  const onPositionChange = (position) => {
    setInspectProperties({ ...inspectProperties, position: position });
  };
  const onRotationChange = (rotation) => {
    setInspectProperties({ ...inspectProperties, rotation: rotation });
  };
  const onScaleChange = (scale) => {
    setInspectProperties({ ...inspectProperties, scale: scale });
  };
  const onVisibleChange = (visible) => {
    setInspectProperties({ ...inspectProperties, visible: visible });
  };
  const onCastShadowChange = (castShadow) => {
    setInspectProperties({ ...inspectProperties, castShadow: castShadow });
  };
  const onReceiveShadowChange = (receiveShadow) => {
    setInspectProperties({
      ...inspectProperties,
      receiveShadow: receiveShadow,
    });
  };
  const onRenderOrderChange = (renderOrder) => {
    setInspectProperties({ ...inspectProperties, renderOrder: renderOrder });
  };
  const onRoughnessChange = (roughness) => {
    setInspectProperties({ ...inspectProperties, roughness: roughness });
  };
  const onMetalnessChange = (metalness) => {
    setInspectProperties({ ...inspectProperties, metalness: metalness });
  };
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
                <input
                  className="input-value"
                  value={name}
                  onChange={(e) => onNameChange(e.target.value)}
                />
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
                <div className="content">Y</div>
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
                <div className="content">Z</div>
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
              <td>
                <div className="label">Scale</div>
              </td>
              <td className="flex-row">
                <div className="content">X</div>
                <input
                  className="input-value"
                  value={scale.x}
                  onChange={(e) =>
                    onScaleChange({
                      x: +e.target.value,
                      y: +scale.y,
                      z: +scale.z,
                    })
                  }
                />
                <div className="content">Y</div>
                <input
                  className="input-value"
                  value={scale.y}
                  onChange={(e) =>
                    onScaleChange({
                      x: +scale.x,
                      y: +e.target.value,
                      z: +scale.z,
                    })
                  }
                />
                <div className="content">Z</div>
                <input
                  className="input-value"
                  value={scale.z}
                  onChange={(e) =>
                    onScaleChange({
                      x: +scale.x,
                      y: +scale.y,
                      z: +e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Rotation</div>
              </td>
              <td className="flex-row">
                <div className="content">X</div>
                <input
                  className="input-value"
                  value={rotation.x}
                  onChange={(e) =>
                    onRotationChange({
                      x: +e.target.value,
                      y: +rotation.y,
                      z: +rotation.z,
                    })
                  }
                />
                <div className="content">Y</div>
                <input
                  className="input-value"
                  value={rotation.y}
                  onChange={(e) =>
                    onRotationChange({
                      x: +rotation.x,
                      y: +e.target.value,
                      z: +rotation.z,
                    })
                  }
                />
                <div className="content">Z</div>
                <input
                  className="input-value"
                  value={rotation.z}
                  onChange={(e) =>
                    onRotationChange({
                      x: +rotation.x,
                      y: +rotation.y,
                      z: +e.target.value,
                    })
                  }
                />
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
                  onChange={(e) => onVisibleChange(!visible)}
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
                  onChange={(e) => onCastShadowChange(!castShadow)}
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
                  onChange={(e) => onReceiveShadowChange(!receiveShadow)}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Render Order</div>
              </td>
              <td>
                <input
                  className="input-value"
                  value={renderOrder}
                  onChange={(e) => onRenderOrderChange(e.target.value)}
                />
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
                  value={color}
                  onChange={(e) => onColorChange(e.target.value)}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Roughness</div>
              </td>
              <td>
                <input
                  className="input-value"
                  type="number"
                  min={0.0}
                  max={1.0}
                  step={0.1}
                  value={roughness}
                  onChange={(e) => onRoughnessChange(e.target.value)}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td>
                <div className="label">Metalness</div>
              </td>
              <td>
                <input
                  className="input-value"
                  type="number"
                  min={0.0}
                  max={1.0}
                  step={0.1}
                  value={metalness}
                  onChange={(e) => onMetalnessChange(e.target.value)}
                />
              </td>
            </tr>
            <tr className="inspector-element">
              <td className="align-start">
                <div className="label">Emissive</div>
              </td>
              <td>
                <input
                  type="color"
                  value={emissive}
                  onChange={(e) => onEmissiveChange(e.target.value)}
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
