import React, { useRef, useMemo } from "react";
import { TransformControls, useFBX, useGLTF } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = (props) => {
  const { position, rotation, type, uuid, controlStatus, setControlStatus } =
    props;
  const ref = useRef();

  const { scene } = useLoader(GLTFLoader, type);
  const copiedScene = useMemo(() => scene.clone(), [scene]);
  // console.log(scene);
  const onClickhandle = () => {
    setControlStatus({ ...controlStatus, current: ref?.current.uuid });
  };

  // console.log(scene);

  return (
    <>
      {ref.current && controlStatus.current === ref?.current.uuid && (
        <TransformControls object={ref.current} mode={controlStatus.mode} />
      )}
      <instancedMesh
        position={position}
        rotation={rotation}
        castShadow
        ref={ref}
        onClick={onClickhandle}
        name="box"
      >
        <primitive object={copiedScene} uuid={uuid} />
        {/* {ref.current && controlStatus.current === ref?.current.uuid && (
          <primitive
            object={copiedfbx}
            scale={[0.01, 0.01, 0.01]}
            uuid={uuid}
          />
        )} */}
      </instancedMesh>
    </>
  );
};

export default Model;
