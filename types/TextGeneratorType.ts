import * as THREE from "three";

interface TextWrapperProps {
    id: string;
    text: string;
    font: string;
    size?: number;
    lineHeight?: number;
    isActive: boolean;

    bevelOffset?: number;
    bevelSegments?: number;
    bevelSize?: number;
    bevelThickness?: number;
    curveSegments?: number;
    letterSpacing?: number;
    height?: number;
    smooth?: number;

    textAlign?: {
        top: boolean;
        left: boolean;
        center: boolean;
        right: boolean;
    };
    position?: THREE.Vector3Tuple;
    rotation?: THREE.Vector3Tuple;
    scale?: THREE.Vector3Tuple;
    recieveShadow?: boolean;
    castShadow?: boolean;

    color: string;
    matType: "standard" | "basic" | "phong" | "toon" | "matcap";
    matcapTexture?: string;
}


export type { TextWrapperProps };