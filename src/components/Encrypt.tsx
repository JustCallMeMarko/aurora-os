import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";

function Encrypt() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      exit={{ opacity: 0, scale: 0.8, y: 10, transition: { duration: 0.144 } }}
      className="bg-black/50 p-4 border-1 items-center flex flex-col w-[300px] gap-8 border-white/30 rounded-xl"
    >
      <ShieldCheckIcon className="size-14 text-white" />
      <h2 className="text-white font-bold">Encryption Mode</h2>
      <p className="text-white/60 text-xs">
        Your data is encrypted and secure.
      </p>
    </motion.div>
  );
}

export default Encrypt;
