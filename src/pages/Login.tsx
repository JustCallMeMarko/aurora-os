import { useEffect, useState } from "react";
import auroraOs from "../assets/auroraOS.png";
import backgroundLogin from "../assets/backgroundLogin.png";
import FaceUnlock from "../components/FaceUnlock";

function Login() {
  const [timeFormat, setTimeFormat] = useState("");
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

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
      <p className="text-[100px] font-time text-white/80 h-[150px] font-extrabold">
        {timeFormat}
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
          value={password}
          placeholder="Enter password"
          className="bg-white/70 rounded-full px-3 py-1 w-[200px] text-white/80 placeholder:text-black/30"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.currentTarget.value === "marksakalam") {
                window.location.href = "/home";
              } else {
                setPassword("");
              }
            }
          }}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <div className="flex justify-center w-[200px]">
          <button
            className="font-bold text-white/70 cursor-pointer text-sm"
            onClick={() => setOpen(true)}
          >
            More
          </button>
        </div>
      </div>
      <FaceUnlock open={open} setOpen={setOpen} />
    </div>
  );
}

export default Login;
