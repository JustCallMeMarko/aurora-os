import { useEffect, useState } from "react";
import backgroundLogin from "../assets/backgroundLogin.png";
import WifiBatt from "../assets/WifiBatt.png";
import { Outlet } from "react-router-dom";
import Taskbar from "../components/Taskbar";

function Layout() {
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
    <div className="flex flex-col items-center justify-between py-10 w-screen h-screen"
      style={{
        backgroundImage: `url(${backgroundLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="flex items-center absolute top-3 right-3 gap-2">
          <img src={WifiBatt} alt="Wifi and Battery" className=" h-3" />
          <span className="text-white font-bold text-xs">{timeFormat}</span>
        </div>
        <div className="w-screen h-screen">
            <Outlet />
        </div>
        <Taskbar/>
    </div>
  )
}

export default Layout