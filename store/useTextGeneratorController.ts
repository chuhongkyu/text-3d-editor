import { create } from 'zustand';
import { TextWrapperProps } from '../types/TextGeneratorType';
import * as THREE from 'three';

interface TextGeneratorState {
  textObjects: TextWrapperProps[];
  addTextObject: (textObject: Omit<TextWrapperProps, 'id'>) => void;
  removeTextObject: (id: string) => void;
  updateTextObject: (id: string, updates: Partial<TextWrapperProps>) => void;
  toggleTextActive: (id: string) => void;
}

const initialTextObjects: TextWrapperProps = {
    id: "text-001",
    text: "3D TEXT",
    font: "/assets/fontJson/pretendard.json",
    size: 1,
    curveSegments: 24,
    bevelSegments: 10,
    bevelSize: 0.1,
    bevelThickness: 0.05,
    height: 0.5,
    letterSpacing: 0.1,
    color: "#D3BEB5",
    matType: "standard",
    textAlign: {
        top: false,
        left: false,
        center: true,
        right: false,
    },
    isActive: true,
}

const useTextGeneratorController = create<TextGeneratorState>((set) => ({
    textObjects: [initialTextObjects],
    
    addTextObject: (textObject) => 
        set((state) => {
            const lastId = state.textObjects[state.textObjects.length - 1]?.id || "text-000";
            const lastNumber = parseInt(lastId.split("-")[1]);
            const newId = `text-${String(lastNumber + 1).padStart(3, '0')}`;
            
            return {
                textObjects: [
                    ...state.textObjects.map(obj => ({ ...obj, isActive: false })),
                    { ...textObject, id: newId, isActive: true }
                ]
            };
        }),
        
    removeTextObject: (id) =>
        set((state) => ({
            textObjects: state.textObjects.filter((obj) => obj.id !== id)
        })),
        
    updateTextObject: (id, updates) =>
        set((state) => ({
            textObjects: state.textObjects.map((obj) =>
                obj.id === id ? { ...obj, ...updates } : obj
            )
        })),

    toggleTextActive: (id) =>
        set((state) => ({
            textObjects: state.textObjects.map((obj) =>
                obj.id === id 
                    ? { ...obj, isActive: true }
                    : { ...obj, isActive: false }
            )
        }))
}));

export default useTextGeneratorController;