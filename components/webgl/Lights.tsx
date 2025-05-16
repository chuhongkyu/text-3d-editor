import React from 'react'

function Lights() {
    return (
        <>
            <ambientLight intensity={1.5} />
            {/* <pointLight position={[5, 5, 5]} /> */}
            <directionalLight 
                intensity={1} 
                castShadow 
                position={[5, 5, 5]} 
                receiveShadow
                shadow-mapSize={[1024, 1024]}
                shadow-radius={10}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-left={-10}
                shadow-camera-right={10}
            />
        </>
    )
}

export default Lights