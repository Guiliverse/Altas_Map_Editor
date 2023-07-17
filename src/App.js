import React, { useState, Suspense, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import { Environment } from "@react-three/drei";
import ReactLoading from "react-loading";
import Toolbar from "./components/Toolbar";
import Inspector from "./components/Inspector";
import Controller from "./components/Controller";
import Scene from "./Scene";
import "./styles.css";
const Loader = () => {
  return (
    <div className="loader">
      <ReactLoading type="spokes" color="#0f0f0f" />
    </div>
  );
};

export default function App() {
  const [objects, setObjects] = useState([]);
  const [controlStatus, setControlStatus] = useState({
    current: null,
    mode: "translate",
  });
  const [flag, setFlag] = useState(false);
  const [inspectProperties, setInspectProperties] = useState({
    name: "",
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "",
    type: "",
    uuid: "",
    // emissive: "",
  });

  const addShape = (type) => {
    setObjects(
      produce((draft) => {
        draft.push({
          type: type,
          uuid: uuidv4(),
          rotation: [0, 0, 0],
          position: [0, 0, 0],
          material: null,
        });
      })
    );
  };

  // useEffect(() => {
  //   console.log(objects);
  // }, [objects]);

  // useEffect(() => {
  //   console.log(inspectProperties);
  // }, [inspectProperties]);

  return (
    <div className="wrapper">
      <Suspense fallback={<Loader />}>
        <Toolbar
          objects={objects}
          addShape={addShape}
          controlStatus={controlStatus}
          setControlStatus={setControlStatus}
        />
        <div className="main-window">
          <Canvas camera={{ fov: 75, position: [10, 10, 10] }}>
            <Environment
              path="hdr/"
              files="evening_road_01_puresky_4k.hdr"
              background
              blur={1.0}
            />

            <Scene
              flag={flag}
              setFlag={setFlag}
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
      </Suspense>

      <Inspector
        setFlag={setFlag}
        controlStatus={controlStatus}
        setControlStatus={setControlStatus}
        inspectProperties={inspectProperties}
        setInspectProperties={setInspectProperties}
      />
    </div>
  );
}
