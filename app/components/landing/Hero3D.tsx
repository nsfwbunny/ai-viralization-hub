'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial } from '@react-three/drei';
import Scene3D from '../3d/Scene3D';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Link from 'next/link';

function ViralObject() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={meshRef}
                scale={hovered ? 2.2 : 2}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color={hovered ? "#a855f7" : "#6366f1"}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.5}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

export default function Hero3D() {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white">
            <Scene3D>
                <ViralObject />
            </Scene3D>

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="pointer-events-auto p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6">
                        AI Viralization Hub
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Crie, Viralize e Domine as Redes Sociais com o Poder da Inteligência Artificial.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/auth/register" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                            Começar Agora
                        </Link>
                        <Link href="/dashboard" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-md border border-white/10">
                            Ver Templates
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
