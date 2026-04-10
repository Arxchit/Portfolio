import { useGLTF } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF("/models/Target.glb");

  //Brightens the modal
  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.multiplyScalar(1.4); // slight brightness
    }
  });
}, [scene]);

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    <mesh {...props} ref={targetRef} rotation={[-0.5, Math.PI/4, 0.4]} scale={3.7}>
      {/* <ambientLight intensity={1.5} /> */}
      {/* <directionalLight position={[5, 5, 5]} intensity={2} /> */}
      {/* <directionalLight position={[-5, -5, 5]} intensity={1} /> */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
