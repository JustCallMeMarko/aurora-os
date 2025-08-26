import Pomodoro from "../components/Pomodoro";
import { useOutletContext } from "react-router-dom";
import Encrypt from "../components/Encrypt";
import { AnimatePresence } from "motion/react";
function Home() {
  const { lockIn, encrypt }: { lockIn: boolean; encrypt: boolean } =
    useOutletContext();
  return (
    <div className=" absolute w-screen flex justify-end">
      <div className="flex flex-col gap-2 p-8">
        <AnimatePresence>{encrypt && <Encrypt />}</AnimatePresence>
        <AnimatePresence>{lockIn && <Pomodoro />}</AnimatePresence>
      </div>
    </div>
  );
}

export default Home;
