import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function Login() {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const handleLogin = async (event) =>{
        event.preventDefault()
        const {data} = await axios.post("http://localhost:3000/users/login",user)
        if(data.data.user){
            navigate(`/`)
        }
        localStorage.setItem("token",data.data.token)
        localStorage.setItem("userId",data.data.user)
        setUser({email:"",password:""})
        
    }
    
    return (
        <div className="flex items-center">
            <div className="flex flex-col border-4 py-10 border-blue-400 rounded p-4 w-full max-w-[600px] min-w-[400px] min-h-[400px]">
                <h1 className="text-2xl font-bold mb-10 text-blue-400 text-center sm:text-3xl">
                    Login
                </h1>
                <form action="">
                    <div className="mb-5">
                        <h4 className=" text-lg font-bold text-blue-400 mb-2">Email</h4>
                        <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white h-min grow w-full pb-1 sm:text-lg"
                            placeholder="Masukan Email"
                            name="email"
                            type="text"
                            value={user.email} 
                            onChange={(e) => setUser({...user,email:e.target.value})}
                            />
                    </div>
                    <div className="mb-5">
                        <h4 className=" text-lg font-bold text-blue-400 mb-2">Password</h4>
                        <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white h-min grow w-full pb-1 sm:text-lg"
                            placeholder="Masukan Password"
                            name="password"
                            type="password"
                            value={user.password} 
                            onChange={(e) => setUser({...user,password:e.target.value})}
                            />
                            
                    </div>
                    <div className="text-right">
                        <NavLink className="underline text-blue-400 hover:text-white" to={"/Register"}>
                            Belum Memilki Akun?
                        </NavLink>
                    </div>
                    <div className="flex justify-center mt-10">
                        <button type="submit" className="bg-blue-400 rounded px-6 py-2  font-bold text-white" onClick={handleLogin}>Masuk</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login