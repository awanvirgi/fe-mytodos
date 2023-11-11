import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Regitser from "./pages/register";
function App() {

  return (
    <div className="w-screen h-screen flex justify-center bg-slate-900 text-white">
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Regitser />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </div>
  )
}

export default App
