import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="h-14 border-b flex items-center px-4 gap-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Menu className="w-5 h-5" />
      </button>
      <div className="flex-1">
        <h1 className="text-xl font-semibold">3D Text Editor</h1>
      </div>
      <div className="flex items-center gap-2">
        {/* Add more header items here */}
      </div>
    </header>
  );
} 