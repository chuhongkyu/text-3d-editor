'use client';

import { Canvas } from '@react-three/fiber';
import { CameraControls, GizmoHelper, GizmoViewport, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Lights from './Lights';
import TextWrapper from './TextWrapper';
import TextGenerator from './TextGenerator';
import { Suspense } from 'react';
import Floor from './Floor';
import Background from './Background';
import { Vector3 } from 'three';

export function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Lights/>
        <PerspectiveCamera makeDefault fov={50} position={[0, 0, 10]}/>
        <OrbitControls makeDefault />
        <Suspense fallback={null}>
          <TextGenerator/>
        </Suspense>
        <Floor/>
        <Background/>
        <GizmoHelper
          alignment="bottom-right" 
          margin={[80, 80]}
          renderPriority={1}
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
        </GizmoHelper>
      </Canvas>
    </div>
  );
} 