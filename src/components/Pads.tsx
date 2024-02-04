import Pad from "./Pad";

type Kit = {
  keyCode: number;
  keyTrigger: string;
  id: string;
  url: string;
}[];

export default function Pads({ kit }: { kit: Kit }) {
  return (
    <div className="grid grid-cols-3 gap-5 w-full text-white">
      {kit.map((pad) => (
        <Pad
          key={pad.id}
          keyTrigger={pad.keyTrigger}
          url={pad.url}
          id={pad.id}
        />
      ))}
    </div>
  );
}
