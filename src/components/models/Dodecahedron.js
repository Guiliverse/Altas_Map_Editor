import React, { useRef } from "react";
import { TransformControls } from "@react-three/drei";

const Dodecahedron = (props) => {
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
        name="dedecahedron"
      >
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshPhysicalMaterial
          color={"#049ef4"}
          roughness={0.5}
          metalness={0.5}
          emissive={"#000000"}
        />
        {ref.current && controlStatus.current === ref?.current.uuid && (
          <mesh>
            <dodecahedronGeometry args={[0.5, 0]} />
            <meshPhysicalMaterial color={"yellow"} wireframe={true} />
          </mesh>
        )}
      </mesh>
    </>
  );
};

export default Dodecahedron;
