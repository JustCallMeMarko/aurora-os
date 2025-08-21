import { motion } from "motion/react";
import FaceID from "../assets/Face.png";
function FaceUnlock({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  if (!open) return null;
  return (
    <div onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.3 }}
        src={FaceID} alt="Face Unlock" className="w-100"/>
    </div>
  );
}

export default FaceUnlock;
