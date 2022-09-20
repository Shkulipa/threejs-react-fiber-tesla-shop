import * as THREE from 'three';
import { useThree, useLoader } from '@react-three/fiber';
import { useMemo } from 'react';

export const BackgroundAutoShop = props => {
  const texture = useLoader(
    THREE.TextureLoader,
    '/autoshop.jpg'
  );

  const { gl } = useThree();

  const formatted = useMemo(() => new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture), []); 

  return (
    <primitive attach='background' object={formatted.texture} />
  );
}