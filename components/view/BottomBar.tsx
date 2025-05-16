"use client"

import { useState } from 'react';
import useTextGeneratorController from '@/store/useTextGeneratorController';

export function BottomBar() {
  const [inputText, setInputText] = useState('');
  const addTextObject = useTextGeneratorController((state) => state.addTextObject);

  const handleCreate = () => {
    if (inputText.trim()) {
      addTextObject({
        text: inputText,
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
      });
      setInputText('');
    }
  };

  return (
    <div className="h-16 border-t bg-white px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleCreate}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Create
        </button>
        {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save
        </button>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Export
        </button> */}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Status: Ready</span>
      </div>
    </div>
  );
} 