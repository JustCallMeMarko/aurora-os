import VRGoggle from "../assets/VRGoggle.png";
function VR() {
  return (
    <div className="bg-stone-700/50 border-1 items-center justify-center w-[90%] border-white/30 py-10 md:py-20 rounded-xl md:w-[50%] h-[90%] mx-auto relative backdrop-blur-md gap-4 md:gap-8 flex flex-col">
        <img src={VRGoggle} alt="VR" className="w-30 md:w-60 h-[90px] md:h-[181px] mx-auto"/>
        <h1 className="text-white text-lg md:text-5xl font-bold text-center">VRora</h1>
        <p className="text-white text-center text-xs md:text-md">Where future meets reality</p>
        <p className="text-black font-bold text-xs md:text-sm py-2 md:py-4 px-2 rounded-md cursor-pointer text-center bg-white w-fit mx-auto">Connect VR Glasses</p>
    </div>
  )
}

export default VR;