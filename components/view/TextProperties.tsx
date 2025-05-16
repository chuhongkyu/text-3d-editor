import { TextWrapperProps } from "@/types/TextGeneratorType";
import useTextGeneratorController from "@/store/useTextGeneratorController";

function TextProperties({
    id,
    text,
    font,
    size,
    color,
    bevelSegments,
    bevelSize,
    bevelThickness,
    curveSegments,
    letterSpacing,
    height,
    matType,
}: TextWrapperProps) {
    const { updateTextObject } = useTextGeneratorController();

    const handleChange = (property: keyof TextWrapperProps, value: any) => {
        updateTextObject(id, { [property]: value });
    };

    return (
        <div className="space-y-2 max-h-96 overflow-y-auto" id={id}>
            <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-medium mb-4 text-sm">Text Properties</h3>
                <div className="space-y-4">
                    {/* Size Control */}
                    <div>
                        <label className="text-sm text-gray-600 block mb-2 flex items-center">
                            <p className="mr-2">Size</p> 
                            <span className="flex items-center text-sm text-gray-500">
                                <input
                                    type="text"
                                    value={size}
                                    min={0.5}
                                    max={10}
                                    step={0.5}
                                    onChange={(e) => handleChange('size', Number(e.target.value))}
                                    className="border-b border-gray-500 mr-2 outline-none w-12 px-1 text-sm text-gray-500"
                                />
                                px
                            </span>
                        </label>
                        
                        
                    </div>

                    {/* Color Control */}
                    <div className="flex items-center gap-4">
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Color</label>
                            <div 
                                className="w-6 h-6 overflow-hidden rounded-full border border-gray-500"
                                style={{ backgroundColor: color }}>
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => handleChange('color', e.target.value)}
                                    className="w-full h-full cursor-pointer border-none outline-none opacity-0"
                                />
                            </div>
                            
                        </div>

                        {/* Material Type */}
                        <div className="w-full">
                            <label className="text-sm text-gray-600 block mb-2">Material Type</label>
                            <select
                                value={matType}
                                onChange={(e) => handleChange('matType', e.target.value)}
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
                    

                    {/* Bevel Controls */}
                    <div className="space-y-4 border-t pt-4">
                        <h4 className="font-medium text-sm">Bevel Settings</h4>
                        
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Bevel Size</label>
                            <input
                                type="range"
                                value={bevelSize}
                                min={0}
                                max={0.5}
                                step={0.01}
                                onChange={(e) => handleChange('bevelSize', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Bevel Thickness</label>
                            <input
                                type="range"
                                value={bevelThickness}
                                min={0}
                                max={0.5}
                                step={0.01}
                                onChange={(e) => handleChange('bevelThickness', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Bevel Segments</label>
                            <input
                                type="range"
                                value={bevelSegments}
                                min={1}
                                max={20}
                                step={1}
                                onChange={(e) => handleChange('bevelSegments', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        
                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Z-Height</label>
                            <input
                                type="range"
                                value={height}
                                min={0}
                                max={1}
                                step={0.1}
                                onChange={(e) => handleChange('height', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Letter Spacing</label>
                            <input
                                type="range"
                                value={letterSpacing}
                                min={-0.5}
                                max={0.5}
                                step={0.01}
                                onChange={(e) => handleChange('letterSpacing', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 block mb-2">Curve Segments</label>
                            <input
                                type="range"
                                value={curveSegments}
                                min={1}
                                max={50}
                                step={1}
                                onChange={(e) => handleChange('curveSegments', Number(e.target.value))}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextProperties;