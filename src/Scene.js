import React, { useState, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  GizmoHelper,
  GizmoViewcube,
} from "@react-three/drei";
import { BoxHelper, Color } from "three";
import Box from "./components/models/Box";
import Cylinder from "./components/models/Cylinder";
import Sphere from "./components/models/Sphere";
import Cone from "./components/models/Cone";
const Scene = ({
  objects,
  controlStatus,
  setControlStatus,
  inspectProperties,
  setInspectProperties,
}) => {
  const [shapes, setShapes] = useState(objects);
  const cubeRef = useRef();
  const { scene } = useThree();
  useHelper(cubeRef, BoxHelper, "yellow");

  useEffect(() => {
    setShapes(objects);
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
        uuid: currentObject.uuid,
        type: currentObject.type,
        position: currentObject.position,
        scale: currentObject.scale,
        rotation: currentObject.rotation,
        visible: currentObject.visible,
        renderOrder: currentObject.renderOrder,
        receiveShadow: currentObject.receiveShadow,
        castShadow: currentObject.castShadow,
        color: "#" + currentObject.material.color.getHexString(),
        roughness: currentObject.material.roughness,
        metalness: currentObject.material.metalness,
        emissive: "#" + currentObject.material.emissive.getHexString(),
      });
  }, [controlStatus]);

  useEffect(() => {
    const currentObject = scene.getObjectByProperty(
      "uuid",
      controlStatus.current
    );
    if (currentObject) {
      currentObject.name = inspectProperties.name;
      currentObject.uuid = inspectProperties.uuid;
      currentObject.type = inspectProperties.type;
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
      currentObject.scale.set(
        inspectProperties.scale.x,
        inspectProperties.scale.y,
        inspectProperties.scale.z
      );
      currentObject.visible = inspectProperties.visible;
      currentObject.renderOrder = inspectProperties.renderOrder;
      currentObject.receiveShadow = inspectProperties.receiveShadow;
      currentObject.castShadow = inspectProperties.castShadow;
      const material = currentObject.material;
      material.color = new Color(inspectProperties.color);
      material.emissive = new Color(inspectProperties.emissive);
      material.roughness = inspectProperties.roughness;
      material.metalness = inspectProperties.metalness;
      currentObject.material = material;
    }
  }, [inspectProperties]);
  return (
    <>
      <gridHelper position={[0, -0.5, 0]} args={[5000, 5000]} />
      <GizmoHelper alignment={"top-right"} margin={[60, 60]}>
        <GizmoViewcube labelColor={"black"} />
      </GizmoHelper>
      <mesh position={[0, -0.76, 0]} receiveShadow>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshPhysicalMaterial
          color={"#486475"}
          roughness={0.5}
          metalness={0.5}
          emissive={"#486475"}
        />
      </mesh>
      <OrbitControls
        makeDefault
        minDistance={1}
        maxDistance={10}
        screenSpacePanning={false}
      />
      {shapes.map((item, index) => {
        if (item.type === "cube")
          return (
            <Box
              position={item.position}
              rotation={item.rotation}
              key={index}
              controlStatus={controlStatus}
              setControlStatus={setControlStatus}
            />
          );
        if (item.type === "cylinder")
          return (
            <Cylinder
              position={item.position}
              rotation={item.rotation}
              key={index}
              controlStatus={controlStatus}
              setControlStatus={setControlStatus}
            />
          );
        if (item.type === "sphere")
          return (
            <Sphere
              position={item.position}
              rotation={item.rotation}
              key={index}
              controlStatus={controlStatus}
              setControlStatus={setControlStatus}
            />
          );
        if (item.type === "cone")
          return (
            <Cone
              position={item.position}
              rotation={item.rotation}
              key={index}
              controlStatus={controlStatus}
              setControlStatus={setControlStatus}
            />
          );
      })}
    </>
  );
};

export default Scene;
