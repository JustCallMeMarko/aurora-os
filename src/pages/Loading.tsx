import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../assets/loading.mp4";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <video src={loading} autoPlay loop muted playsInline className="block object-cover w-full md:w-[40%] h-[40%]" />
    </div>
  );
}

export default Loading;