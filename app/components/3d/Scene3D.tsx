'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Scene3D({ children, className = '' }: Scene3DProps) {
  return (
    <div className={`w-full h-full absolute inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <color attach="background" args={['#050505']} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          {children}
          <Environment preset="city" />
          {/* OrbitControls can be enabled for debugging or specific interactions */}
          {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
