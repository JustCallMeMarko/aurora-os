import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import Home from "./Home";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Chrome() {
  return (
    <>
      <Home />
      <div className="absolute left-1/2 top-1/2 flex justify-center items-center gap-4  flex-col transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden w-[90%] md:w-[46%] max-h-[540px] h-[80%] md:h-[90%] bg-black/40 border-1 p-4 border-white/30 rounded-xl mx-auto backdrop-blur-md ">
        <Link
          to="/home"
          className="absolute top-4 right-4 bg-stone-700/50 border-1 border-white/30 rounded-md p-1 hover:scale-110 transition-transform duration-200"
        >
          <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
        </Link>
        <div className="flex items-center">
          <ShieldExclamationIcon className="size-10 text-white" />
          <h1 className="text-white text-2xl font-medium italic">
            Virus Detected
          </h1>
        </div>
        <p className="text-white/70">
          AuroraOS has detected a potential virus inside Chrome.exe. Please take
          action immediately.
        </p>
        <button className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md">
          Uninstall and clean Chrome.exe
        </button>
      </div>
    </>
  );
}

export default Chrome;
