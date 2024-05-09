import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom';
function AdminRegister() {
  const [fullname,setFullname]=useState("")
  const [email,setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [secrate,setSecrate] = useState("")
  const navigate = useNavigate();

  const sendToBackend = (e)=>{

    e.preventDefault();

    console.log(fullname,email,number,secrate);
    axios.post("http://localhost:8000/api/v1/admins/register",
    {fullname:fullname,
      email:email,
      mobileNo:number,
      secret:secrate
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res)=>{
      console.log("Responce",res.data);
      localStorage.setItem("user", JSON.stringify(res.data))
      navigate("/verifieduser")
    })
    .catch((err)=>{
      console.log("Error :",err.message);
    })

    setEmail("");
    setFullname("");
    setNumber("");
    setSecrate("");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-[400px] sm:w-[500px] lg:w-[600px] my-4 text-center text-black min-w-xl bg-slate-300 rounded-xl">
        <div className="w-full p-5 rounded-xl">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5c/Indira_Gandhi_Institute_of_Technology%2C_Sarang_Logo.png"
              alt="logo"
              className="w-[70px] h-[70px]"
            />
            <h2 className="my-3 text-2xl font-bold ">
              Sign up to create account
            </h2>
            <h3 className="my-3 font-serif text-xl">
              {" "}
              Already have an acount ?
            </h3>
            <Link to="/adminlogin" className="p-3 text-blue-600 hover:underline">
              {" "}
              Login
            </Link>
          </div>
          <form
            method="POST"
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row items-start justify-around">
            
            <input
              type="text"
              className="w-1/2 h-8 px-3 my-2 duration-150 rounded-md outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter your fullname"
              value={fullname}
              onChange={(e)=> setFullname(e.target.value)}
            ></input>
           </div>
           
           <div className="flex flex-row justify-around">
            
            <input
              type="email"
              className="w-1/2 h-8 px-3 my-2 duration-150 rounded-md outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            ></input>
            </div>

            <div className="flex flex-row justify-around">
            
            <input
              type="number"
              className="w-1/2 h-8 px-3 my-2 duration-150 rounded-md outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500" placeholder="Enter mobile No"
              value={number}
              onChange={(e)=> setNumber(e.target.value)}
            ></input>
            </div>

            <div className="flex flex-row justify-around ">
            
            <input
              type="password"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 rounded-md outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter secrate"
              value={secrate}
              onChange={(e)=> setSecrate(e.target.value)}
            ></input>
            </div>
            

            <div className="flex justify-center m-4 ">
            <button onClick={sendToBackend}
              type="submit"
              className="flex justify-around w-40 py-2 my-4 font-bold bg-blue-700 rounded-lg px-7 hover:bg-blue-600 focus:border-blue-600"
            >
              SUBMIT
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister
