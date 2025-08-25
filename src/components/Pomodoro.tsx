import { PlayIcon } from "@heroicons/react/24/outline";

function Pomodoro() {
  return (
    <div className="bg-black/50 p-4 border-1 items-center flex flex-col w-[300px] gap-8 border-white/30 rounded-xl">
      <h1 className="text-md font-semibold text-white">READY TO START</h1>
      <p className="text-white text-7xl font-bold">00:00</p>
      <div className="flex">
        <button
          className="bg-black border-1 border-white/30 text-white flex items-center justify-center text-xs px-4 cursor-pointer py-2 rounded"
        >
          
              <PlayIcon className="h-5 w-5 inline-block mr-2" />
              Start
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
