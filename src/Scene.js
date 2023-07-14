import React, { useState, useEffect, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  GizmoHelper,
  GizmoViewcube,
} from "@react-three/drei";
import { BoxHelper, Color } from "three";

import Model from "./components/Model";
import { assets } from "./components/Toolbar";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Scene = ({
  objects,
  controlStatus,
  setControlStatus,
  inspectProperties,
  setInspectProperties,
}) => {
  console.log(assets);
  const [shapes, setShapes] = useState(objects);
  const cubeRef = useRef();
  const { scene } = useThree();
  useHelper(cubeRef, BoxHelper, "yellow");

  // useEffect(() => {
  //   assets.map((item1) => {
  //     item1.children.map((item2) => {
  //       item2.children.map((item3) =>
  //       );
  //     });
  //   });
  // }, []);

  useEffect(() => {
    setShapes(objects);
    // console.log(shapes);
  }, [objects]);

  useEffect(() => {
    const currentObject = scene.getObjectByProperty(
      "uuid",
      controlStatus.current
    );
    currentObject &&
      setInspectProperties({
        ...inspectProperties,
        name: currentObject.name,
        position: currentObject.position,
        rotation: currentObject.rotation,
        // color: "#" + currentObject.material.color.getHexString(),
      });
  }, [controlStatus]);

  useEffect(() => {
    const currentObject = scene.getObjectByProperty(
      "uuid",
      controlStatus.current
    );
    if (currentObject) {
      currentObject.name = inspectProperties.name;

      currentObject.position.set(
        inspectProperties.position.x,
        inspectProperties.position.y,
        inspectProperties.position.z
      );
      currentObject.rotation.set(
        inspectProperties.rotation.x,
        inspectProperties.rotation.y,
        inspectProperties.rotation.z
      );
      // currentObject.scale.set(
      //   inspectProperties.scale.x,
      //   inspectProperties.scale.y,
      //   inspectProperties.scale.z
      // );

      // const material = currentObject.material;
      // material.color = new Color(inspectProperties.color);
      // currentObject.material = material;
    }
  }, [inspectProperties]);
  return (
    <>
      <OrbitControls
        makeDefault
        minDistance={1}
        maxDistance={20}
        screenSpacePanning={false}
      />
      {/* <GizmoHelper alignment={"top-right"} margin={[60, 60]}>
        <GizmoViewcube labelColor={"black"} />
      </GizmoHelper> */}
      <group>
        <mesh
          position={[0, -0.251, 0]}
          receiveShadow
          onClick={() => setControlStatus({ ...controlStatus, current: null })}
        >
          <boxGeometry args={[15, 0.5, 15]} />
          <meshPhysicalMaterial
            color={"#fefefe"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </group>

      <gridHelper position={[0, 0, 0]} args={[5000, 5000]} />

      {shapes.map((item, index) => (
        <Model
          type={item.type}
          position={item.position}
          rotation={item.rotation}
          uuid={item.uuid}
          key={index}
          controlStatus={controlStatus}
          setControlStatus={setControlStatus}
        />
      ))}
    </>
  );
};

export default Scene;
