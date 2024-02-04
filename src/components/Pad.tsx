interface PadProps {
  id: string;
  keyTrigger: string;
  url: string;
}

export default function Pad({ keyTrigger, url, id }: PadProps) {
  const playSound = (keyTrigger: string) => {
    (document.getElementById(keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("display")!.textContent = id;
  };

  return (
    <button
      className="py-10 rounded-lg shadow-lg bg-black hover:bg-gray-700 drum-pad"
      id={id}
      onClick={() => playSound(keyTrigger)}
    >
      <audio className="clip" src={url} id={keyTrigger}></audio>
      {keyTrigger}
    </button>
  );
}
