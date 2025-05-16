import { Header } from "@/components/view/Header";
import { SidePanel } from "@/components/view/SidePanel";
import { BottomBar } from "@/components/view/BottomBar";
import { Scene } from "@/components/webgl/Scene";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <Scene />
        </div>
        <SidePanel />
      </div>
      <BottomBar />
    </main>
  );
}
