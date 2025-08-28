import { motion } from "motion/react";
import Home from "./Home";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  EllipsisHorizontalCircleIcon,
  SpeakerWaveIcon,
  UserCircleIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import aurora from "../assets/auroraOS.png";
function Info() {
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
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 border-1 border-white/30 rounded-xl w-[90%] md:w-[46%] h-[77%] flex flex-col mx-auto self-end mb-12 backdrop-blur-sm"
      >
        <Link
          to="/home"
          className="absolute top-4 right-4 bg-stone-700/50 border-1 border-white/30 rounded-md p-1 hover:scale-110 transition-transform duration-200"
        >
          <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
        </Link>
        <div className="flex w-[94%] h-[90%] my-auto">
          <div className="w-[50%] flex flex-col gap-3 items-center ">
            <img
              src="https://scontent.fmnl19-1.fna.fbcdn.net/v/t39.30808-1/531613973_24281861278142363_137333477327209063_n.jpg?stp=dst-jpg_s200x200_tt6&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=e99d92&amp;_nc_eui2=AeHVR4wZfGCSQp4RoilaunGVHfIqxh1YVaUd8irGHVhVpe9klf3gATFs32zPXz2aDiJhxi5p_i1r8oXnK12ZjZJy&amp;_nc_ohc=iDpHfwFM2IEQ7kNvwFHXPmT&amp;_nc_oc=AdkKVKF4qkaht0MJbShXGRnNoCagbsTyLSviq5s2JRZSJV2yHIjUZppogxa7db4ys28&amp;_nc_zt=24&amp;_nc_ht=scontent.fmnl19-1.fna&amp;_nc_gid=pXOkWqkBQe6sRJcSZMrSiA&amp;oh=00_AfVLr0dUGVfmr4GZgJZHSmYPig1dNoMVn6bbfueGmD_fYQ&amp;oe=68B609EC"
              className="rounded-full w-[60%]"
            />
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-2xl text-white">
                Mark Cantimbuhan
              </h1>
              <p className="text-white/60 text-xs">
                markcantimbuhan@auroraos.com
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col items-center bg-stone-700/30 hover:bg-stone-700/70 border-1 border-white/30 rounded-md p-4 cursor-pointer">
                <UserCircleIcon className="size-8 text-white" />
                <p className="text-white text-xs">Account</p>
              </div>
              <div className="flex flex-col items-center bg-stone-700/30 hover:bg-stone-700/70 border-1 border-white/30 rounded-md p-4 cursor-pointer">
                <WifiIcon className="size-8 text-white" />
                <p className="text-white text-xs">Wi-Fi</p>
              </div>
              <div className="flex flex-col items-center bg-stone-700/30 hover:bg-stone-700/70 border-1 border-white/30 rounded-md p-4 cursor-pointer">
                <SpeakerWaveIcon className="size-8 text-white" />
                <p className="text-white text-xs">Audio</p>
              </div>
              <div className="flex flex-col items-center bg-stone-700/30 hover:bg-stone-700/70 border-1 border-white/30 rounded-md p-4 cursor-pointer">
                <EllipsisHorizontalCircleIcon className="size-8 text-white" />
                <p className="text-white text-xs">More</p>
              </div>
            </div>
          </div>
          <div className="w-[46%] flex flex-col gap-3 my-auto">
            <div className="h-[20%] w-full bg-stone-700/30 border-1 border-white/30 rounded-md p-4">
              <span className="flex items-center">
                <img
                  src={aurora}
                  alt="Aurora OS Logo"
                  className="w-8 h-6 mr-2 "
                />
                <h1 className="text-md text-white font-semibold">Aurora OS</h1>
              </span>
              <p className="text-xs text-white/70 mt-2">Platform: PC</p>
            </div>
            <div className="h-fit w-full bg-stone-700/30 border-1 border-white/30 rounded-md p-4">
              <span className="flex items-center">
                <ComputerDesktopIcon className="h-6 w-6 text-white mr-2" />
                <h1 className="text-md text-white font-semibold">
                  Hardware Controller
                </h1>
              </span>
              <p className="text-xs text-white/70 mt-2 text-justify">
                AuroraOS supports plug and play with a hardware controller,
                ensuring smooth compatibility with peripherals without the
                hassle of downloading and updating the drivers manually.
              </p>
            </div>
            <div className="h-fit w-full bg-stone-700/30 border-1 border-white/30 rounded-md p-4">
              <span className="flex items-centerx">
                <CpuChipIcon className="h-6 w-6 text-white mr-2" />
                <h1 className="text-md text-white font-semibold">
                  Dynamic Memory Partitioning
                </h1>
              </span>
              <p className="text-xs text-white/70 mt-2 text-justify">
                For memory management, Aurora OS offers dynamic partitioning,
                which allows flexible allocation of memory depending on what
                tasks the user is running and prioritizing.
              </p>
            </div>
            <div className="h-fit w-full bg-stone-700/30 border-1 border-white/30 rounded-md p-4">
              <span className="flex items-centerx">
                <CpuChipIcon className="h-6 w-6 text-white mr-2" />
                <h1 className="text-md text-white font-semibold">
                  NFC Authentication
                </h1>
              </span>
              <p className="text-xs text-white/70 mt-2 text-justify">
                Allows contactless authentication.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Info;
