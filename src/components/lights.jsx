import React from 'react'
import { Bolb } from './Bolb'

export function Lights() {
  return (
    <>
      <directionalLight
        shadow-mapSize-height={2**10}
        shadow-mapSize-width={2**10}
        shadow-radius={10}
        position={[6,3,0]}
        intensity={2}
        castShadow
      />

      <ambientLight intensity={0.2}/>

      <Bolb position={[-6,3,0]}/>
      <Bolb position={[0,3,0]}/>
      <Bolb position={[6,3,0]}/>
    </>
  )
}
