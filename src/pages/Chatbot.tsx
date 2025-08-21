import AthenaColored from "../assets/AthenaColored.png";
import { useState } from "react";
interface myMsg {
  user: "bot" | "user";
  message: string;
}
{
  /* <img src={AthenaColored} alt="Athena Colored" /> */
}
function Chatbot() {
  const [messages, setMessages] = useState<myMsg[]>([
    {
      user: "bot",
      message:
        "Hello! I am Athena, your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { user: "user", message: input }]);
    setInput("");
  };

  return (
    <div className="overflow-y-hidden w-[50%] max-h-[590px] h-[90%] bg-black/40 border-1 p-4 relative border-white/30 rounded-xl mx-auto backdrop-blur-md ">
      <div className="flex items-center gap-4">
        <img src={AthenaColored} alt="Athena Colored" className="w-[54px] h-[74px]"/>
        <p className="text-white font-bold italic text-3xl">Athena AI</p>
      </div>
      <div className="h-[78%] overflow-y-auto flex flex-col w-full">
        {messages.map((msg: myMsg, index: number) =>
          msg.user === "bot" ? (
            <div
              key={index}
              className="my-2 p-2 rounded-md bg-stone-500/50 max-w-[60%] text-white self-start"
            >
              <span>{msg.message}</span>
            </div>
          ) : (
            <div
              key={index}
              className="my-2 p-2 rounded-md bg-green-500/50 max-w-[60%] text-white self-end text-right"
            >
              <span>{msg.message}</span>
            </div>
          )
        )}
      </div>
        <div className="absolute bottom-0 pb-4 left-1/2 transform -translate-x-1/2 flex w-full justify-center">
          <form
            className="w-[91%] flex gap-2 items-center justify-center"
            onSubmit={handleSendMessage}
          >
            <button
              type="button"
              className="w-[5%] size-5 text-2xl border-white border-2 cursor-pointer text-white rounded-full flex justify-center items-center p-5"
            >
              +
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="bg-stone-700/50 border-1 text-white outline-0 border-white/30 rounded-full w-[86%] placeholder:text-white/30 px-6 py-2"
              placeholder="Enter your message here"
            />
            <button
              className="p-2 bg-white rounded-full w-[6%] cursor-pointer"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                ></path>
              </svg>
            </button>
          </form>
        </div>
    </div>
  );
}

export default Chatbot;
