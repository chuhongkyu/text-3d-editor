import { TextWrapperProps } from "@/types/TextGeneratorType";
import { Center, PivotControls, Text3D } from "@react-three/drei"
import { useMemo } from "react";
import { TextureLoader } from "three";

interface TextWrapperComponentProps extends TextWrapperProps {
    onClick: () => void;
}

function TextWrapper({
    id,
    text, 
    font = "/assets/fontJson/pretendard.json", 
    size,
    lineHeight,

    height,
    bevelOffset,
    bevelSegments,
    bevelSize,
    bevelThickness,
    curveSegments,
    letterSpacing,
    smooth,
    recieveShadow = true,
    castShadow = true,

    textAlign = {
        top: false,
        left: false,
        center: true,
        right: false,
    },
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [1, 1, 1],

    color, 
    matType, 
    matcapTexture,

    isActive,
    onClick,
}: TextWrapperComponentProps) {

    const currentMatcapTexture = useMemo(() => {
        const textureLoader = new TextureLoader();
        let url = "/assets/matcap/white.jpg";
        if(matcapTexture === "white") {
            url = "/assets/matcap/white.jpg";
        }

        const matcap = textureLoader.load(url);
        return matcap;
    }, [matcapTexture]);

    return (
        <PivotControls 
            disableScaling
            enabled={isActive}
            visible={isActive}
            depthTest={false}
            >
            <group 
                onClick={onClick}
                name={id}
                position={position}
                rotation={ rotation}
                scale={scale}
                
            >
                <Center {...textAlign}>
                    <Text3D
                        receiveShadow={recieveShadow}
                        castShadow={castShadow}
                        font={font}
                        size={size}
                        height={height}
                        lineHeight={lineHeight}
                        // smooth={smooth}
                        bevelOffset={bevelOffset}
                        bevelEnabled
                        bevelSegments={bevelSegments}
                        bevelSize={bevelSize}
                        bevelThickness={bevelThickness}
                        curveSegments={curveSegments}
                        letterSpacing={letterSpacing}
                    >
                        {text}  
                        {matType === "standard" && <meshStandardMaterial color={color}/>}
                        {matType === "basic" && <meshBasicMaterial color={color}/>}
                        {matType === "phong" && <meshPhongMaterial color={color}/>}
                        {matType === "toon" && <meshToonMaterial color={color}/>}
                        {matType === "matcap" && <meshMatcapMaterial matcap={currentMatcapTexture} />}
                    </Text3D>
                </Center>
            </group>
        </PivotControls>
    )
}

export default TextWrapper