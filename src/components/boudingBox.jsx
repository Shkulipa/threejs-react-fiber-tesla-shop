import React from 'react'
import { useBox } from '@react-three/cannon'

export function BoudingBox({
  position = [0,0,0],
  offset = [0,0,0],
  dims = [1,1,1],
  visible = false,
  children
}) {
  const [ref, api] = useBox(() => ({ mass: 1, args: dims, position }))

  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe color='blue'/>
      </mesh>
      <group position={offset}>
        {children}
      </group>
    </group>
  )
}
