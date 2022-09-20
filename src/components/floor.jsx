import { useBox } from '@react-three/cannon'

export const Floor = (props) => {
  const [ref] = useBox(() => ({ args:[20,1,10],  ...props }))

  return (
    <mesh {...props} ref={ref} receiveShadow>
      <boxBufferGeometry args={[200,1,100]}/>
      <meshPhysicalMaterial transparent opacity={0.2} />
    </mesh>
  )
}
