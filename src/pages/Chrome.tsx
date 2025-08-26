import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import Home from "./Home";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";

function Chrome() {
  return (
    <>
      <Home />
      <motion.div
        initial={{ y: 20, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="absolute left-1/2 top-1/2 flex justify-center items-center gap-4  flex-col transform -translate-x-1/2 -translate-y-1/2 overflow-y-hidden w-[90%] md:w-[46%] max-h-[540px] h-[80%] md:h-[90%] bg-black/40 border-1 p-4 border-white/30 rounded-xl mx-auto backdrop-blur-md "
      >
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
        <p className="text-white/70 w-[50%] text-center">
          AuroraOS has detected a potential virus inside Chrome.exe. Please take
          action immediately.
        </p>
        <motion.button
          initial={{ y: 0, scale: 1 }}
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="ml-4 px-4 py-2 cursor-pointer bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md"
        >
          Uninstall and clean Chrome.exe
        </motion.button>
      </motion.div>
    </>
  );
}

export default Chrome;
