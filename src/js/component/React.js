import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/react.gltf');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.935, 18.102]} rotation={[0, 0, -Math.PI / 2]} scale={[39.166, 39.166, 52.734]} />
      </group>
    </group>
  );
}

useGLTF.preload('/react.gltf');
