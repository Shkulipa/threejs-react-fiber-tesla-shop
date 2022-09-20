import React from 'react'
import { Dragable } from './/Dragable'
import Model from './/model'
import { BoudingBox } from './boudingBox'
import { Suspense } from 'react'

export function Cars() {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoudingBox
          position={[4,2,0]}
          dims={[3,2,6]}
          offset={[0,-0.4,0.8]}
        >
          <Model 
            path='/tesla_model_3/scene.gltf'
            scale={new Array(3).fill(0.01)}
          />
        </BoudingBox>
      </Dragable>
      
      <Dragable transformGroup>
        <BoudingBox 
          visible
          position={[-4,2,0]}
          dims={[3,1.8,6]}
          offset={[0,-0.7,0.2]}
        >
          <Model 
            path='/tesla_model_s/scene.gltf'
            scale={new Array(3).fill(0.012)}
          />
        </BoudingBox>
      </Dragable>
      <group rotation={[0,Math.PI, 0]}>
        <Model
          path='mech_drone/scene.gltf'
          scale={new Array(3).fill(0.01)}
        />
      </group>
      
    </Suspense>
  )
}
