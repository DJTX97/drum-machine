import CurrentDisplay from "./CurrentDisplay";
import Pads from "./Pads";

type Kit = {
  keyCode: number;
  keyTrigger: string;
  id: string;
  url: string;
}[];

interface DrumProps {
  kits: { kit1: Kit; kit2: Kit };
  kit: Kit;
  setKit: React.Dispatch<React.SetStateAction<Kit>>;
}

export default function Drum({ kits, kit, setKit }: DrumProps) {
  return (
    <div className="flex justify-center items-center gap-20 p-10">
      <div className="flex flex-col gap-10 w-full sm:w-1/2 lg:w-1/3 justify-center items-center">
        <Pads kit={kit} />
        <CurrentDisplay />
      </div>
      <select
        className="block h-1/2 rounded-lg bg-white p-2"
        onChange={(e) => setKit(kits[e.target.value as keyof typeof kits])}
      >
        <option value="kit1">Drums</option>
        <option value="kit2">Chords</option>
      </select>
    </div>
  );
}
