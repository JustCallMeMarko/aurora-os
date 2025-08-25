import { motion } from "motion/react";
import VRGoggle from "../assets/VRGoggle.png";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Home from "./Home";
function VR() {
  return (
    <>
      <Home />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-700/50 border-1 items-center justify-center w-[90%] border-white/30 py-10 md:py-20 rounded-xl md:w-[46%] h-[74%] mx-auto backdrop-blur-md gap-4 md:gap-8 flex flex-col">
        <Link
          to="/home"
          className="absolute top-4 right-4 bg-stone-700/50 border-1 border-white/30 rounded-md p-1 hover:scale-110 transition-transform duration-200"
        >
          <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
        </Link>
        <img
          src={VRGoggle}
          alt="VR"
          className="w-30 md:w-60 h-[90px] md:h-[181px] mx-auto"
        />
        <h1 className="text-white text-lg md:text-5xl font-bold text-center">
          VRora
        </h1>
        <p className="text-white text-center text-md">
          Where future meets reality
        </p>
        <motion.p
          initial={{ y: 0, scale: 1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="text-black font-bold text-xs md:text-sm py-2 md:py-4 px-2 rounded-md cursor-pointer text-center hover:bg-white/70 bg-white w-fit mx-auto"
        >
          Connect VR Glasses
        </motion.p>
      </div>
    </>
  );
}

export default VR;
