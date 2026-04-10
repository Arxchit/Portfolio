import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom";
import CanvasLoader from "../Components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import {calculateSizes} from "../Constants/index.js"
import Target from "../Components/Target.jsx";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Ring.jsx";

const Hero = () => {  
  // const x = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  const isSmall = useMediaQuery({maxWidth : 440})
  const isMobile = useMediaQuery({maxWidth:768})
  const isTablet = useMediaQuery({minWidth : 768 , maxWidth : 1024})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="h-screen w-full flex-col relative overflow-hidden">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Archit <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.3, -Math.PI, 0]}
              // scale = {[x.positionX, x.positionY, x.positionZ]}
              // position = {[x.rotationX, x.rotationY, x.rotationZ]}
              // rotation = {[x.scale, x.scale, x.scale]}
            />

            <group>
              <Target scale={7} position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube  position={sizes.cubePosition}/>
              <Rings  position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
