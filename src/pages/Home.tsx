import { FolderIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Home() {
  const now = new Date();
  const Day = now.toLocaleString("default", { weekday: "long" }).toUpperCase();
  const date = now.getDate();
  return (
    <div className="w-screen flex flex-col items-end p-8">
      <div className="grid grid-cols-2 gap-2 w-[300px]">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.15,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="cursor-pointer flex flex-col rounded-xl border-1 border-white/30 bg-black/50"
        >
          <div className="flex gap-2 bg-gray-700/80 px-4 pt-4 pb-2 rounded-t-xl">
            <FolderIcon className="h-6 w-6 text-white" />
            <p className="text-white font-semibold text-lg">Notes</p>
          </div>
          <div className="px-4 py-2">
            <p className="text-gray-400 text-sm font-bold">Goals...</p>
            <p className="text-gray-400 text-sm ">1. get 1m subscribers</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.15,
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
          className="bg-black/50 border-1 cursor-pointer border-white/30 w-fit flex flex-col justify-center gap-4 p-4 rounded-xl"
        >
          <div>
            <h1 className="text-white text-xs font-semibold">{Day}</h1>
            <p className="text-white font-semibold text-2xl">{date}</p>
          </div>
          <p className="text-gray-400 text-sm font-bold">No events today</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          duration: 0.15,
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        className="w-[300px] my-2 rounded-xl bg-black/50 border-1 flex gap-8 items-center border-white/30 p-4"
      >
        <div className="flex flex-col gap-8">
          <div className="bg-stone-500/50 border-1 size-8.5 cursor-pointer flex justify-center items-center border-white/30 rounded-full">
            <ListBulletIcon className="size-6 text-white" />
          </div>
          <div>
            <p className="text-white text-2xl font-bold">0</p>
            <p className="text-white text-sm font-semibold">TASKS</p>
          </div>
        </div>
        <p className="text-white text-sm font-medium">No reminders</p>
      </motion.div>
    </div>
  );
}

export default Home;
