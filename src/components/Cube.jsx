import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {

  const textRef = useRef();
   useFrame(                                                               // useFrame nos da toda la info del objeto que se renderiza, nos interesa el tiempo 
    (state) =>                                                             // trancurrido desde que se creo el objeto clock (elapsedTime)
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2) // Modificamos la posición en x en base a una función Seno del elapsedTime*2
  );

  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach="map">
            <PerspectiveCamera
                makeDefault
                position={[0,0,5]}
            />
            <color attach="background" args={["#dc9dcd"]} />
            <Text ref={textRef} fontSize={2} color="#555">
                hello
            </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube