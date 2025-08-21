import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Chatbot from "./pages/Chatbot";
import Spotify from "./pages/Spotify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/ai" element={<Chatbot />} />
          <Route path="/spotify" element={<Spotify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
