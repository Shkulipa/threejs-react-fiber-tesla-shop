import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

export const BackgroundSky = props => {
  const texture = useLoader(
    THREE.TextureLoader,
    '/sky.jpg'
  );

  return (
    <primitive attach='background' object={texture} />
  );
}