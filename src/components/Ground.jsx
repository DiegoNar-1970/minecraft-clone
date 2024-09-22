import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
export function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI/2, 0, 0], //x , y , z
    position: [0, -0.5, 0] //x , y , z
  }))

  //esto es para ponerle textura al suelo y que se repita infinitamente en x e y. ya que o si no por defecto la imagen se estira a lo ancho y no se ve bien.
  groundTexture.repeat.set(100, 100); //x , y

  return (
    <mesh ref={ref}>
        <planeGeometry attach="geometry"  args={[100, 100]} />
        <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  )
}
