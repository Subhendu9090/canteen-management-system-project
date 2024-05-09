import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const[user,setUser]=useState("");
  const[password,setPassword] = useState('');
  const[register,setRegister] = useState("")
  const navigate = useNavigate();

  const submitToBackend = (e) => {
    e.preventDefault();
    console.log(user, password);
    console.log("Data to be sent:", { rollNo: user, password: password });

    axios.post("http://localhost:8000/api/v1/users/login", {
        rollNo:user,
        password:password
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
      //  console.log(res)
        
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/home")
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
      setUser("")
      setPassword("")
  };

  const showDropdown = () => {
    setRegister(true);
  };

  const hideDropdown = () => {
    setRegister(false);
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-black ">
      <div className="my-4 text-center text-black bg-slate-300 rounded-xl w-[400px] sm:w-[500px] lg:w-[500px]">
        <div className="w-full p-10 mx-auto border rounded-xl border-black/10">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/5/5c/Indira_Gandhi_Institute_of_Technology%2C_Sarang_Logo.png" alt="logo"
            className="w-20 h-20" />
            <h2 className="my-3 text-2xl font-bold ">
              Login your account
            </h2>
            <h3 className="my-3 font-serif text-xl">
              {" "}
              You don't have an acount ?
            </h3>
            <div className='flex items-center justify-center'>
              <li
            className="p-2 mr-8 font-semibold rounded-md cursor-pointer hover:bg-blue-100"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Link to="#">Register +</Link>
            <ul
              id="dropdown"
              className={` absolute flex-col mt-1 bg-blue-100 ${
                register ? "block" : "hidden"
              } rounded-md`}
            >
              <li className="p-2 rounded-md hover:bg-slate-600">
                <Link to="/register">user Register</Link>
              </li>
              <li className="p-2 rounded-md hover:bg-slate-600">
                <Link to="/adminregister">admin Register</Link>
              </li>
            </ul>
          </li> 
            </div>
            {/* <Link to="/register" className="text-blue-600 hover:underline">
              {" "}
              Signup
            </Link> */}
          </div>
          <form
            method="POST"
            className="flex flex-col items-center justify-center mx-4 my-3"
          >

            <input
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 focus:border focus:border-blue-800 focus:ring-2"
              placeholder="enter roll no"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>

            <input
              type="password"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 borderfocus:border-blue-800 focus:ring-2 focus:ring-blue-800"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>


            <button
              type="submit"
              className="flex justify-around w-40 py-2 my-4 font-bold bg-blue-700 rounded-lg px-7 hover:bg-blue-600 "
               onClick={submitToBackend}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
