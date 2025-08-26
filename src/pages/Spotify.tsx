import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Home from "./Home";
import { motion } from "motion/react";

function Spotify() {
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
        className="absolute inset-0 flex justify-center items-center w-full h-full"
      >
        <div className="relative w-[60%] h-[550px] sm:h-[250px] md:h-[352px] flex justify-center items-center">
          <Link
            to="/home"
            className="absolute top-2 right-2 bg-stone-700/50 border-1 border-white/30 rounded-md p-1 hover:scale-110 transition-transform duration-200"
          >
            <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
          </Link>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/2262bWmqomIaJXwCRHr13j?utm_source=generator"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="size-full"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}

export default Spotify;
