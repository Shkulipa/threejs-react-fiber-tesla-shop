import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { extend, useThree } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
extend({ DragControls })

export function Dragable(props) {

  const groupRef = useRef();
  const controlsRef = useRef();
  const [children, setChildren] = useState([]);
  const { camera, gl, scene } = useThree();

  useEffect(() => {
    setChildren(groupRef.current.children)
  }, [])

  useEffect(() => {
    controlsRef.current.addEventListener(
      'hoveron',
      () => scene.orbitControls.enabled = false
    )
    controlsRef.current.addEventListener(
      'hoveroff',
      () => scene.orbitControls.enabled = true
    )
    controlsRef.current.addEventListener(
      'dragstart',
      e => {
        e.object.api?.mass.set(0)
        console.log(e.object)
      }
    )
    controlsRef.current.addEventListener(
      'dragend',
      e => e.object.api?.mass.set(1)
    )
    controlsRef.current.addEventListener(
      'drag',
      e => {
        e.object.api?.position.copy(e.object.position)
        e.object.api?.velocity.set(0, 0, 0)
      }
    )
  }, [children, scene.orbitControls])

  return (
    <group ref={groupRef} {...props}>
      <dragControls
        transformGroup={props.transformGroup}
        ref={controlsRef}
        args={[children, camera, gl.domElement]} 
      />
      {props.children}
    </group>
  )
}
