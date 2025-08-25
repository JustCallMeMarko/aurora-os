import Pomodoro from "../components/pomodoro";
import { useOutletContext } from "react-router-dom";
import Encrypt from "../components/Encrypt";
function Home() {
  const { lockIn, encrypt }: { lockIn: boolean; encrypt: boolean } = useOutletContext();
  return (
    <div className=" absolute w-screen flex justify-end">
      <div className="flex flex-col gap-2 p-8">
        { encrypt && <Encrypt />}
        { lockIn && <Pomodoro />}
      </div>
    </div>
  );
}

export default Home;
