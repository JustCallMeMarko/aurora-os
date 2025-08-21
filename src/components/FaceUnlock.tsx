import { motion } from "motion/react";
import FaceID from "../assets/Face.png";
function FaceUnlock({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  if (!open) return null;
  return (
    <div onClick={() => setOpen(false)} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <motion.img
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 600, damping: 20 }}
        src={FaceID} alt="Face Unlock" className="rounded-md size-46 drop-shadow-2xl"/>
    </div>
  );
}

export default FaceUnlock;
