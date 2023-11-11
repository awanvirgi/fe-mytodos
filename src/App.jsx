import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Regitser from "./pages/register";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
    getToken()
  }, [isLogin])
  function getToken() {
    (localStorage.getItem("token")) ? setIsLogin(true) : setIsLogin(false)
  }
  return (
    <div className="w-screen h-screen flex justify-center bg-slate-900 text-white">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Regitser />}></Route>
        <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />
        }></Route>
      </Routes>
    </div>
  )
}

export default App
