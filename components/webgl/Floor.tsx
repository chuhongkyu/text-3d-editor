import { Grid } from '@react-three/drei'
import React from 'react'
import { useEnvironmentController } from '@/store/useEnviornmentController'

function Floor() {
    const { floor } = useEnvironmentController()

    if (!floor.enabled) return null

    return (
        <>
            {floor.shadowEnabled && (
                <mesh 
                    position={[0, 0, -0.49]}
                    castShadow
                    receiveShadow
                >
                    <planeGeometry args={[floor.size, floor.size]} />
                    <shadowMaterial attach="material" color={"#747272"}  />
                </mesh>
            )}
            <mesh 
                position={[0, 0, -0.5]} 
            >
                <planeGeometry args={[floor.size, floor.size]} />
                {floor.matType === "standard" && (
                    <meshStandardMaterial color={floor.color} transparent opacity={floor.opacity} />
                )}
                {floor.matType === "basic" && (
                    <meshBasicMaterial color={floor.color} transparent opacity={floor.opacity} />
                )}
                {floor.matType === "phong" && (
                    <meshPhongMaterial color={floor.color} transparent opacity={floor.opacity} />
                )}
                {floor.matType === "toon" && (
                    <meshToonMaterial color={floor.color} transparent opacity={floor.opacity} />
                )}
            </mesh>
            {floor.gridEnabled && (
                <Grid 
                    args={[floor.size, floor.size]} 
                    position={[0, 0.01, 0]}
                    cellColor={0xffffff}
                    sectionColor={0xffffff}
                    cellSize={1}
                    cellThickness={1}
                    fadeDistance={20}
                    fadeStrength={1}
                />
            )}
        </>
    )
}

export default Floor