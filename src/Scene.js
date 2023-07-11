import React, { useState, useEffect, useRef } from "react";
import { useThree, useLoader, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  TransformControls,
  GizmoHelper,
  GizmoViewport,
  GizmoViewcube,
} from "@react-three/drei";
import { BoxHelper } from "three";
const modes = ["translate", "rotate", "scale"];

const CustomBox = (props) => {
  const { position, rotation, controlStatus, setControlStatus } = props;
  const ref = useRef();

  const onClickhandle = () => {
    setControlStatus({ ...controlStatus, current: ref?.current.uuid });
  };

  return (
    <>
      {ref.current && controlStatus.current === ref?.current.uuid && (
        <TransformControls object={ref.current} mode={controlStatus.mode} />
      )}
      <mesh
        position={position}
        rotation={rotation}
        castShadow
        ref={ref}
        onClick={onClickhandle}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={"#049ef4"}
          roughness={0.5}
          metalness={0.5}
          emissive={"#000000"}
        />
        {ref.current && controlStatus.current === ref?.current.uuid && (
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color={"yellow"} wireframe={true} />
          </mesh>
        )}
      </mesh>
    </>
  );
};

const CustomCylinder = (props) => {
  const { position, rotation, controlStatus, setControlStatus } = props;
  const ref = useRef();

  const onClickhandle = () => {
    setControlStatus({ ...controlStatus, current: ref?.current.uuid });
  };

  return (
    <>
      {ref.current && controlStatus.current === ref?.current.uuid && (
        <TransformControls object={ref.current} mode={controlStatus.mode} />
      )}
      <mesh
        position={position}
        rotation={rotation}
        castShadow
        ref={ref}
        onClick={onClickhandle}
      >
        <cylinderGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={"#049ef4"}
          roughness={0.5}
          metalness={0.5}
          emissive={"#000000"}
        />
        {ref.current && controlStatus.current === ref?.current.uuid && (
          <mesh>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial color={"yellow"} wireframe={true} />
          </mesh>
        )}
      </mesh>
    </>
  );
};

const Scene = ({ objects, controlStatus, setControlStatus }) => {
  const [shapes, setShapes] = useState(objects);
  const cubeRef = useRef();
  useHelper(cubeRef, BoxHelper, "yellow");

  useEffect(() => {
    setShapes(objects);
    console.log(objects);
  }, [objects]);
  return (
    <>
      <gridHelper position={[0, -0.5, 0]} args={[5000, 5000]} />
      <GizmoHelper alignment={"top-right"} margin={[60, 60]}>
        <GizmoViewcube labelColor={"black"} />
      </GizmoHelper>
      <mesh
        position={[0, -0.76, 0]}
        receiveShadow
        // onClick={() => setControlStatus({ ...controlStatus, current: null })}
      >
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
            <CustomBox
              position={item.position}
              rotation={item.rotation}
              key={index}
              controlStatus={controlStatus}
              setControlStatus={setControlStatus}
            />
          );
        if (item.type === "cylinder")
          return (
            <CustomCylinder
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
