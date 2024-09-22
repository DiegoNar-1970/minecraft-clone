import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FpV from './components/FPV.jsx';
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <FpV/>
      <Physics>
          <Ground/>
          <Player/>
      </Physics>
    </Canvas>
  );
}

export default App;
