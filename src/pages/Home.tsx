import { useEffect, useState } from "react";
import auroraOs from "../assets/auroraOS.png";
import backgroundLogin from "../assets/backgroundLogin.png";

function Home() {
  const [timeFormat, setTimeFormat] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      const [hours, minutes] = newTime.split(":");
      const hourNum = Number(hours);
      const formattedTime = `${
        hourNum % 12 === 0 ? 12 : hourNum % 12
      }:${minutes}`;
      setTimeFormat(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-between py-10 w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-[100px] font-time text-white/80 font-extrabold">
        {timeFormat ? timeFormat : "1:11"}
      </p>
      <img
        src={auroraOs}
        alt="Placeholder"
        className="opacity-30 w-50 h-45 -ml-6"
      />
      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="bg-white/70 rounded-full px-3 py-1 w-[200px] text-white/80 placeholder:text-black/30"
        />
        <div className="flex justify-between w-[200px]">
          <button className="font-bold text-white/70 text-sm">Reset</button>
          <button className="font-bold text-white/70 text-sm">More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
