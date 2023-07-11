import React, { useState, Suspense, useEffect, useCallback } from "react";
import { Environment } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Toolbar from "./components/Toolbar";
import Inspector from "./components/Inspector";
import { produce } from "immer";
import Scene from "./Scene";
import "./styles.css";

export default function App() {
  const [objects, setObjects] = useState([]);
  const [controlStatus, setControlStatus] = useState({
    current: null,
    mode: "translate",
    color: "",
  });

  const addShape = (type) => {
    setObjects(
      produce((draft) => {
        draft.push({ type: type, rotation: [0, 0, 0], position: [0, 0, 0] });
      })
    );
  };

  useEffect(() => {
    console.log(controlStatus.current);
  }, [controlStatus]);

  return (
    <div className="wrapper">
      <Toolbar objects={objects} addShape={addShape} />
      <div className="main-window">
        <Canvas camera={{ fov: 75, position: [10, 10, 10] }}>
          <Environment
            path="hdr/"
            files="evening_road_01_puresky_4k.hdr"
            background
            blur={1.0}
          />
          <Scene
            objects={objects}
            controlStatus={controlStatus}
            setControlStatus={setControlStatus}
          />
        </Canvas>
        <div className="basic-controls">
          <div className="basic-button-group">
            <button
              className={`basic-button ${
                controlStatus.mode === "translate" ? "selected" : ""
              }`}
              onClick={() => {
                setControlStatus({ ...controlStatus, mode: "translate" });
              }}
            >
              Move
            </button>
            <button
              className={`basic-button ${
                controlStatus.mode === "rotate" ? "selected" : ""
              }`}
              onClick={() => {
                setControlStatus({ ...controlStatus, mode: "rotate" });
              }}
            >
              Rotate
            </button>
          </div>
        </div>
      </div>
      <Inspector
        controlStatus={controlStatus}
        setControlStatus={setControlStatus}
      />
    </div>
  );
}
