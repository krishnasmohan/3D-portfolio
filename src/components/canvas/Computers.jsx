import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Loader from '../Loader';

const Computers = ({ isMobile}) => {
  const modal = useGLTF('./3d-model/scene.gltf')
  return (
    <mesh>
      <spotLight 
        position={[-20, 50, 10]}
        penumbra={1}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1}/>
      <primitive 
        object={modal.scene}
        scale={isMobile? 2.5:3}
        position={[0,-2, -1.5]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 550px');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 2.5, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
