import { useState } from "react";
import Drum from "./components/Drum";
import kits from "./config/kits.json";


export default function App() {
  const [kit, setKit] = useState(kits["kit1"]);
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = kit.find((clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById(clip.id)?.focus();
    document.getElementById("display")!.textContent = clip.id;
  };
  return (
    <div className="min-h-screen bg-gray-400" id="drum-machine" onKeyDown={(e) => playAudio(e)}>
      <Drum kits={kits} kit={kit} setKit={setKit} />
    </div>
  )
}
