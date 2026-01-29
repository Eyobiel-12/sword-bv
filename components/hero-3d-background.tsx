"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 200

  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5

      scales[i] = Math.random() * 0.5 + 0.1
    }

    return { positions, scales }
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.getElapsedTime()
    const dummy = new THREE.Object3D()

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3]
      const y = positions[i * 3 + 1] + Math.sin(time * 0.3 + i) * 0.5
      const z = positions[i * 3 + 2]

      dummy.position.set(x, y, z)
      dummy.scale.setScalar(scales[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#1e3a5f" transparent opacity={0.35} />
    </instancedMesh>
  )
}

function FloatingLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!linesRef.current) return
    linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    linesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
  })

  const lines = useMemo(() => {
    const lineArray = []
    for (let i = 0; i < 15; i++) {
      const points = []
      const startX = (Math.random() - 0.5) * 20
      const startY = (Math.random() - 0.5) * 20
      const startZ = -5 - Math.random() * 10

      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(startX + j * 2, startY + Math.sin(j * 0.5) * 2, startZ))
      }
      lineArray.push(points)
    }
    return lineArray
  }, [])

  return (
    <group ref={linesRef}>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#1e3a5f" transparent opacity={0.25} />
        </line>
      ))}
    </group>
  )
}

function AnimatedGrid() {
  const gridRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!gridRef.current) return
    const material = gridRef.current.material as THREE.ShaderMaterial
    if (material.uniforms) {
      material.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec2 vUv;
        
        void main() {
          vec2 grid = abs(fract(vUv * 20.0 - 0.5) - 0.5) / fwidth(vUv * 20.0);
          float line = min(grid.x, grid.y);
          float gridPattern = 1.0 - min(line, 1.0);
          
          float wave = sin(vUv.x * 10.0 + uTime * 0.5) * 0.5 + 0.5;
          float wave2 = sin(vUv.y * 8.0 + uTime * 0.3) * 0.5 + 0.5;
          
          float alpha = gridPattern * 0.15 * wave * wave2;
          
          gl_FragColor = vec4(0.12, 0.18, 0.28, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -8, -10]}>
      <planeGeometry args={[60, 60, 1, 1]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
}

function GlowingSpheres() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.getElapsedTime() * 0.5 + i * 2) * 2
    })
  })

  return (
    <group ref={groupRef}>
      <mesh position={[-8, 0, -8]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#1a2744" transparent opacity={0.6} />
      </mesh>
      <mesh position={[10, 2, -12]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#1e3a5f" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, -3, -15]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="#152238" transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#f0f4f8"]} />
        <fog attach="fog" args={["#e8eef4", 10, 40]} />
        <ambientLight intensity={0.5} />
        <FloatingParticles />
        <FloatingLines />
        <AnimatedGrid />
        <GlowingSpheres />
      </Canvas>
    </div>
  )
}
