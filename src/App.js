import React, { useState, Suspense, useEffect, useCallback } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { produce } from "immer";

import Toolbar from "./components/Toolbar";
import Inspector from "./components/Inspector";
import Controller from "./components/Controller";
import Scene from "./Scene";
import "./styles.css";

export default function App() {
  const [objects, setObjects] = useState([]);
  const [controlStatus, setControlStatus] = useState({
    current: null,
    mode: "translate",
  });
  const [inspectProperties, setInspectProperties] = useState({
    name: "",
    uuid: "",
    type: "",
    position: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    visible: true,
    renderOrder: 0,
    receiveShadow: false,
    castShadow: true,
    color: "",
    roughness: 0,
    metalness: 0,
    emissive: "",
  });

  const addShape = (type) => {
    setObjects(
      produce((draft) => {
        draft.push({
          type: type,
          rotation: [0, 0, 0],
          position: [0, 0, 0],
        });
      })
    );
  };

  useEffect(() => {
    console.log(controlStatus.current);
  }, [controlStatus]);
  useEffect(() => {
    console.log(inspectProperties);
  }, [inspectProperties]);

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
            inspectProperties={inspectProperties}
            setInspectProperties={setInspectProperties}
          />
        </Canvas>
        <Controller
          controlStatus={controlStatus}
          setControlStatus={setControlStatus}
        />
      </div>
      <Inspector
        controlStatus={controlStatus}
        setControlStatus={setControlStatus}
        inspectProperties={inspectProperties}
        setInspectProperties={setInspectProperties}
      />
    </div>
  );
}
