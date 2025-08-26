import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Chatbot from "./pages/Chatbot";
import Spotify from "./pages/Spotify";
import VR from "./pages/VR";
import Aurora from "./pages/Aurora";
import Chrome from "./pages/Chrome";
import Loading from "./pages/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the page is already fully loaded (e.g., fast reload),
    // set loading to false immediately.
    if (document.readyState === "complete") {
      setLoading(false);
      return;
    }

    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Splash screen before router
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Your Loading page at `/` */}
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/chrome" element={<Chrome />} />
          <Route path="/aurora" element={<Aurora />} />
          <Route path="/ai" element={<Chatbot />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/vr" element={<VR />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
