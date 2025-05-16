import { create } from 'zustand'

interface BackgroundSettings {
  enabled: boolean
  color: string
}

interface FloorSettings {
  enabled: boolean
  size: number
  color: string
  matType: 'standard' | 'basic' | 'phong' | 'toon' | 'matcap'
  opacity: number
  shadowEnabled: boolean
  gridEnabled: boolean
}

interface EnvironmentState {
  floor: FloorSettings
  setFloor: (settings: Partial<FloorSettings>) => void
  background: BackgroundSettings
  setBackground: (settings: Partial<BackgroundSettings>) => void
}

const initialFloorSettings: FloorSettings = {
  enabled: false,
  size: 50,
  color: '#ffffff',
  matType: 'standard',
  opacity: 0,
  shadowEnabled: false,
  gridEnabled: false,
}

const initialBackgroundSettings: BackgroundSettings = {
  enabled: true,
  color: '#c91d19',
}

export const useEnvironmentController = create<EnvironmentState>((set) => ({
  // Initial state
  background: initialBackgroundSettings,
  floor: initialFloorSettings,

  // Actions
  setFloor: (settings) => set((state) => ({
    floor: { ...state.floor, ...settings }
  })),
  setBackground: (settings) => set((state) => ({
    background: { ...state.background, ...settings }
  }))
}))
