import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text3D, Center, Torus } from '@react-three/drei';
import * as THREE from 'three';

function MovingStarField() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      starsRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={300}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

function FloatingGeometry({ geometry: GeometryComponent, position, rotation, color = '#4299e1' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float
      speed={4}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <GeometryComponent ref={meshRef} rotation={rotation}>
        <meshStandardMaterial color={color} wireframe />
      </GeometryComponent>
    </Float>
  );
}

function FloatingText({ text, position = [0, 0, 0], color = '#4299e1' }) {
  const words = text.toUpperCase().split(' ');
  const wordSpacing = 0.6;
  const totalWidth = (words.length - 1) * wordSpacing;
  const startX = -totalWidth / 2;

  return (
    <Float
      speed={4}
      rotationIntensity={0.5}
      floatIntensity={2}
      position={position}
    >
      <group>
        {words.map((word, index) => (
          <Center key={index} position={[startX + index * wordSpacing, 0, 0]}>
            <Text3D
              font="./fonts/helvetiker_regular.typeface.json"
              size={0.5}
              height={0.2}
              curveSegments={12}
            >
              {word}
              <meshStandardMaterial color={color} />
            </Text3D>
          </Center>
        ))}
      </group>
    </Float>
  );
}

interface Background3DProps {
  section?: string;
}

function FallbackBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-blue-900/20 to-black">
      <div className="absolute inset-0 opacity-50">
        {/* Simulated star field with CSS */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
    </div>
  );
}

export default function Background3D({ section = 'home' }: Background3DProps) {
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check if WebGL is available
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGLAvailable(!!gl);
    } catch (e) {
      setWebGLAvailable(false);
    }
  }, []);

  if (!webGLAvailable) {
    return <FallbackBackground />;
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000');
        }}
        fallback={<FallbackBackground />}
      >
        <color attach="background" args={['#000']} />
        <MovingStarField />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {section === 'home' && (
          <>
            <FloatingText text="AI ARCHITECTURE" position={[0, 2, -5]} />
            <FloatingGeometry
              geometry={Torus}
              position={[0, -1, -5]}
              rotation={[0, Math.PI / 4, 0]}
              color="#4299e1"
            />
          </>
        )}
      </Canvas>
    </div>
  );
}