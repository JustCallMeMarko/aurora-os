import VRGoggle from "../assets/VRGoggle.png";
function VR() {
  return (
    <div className="bg-stone-700/50 border-1 border-white/30 py-20 rounded-xl p-4 w-[50%] h-[90%] mx-auto relative backdrop-blur-md gap-8 flex flex-col">
        <img src={VRGoggle} alt="VR" className="w-60 mx-auto"/>
        <h1 className="text-white text-5xl font-bold text-center">VRora</h1>
        <p className="text-white text-center">Where future meets reality</p>
        <p className="text-black font-bold text-sm py-4 px-2 rounded-md cursor-pointer text-center bg-white w-fit mx-auto">Connect VR Glasses</p>
    </div>
  )
}

export default VR;