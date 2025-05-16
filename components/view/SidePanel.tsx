"use client"

import useTextGeneratorController from "@/store/useTextGeneratorController";
import TextProperties from "./TextProperties";
import Environment from "./Environment";

export function SidePanel() {
  const { textObjects } = useTextGeneratorController();

  return (
    <aside className="w-80 border-l bg-gray-50 p-4 overflow-y-auto">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Properties</h2>

        {textObjects.map((textObject) => (
          textObject.isActive && (
            <TextProperties key={textObject.id + "panel"} {...textObject} />
          )
        ))}

        <Environment/>
      </div>
    </aside>
  );
} 