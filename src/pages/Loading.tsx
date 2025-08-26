import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      onClick={() => navigate("/login")}
    >
      <video
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="block object-cover w-full md:w-[40%] h-[40%]"
        onClick={() => navigate("/login")}
      />
    </div>
  );
}

export default Loading;
