import React, { useRef, useMemo, useState, useEffect } from "react";
import { TransformControls, useFBX, useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { current, produce } from "immer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
  const {
    position,
    rotation,
    type,
    uuid,
    material,
    controlStatus,
    setControlStatus,
    setFlag,
  } = props;
  const ref = useRef();
  const { scene } = useLoader(GLTFLoader, type);
  const [modelMaterial, setModelMaterial] = useState(material);
  // const temp = copiedScene;
  const onClickhandle = () => {
    setControlStatus({ ...controlStatus, current: ref.current.uuid });
    setFlag(false);
  };
  // const material = scene.children[0].material;

  useEffect(() => {
    if (material == null) setModelMaterial(scene.children[0].material);
  }, [material]);

  return (
    <>
      {ref.current && controlStatus.current === ref?.current.uuid && (
        <TransformControls object={ref.current} mode={controlStatus.mode} />
      )}
      {/* <primitive object={copiedScene} uuid={uuid} /> */}
      <mesh
        position={position}
        rotation={rotation}
        castShadow
        ref={ref}
        onClick={(e) => {
          onClickhandle();
          e.stopPropagation();
        }}
        name={type}
        geometry={scene.children[0].geometry}
        material={modelMaterial}
      />
      {/* {ref.current && controlStatus.current === ref?.current.uuid && (
          <primitive
            object={copiedfbx}
            scale={[0.01, 0.01, 0.01]}
            uuid={uuid}
          />
        )} */}
    </>
  );
};

export default Model;
