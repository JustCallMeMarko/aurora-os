import { motion } from "motion/react";
import aurora from "../assets/auroraOS.png";
import Athena from "../assets/Athena.png";
import VR from "../assets/VR.png";
import Spotify from "../assets/Spotify.png";
import { Link } from "react-router-dom";
function Taskbar() {
  return (
    <div className="fixed bottom-4 bg-stone-700/50 border-1 border-white/30 rounded-full flex px-2 py-2">
        <ul className="flex gap-2 items-center">
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer">
                <Link to="/home"><img src={aurora} alt="some image" className="h-8 opacity-40" /></Link>
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer">
                <Link to="/ai"><img src={Athena} alt="some image" className="h-8 opacity-40 mt-1.5" /></Link>
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer">
                <Link to="/ai"><img src={VR} alt="some image" className="h-7 opacity-40 mt-1" /></Link>
            </motion.li>
            <motion.li
            initial={{ y: 0 }}
            whileHover={{ y: -4 }}
            transition={{type: "spring", stiffness: 400, damping: 15, duration: 0.2}}
            className="cursor-pointer">
                <Link to="/spotify"><img src={Spotify} alt="some image" className="h-7 opacity-40" /></Link>
            </motion.li>
        </ul>
        <div>
            <input type="text" name="search" id="search" />
            <button>Stop</button>
        </div>
    </div>
  )
}

export default Taskbar