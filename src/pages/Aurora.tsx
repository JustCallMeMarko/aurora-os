import { PowerIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Home from "./Home";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Setting() {
  const [search, setSearch] = useState("");
  return (
    <>
    <Home />
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 border-1 border-white/30 rounded-xl w-[46%] h-[77%] flex flex-col mx-auto self-end mb-12">
      <div className="w-[90%] mx-auto mt-5 flex items-center gap-2 bg-black/30 rounded-full px-0.5 py-0.5 border-1 border-white/30">
        <MagnifyingGlassCircleIcon className="size-8 text-white/50 hover:text-white transition-colors cursor-pointer" />
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Search endlessly..."
          className="placeholder:text-white/30 outline-0 text-white"
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                setSearch("");
          }}}
        />
      </div>
    <div className="w-full flex justify-between items-center bg-black/30 rounded-b-xl px-4 py-2 border-t-1 border-white/10 mt-auto">
        <div className="flex items-center hover:bg-white/10 px-2 py-1 rounded-sm cursor-pointer">
          <UserCircleIcon className="size-9 text-white" />
          <p className="text-white text-xs ml-2">Mark Cantimbuhan</p>
        </div>
        <div className="hover:bg-white/10 rounded-sm cursor-pointer p-2">
          <PowerIcon className="size-5 text-white" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Setting;
