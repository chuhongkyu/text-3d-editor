import { useEnvironmentController } from "@/store/useEnviornmentController"

function Environment() {
    const { floor, background, setFloor, setBackground } = useEnvironmentController()

    const handleFloorChange = (property: keyof typeof floor, value: any) => {
        setFloor({ [property]: value })
    }

    const handleBackgroundChange = (property: keyof typeof background, value: any) => {
        setBackground({ [property]: value })
    }

    return (
        <div className="space-y-2 max-h-96 overflow-y-auto">
            <div className="p-4 bg-white rounded-lg shadow-sm">
                {/* <h3 className="font-medium mb-4 text-sm">Environment Settings</h3> */}
                
                {/* Floor Settings */}
                <div className="space-y-4 border-b pb-4">
                    <h4 className="font-medium text-sm">Floor Settings</h4>
                    
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-600">Enabled</label>
                        <input
                            type="checkbox"
                            checked={floor.enabled}
                            onChange={(e) => handleFloorChange('enabled', e.target.checked)}
                            className="w-4 h-4"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-2">Size</label>
                        <input
                            type="range"
                            value={floor.size}
                            min={10}
                            max={100}
                            step={1}
                            onChange={(e) => handleFloorChange('size', Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Color</label>
                            <div 
                                className="w-6 h-6 overflow-hidden rounded-full border border-gray-500"
                                style={{ backgroundColor: floor.color }}>
                                <input
                                    type="color"
                                    value={floor.color}
                                    onChange={(e) => handleFloorChange('color', e.target.value)}
                                    className="w-full h-full cursor-pointer border-none outline-none opacity-0"
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="text-sm text-gray-600 block mb-2">Material Type</label>
                            <select
                                value={floor.matType}
                                onChange={(e) => handleFloorChange('matType', e.target.value)}
                                className="text-sm w-full h-6 border border-gray-500 rounded px-1"
                            >
                                <option value="standard">Standard</option>
                                <option value="basic">Basic</option>
                                <option value="phong">Phong</option>
                                <option value="toon">Toon</option>
                                <option value="matcap">Matcap</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-2">Opacity</label>
                        <input
                            type="range"
                            value={floor.opacity}
                            min={0}
                            max={1}
                            step={0.1}
                            onChange={(e) => handleFloorChange('opacity', Number(e.target.value))}
                            className="w-full"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-600">Shadow</label>
                        <input
                            type="checkbox"
                            checked={floor.shadowEnabled}
                            onChange={(e) => handleFloorChange('shadowEnabled', e.target.checked)}
                            className="w-4 h-4"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-600">Grid</label>
                        <input
                            type="checkbox"
                            checked={floor.gridEnabled}
                            onChange={(e) => handleFloorChange('gridEnabled', e.target.checked)}
                            className="w-4 h-4"
                        />
                    </div>
                </div>

                {/* Background Settings */}
                <div className="space-y-4 pt-4">
                    <h4 className="font-medium text-sm">Background Settings</h4>
                    
                    <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-600">Enabled</label>
                        <input
                            type="checkbox"
                            checked={background.enabled}
                            onChange={(e) => handleBackgroundChange('enabled', e.target.checked)}
                            className="w-4 h-4"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600 block mb-2">Color</label>
                        <div 
                            className="w-6 h-6 overflow-hidden rounded-full border border-gray-500"
                            style={{ backgroundColor: background.color }}>
                            <input
                                type="color"
                                value={background.color}
                                onChange={(e) => handleBackgroundChange('color', e.target.value)}
                                className="w-full h-full cursor-pointer border-none outline-none opacity-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Environment