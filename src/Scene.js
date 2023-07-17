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
import { current } from "immer";
import * as THREE from "three";
// import { EffectComposer } from "@react-three/postprocessing";
const Scene = ({
  objects,
  controlStatus,
  setControlStatus,
  inspectProperties,
  setInspectProperties,
  flag,
  setFlag,
}) => {
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
    // if (flag === true) {
    const currentObject = scene.getObjectByProperty(
      "uuid",
      controlStatus.current
    );
    // console.log(currentObject);
    if (flag === true)
      currentObject &&
        setInspectProperties({
          ...inspectProperties,
          name: currentObject.name,
          position: currentObject.position,
          rotation: currentObject.rotation,
          color: "#" + currentObject.material.color.getHexString(),
          type: currentObject.type,
          uuid: currentObject.uuid,
        });
    if (flag === false)
      currentObject &&
        setInspectProperties({
          ...inspectProperties,
          name: currentObject.name,
          position: currentObject.position,
          rotation: currentObject.rotation,
          type: currentObject.type,
          uuid: currentObject.uuid,
          // color: "#" + currentObject.material.color.getHexString(),
          color: "",
        });
    // }
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
      // console.log(inspectProperties.color);
      if (inspectProperties.color !== "") {
        const material = new THREE.MeshBasicMaterial({
          color: inspectProperties.color,
        });
        currentObject.material = material;
      }
      // currentObject.children = [];
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
      {/* <EffectComposer> */}
      <GizmoHelper alignment={"top-right"} margin={[60, 60]}>
        <GizmoViewcube labelColor={"black"} />
      </GizmoHelper>
      {/* </EffectComposer> */}

      <group>
        <mesh
          position={[0, -0.251, 0]}
          receiveShadow
          onClick={() => setControlStatus({ ...controlStatus, current: null })}
        >
          <boxGeometry args={[20, 0.5, 20]} />
          <meshPhysicalMaterial
            color={"#aaaaaa"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
      </group>

      <gridHelper position={[0, 0, 0]} args={[5000, 5000]} />

      {shapes.map((item, index) => (
        <Model
          setFlag={setFlag}
          type={item.type}
          position={item.position}
          rotation={item.rotation}
          material={item.material}
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
