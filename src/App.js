import './App.css';
import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { Orbit } from './components/orbit'
import { Lights } from './components/lights'
import { Floor } from './components/floor'
import { BackgroundAutoShop } from './components/backgroundAutoShop'
import { ColorPicker } from './components/colorPicker'
import { Cars } from './components/Cars'
import { Suspense } from 'react'
import { CameraControls } from './components/CameraControls'
import { CameraButtons } from './components/CameraButtons'
import { Effects } from './components/effects';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        shadows
        style={{ background: 'black' }}
        camera={{ position: [3, 3, 3] }}

        /**
         * @info
         * for render(react-postproccesing)
         */
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          depth: false
        }}
      >
        <Suspense fallback={null}>
          <BackgroundAutoShop />
        </Suspense>

        <CameraControls />

        <Lights />

        <Orbit />

        <axesHelper args={[1]}/>
       
        <Physics>
          <Cars />
          <Floor position={[0, -0.5, 0]}/>
        </Physics>
        <Effects />
      </Canvas>
    </div>
  );
}

export default App;
