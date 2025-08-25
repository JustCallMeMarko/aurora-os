import { motion } from "motion/react";
import aurora from "../assets/auroraOS.png";
import Athena from "../assets/Athena.png";
import VR from "../assets/VR.png";
import Spotify from "../assets/Spotify.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { BoltIcon, LockClosedIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
function Taskbar({
  setToast,
  setMess,
}: {
  setToast: (value: boolean) => void;
  setMess: (value: string) => void;
}) {
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const handleOpen = (name: string) => {
        if (window.location.pathname === `/${name}`) {
            setSelected("");
            navigate("/home");
        } else {
            setSelected(name);
            navigate(`/${name}`);
        }
    }
  return (
    <div className="fixed backdrop-blur-sm z-50 bottom-4 bg-stone-700/50 border-1 w-fit gap-2 md:gap-16 border-white/30 rounded-full flex px-2 py-2">
        <ul className="flex gap-2 items-center">
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => handleOpen("aurora")}>
                <img src={aurora} alt="some image" className={`h-8 w-8  hover:opacity-100 ${selected === "aurora" ? "opacity-100" : "opacity-40"}`} />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => handleOpen("ai")}>
                <img src={Athena} alt="some image" className={`h-8 w-7  hover:opacity-100 ${selected === "ai" ? "opacity-100" : "opacity-40"} mt-1.5`} />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => handleOpen("vr")}>
                <img src={VR} alt="some image" className={`h-7 w-8  hover:opacity-100 ${selected === "vr" ? "opacity-100" : "opacity-40"} mt-1`} />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => handleOpen("chrome")}>
                <img src={google} alt="some image" className={`h-7 w-7  hover:opacity-100 ${selected === "chrome" ? "opacity-100" : "opacity-40"}`} />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => handleOpen("spotify")}>
                <img src={Spotify} alt="some image" className={`h-7 w-7  hover:opacity-100 ${selected === "spotify" ? "opacity-100" : "opacity-40"}`} />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => {setToast(true); setMess("Lock In Mode")}}>
                <BoltIcon className="size-6 text-white opacity-40 hover:opacity-100" />
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer"
            onClick={() => {setToast(true); setMess("Encryption Mode")}}>
                <LockClosedIcon className="size-6 text-white opacity-40 hover:opacity-100" />
            </motion.li>

        </ul>
        <div className="flex items-center justify-center bg-stone-700/50 backdrop-blur-md border-white/20 border-1 rounded-full px-0.5">
            <input type="text" name="search" id="search" className="pl-2 w-[100px] outline-0 text-white"/>
            <MagnifyingGlassCircleIcon className="size-8 text-white/40 hover:text-white transition-colors duration-200 cursor-pointer" />
        </div>
    </div>
  )
}

export default Taskbar