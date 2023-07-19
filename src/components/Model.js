import React, { useRef, useMemo, useState, useEffect } from "react";
import { TransformControls, useFBX, useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { current, produce } from "immer";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

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

  const [customPt, setCustomPt] = useState(position);

  const ref = useRef();
  const transformRef = useRef();
  const { scene } = useLoader(GLTFLoader, type);
  // const { scene } = useLoader(GLTFLoader, type, (loader) => {
  //   const draco = new DRACOLoader();
  //   draco.setDecoderPath("gltf/");
  //   draco.setDecoderConfig({ type: "js" });
  //   loader.setDRACOLoader(draco);
  // });
  // const { scene } = useGLTF(type);
  // const copiedScene = useMemo(() => scene.clone(), [scene]);
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

  useEffect(() => {
    if (transformRef.current != null)
      transformRef.current.addEventListener(
        "dragging-changed",
        function (event) {
          const temp = ref.current.position;
          setCustomPt([
            Math.round(temp.x),
            Math.round(temp.y),
            Math.round(temp.z),
          ]);
        }
      );
  }, [transformRef.current]);

  // useEffect(() => {
  //   console.log(ref.current);
  //   const boundingBox = new THREE.Box3();
  //   boundingBox.setFromObject(scene);
  //   console.log(boundingBox);
  // }, [ref.current]);

  return (
    <>
      {ref.current && controlStatus.current === ref?.current.uuid && (
        <TransformControls
          object={ref.current}
          mode={controlStatus.mode}
          ref={transformRef}
        />
      )}
      <group position={customPt} rotation={rotation} ref={ref}>
        <mesh
          castShadow
          onClick={(e) => {
            onClickhandle();
            e.stopPropagation();
          }}
          name={type}
          geometry={scene.children[0].geometry}
          material={modelMaterial}
        />
        {/* <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.05, 32, 16]} />
          <meshBasicMaterial color={"#ff0000"} />
        </mesh> */}
      </group>

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
