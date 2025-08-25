import { ShieldCheckIcon } from "@heroicons/react/24/solid"

function Encrypt() {
  return (
    <div className="bg-black/50 p-4 border-1 items-center flex flex-col w-[300px] gap-8 border-white/30 rounded-xl">
        <ShieldCheckIcon className="size-14 text-white" />
        <h2 className="text-white font-bold">Encryption Mode</h2>
        <p className="text-white/60 text-xs">Your data is encrypted and secure.</p>
    </div>
  )
}

export default Encrypt