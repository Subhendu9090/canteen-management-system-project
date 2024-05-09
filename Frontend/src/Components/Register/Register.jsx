import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Register() {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [regestrationNo, setregestrationNo] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [hostelname, sethostelname] = useState("");
  const [login,setLogin]=useState("")

  const submitToBackend = (e) => {
    e.preventDefault();
    console.log({
      fullname,
      email,
      rollNo,
      regestrationNo,
      password,
      hostelname,
      avatar,
    });

    if ([fullname,
      email,
      rollNo,
      regestrationNo,
      password,
      hostelname,
      ].some((item)=>!item || item.trim() === "")){
      alert("please enter all values")
      return
    }

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("rollNo", rollNo);
    formData.append("registrationNo", regestrationNo);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("hostelname", hostelname);
    formData.append("avatar", avatar);

    axios
      .post("http://localhost:8000/api/v1/users/register", formData, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      })
      .then((response) => {
        console.log("Response:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data))
        alert(response.data.messege)
      })
      .catch((error) => {
        console.error("Error in Axios request:", error);
      });
    alert("please wait for admin verification");
    setAvatar(null);
    setEmail("");
    setPassword("");
    setRollNo("");
    setfullname("");
    sethostelname("");
    setregestrationNo("");

    // fetch("http://localhost:8000/api/v1/users/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // })
    // .then((res) => {
    //   console.log("result", res);
    //   return res.json(); // Return the parsed JSON response
    // })
    // .then((data) => {
    //   console.log("response", data); // Log the parsed JSON response
    // })
    // .catch((error) => {
    //   console.error("Error in fetch:", error);
    // });
  };
  
  const showDropdown1 = () => {
    setLogin(true);
  };

  const hideDropdown1 = () => {
    setLogin(false);
  };

  return (
    <div className="flex justify-center h-screen bg-black">
      <div className="w-[400px] sm:w-[500px] lg:w-[600px] my-4 text-center text-black min-w-xl bg-slate-300 rounded-xl">
        <div className="w-full p-5 rounded-xl">
          <div >
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
            <div className="flex items-center justify-center">
            <li
            className="p-2 font-semibold rounded-lg hover:bg-gray-400"
            onMouseEnter={showDropdown1}
            onMouseLeave={hideDropdown1}
          >
            <Link to="#"> Login +</Link>
            <ul
              className={`absolute ${
                login ? "block" : "hidden"
              }  gap-2 p-1 mt-1 bg-blue-100 rounded-md `}
            >
              <li className="p-2 rounded-md hover:bg-slate-600">
                <Link to="/">user login</Link>
              </li>
              <li className="p-2 rounded-md hover:bg-slate-600">
                <Link to="/adminlogin">admin login</Link>
              </li>
            </ul>
          </li>
            </div>
            {/* <Link to="/" className="p-3 text-blue-600 hover:underline">
              {" "}
              Login
            </Link> */}
          </div>
          <form
            method="POST"
            className="flex flex-col gap-2"
          >
            <div className="flex flex-row items-start justify-around">
            <input
              type="text"
              className="w-1/2 h-8 px-3 my-2 duration-150 rounded-lg outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter your fullname"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
            ></input>
           </div>
           
           <div className="flex flex-row justify-around">
            
            <input
              type="email"
              className="w-1/2 h-8 px-3 my-2 duration-150 rounded-lg outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            </div>

            <div className="flex flex-row justify-around ">
            
            <input
              type="text"
              className="w-1/2 h-8 px-3 m-2 duration-150 rounded-lg outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter roll no"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            ></input>
            </div>

            <div className="flex flex-row justify-around">
            
            <input
              type="text"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 rounded-lg outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter regustration No"
              value={regestrationNo}
              onChange={(e) => setregestrationNo(e.target.value)}
            ></input>
            </div>

            <div className="flex flex-row justify-around ">
            
            <input
              type="password"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 rounded-lg outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            </div>
            
            <div className="flex flex-row justify-around ">
           
            <select className="w-1/2 h-8 rounded-md hover:border-blue-800 focus:ring-2 focus:ring-blue-500" value={hostelname}  onChange={(e)=>sethostelname(e.target.value)} >
             <option value="">choose Hostel</option>
              <option value="Surya Bhawan">Surya Bhawan</option>
              <option value="Brahmos Bhawan">Brahmos Bhawan</option>
              <option value="Aryabhatta Bhawan">Aryabhatta Bhawan</option>
              <option value="Akash Bhawan">Akash Bhawan</option>
              <option value="Agni Bhawan">Agni Bhawan</option>
              <option value="Prithwi Bhawan">Prithwi Bhawan</option>
              <option value="Rohini Bhawan">Rohini Bhawan</option>
            </select>
            </div>

            <div className="flex flex-row justify-around ">
            
            <input
              type="file"
              className="w-1/2 h-8 px-0 my-2 space-y-5 duration-700 outline-none focus:border-blue-800 focus:ring-2 focus:ring-blue-500"
              placeholder="enter your image"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            </div>

            <div className="flex justify-center m-4 ">
            <button
              type="submit"
              className="flex justify-around w-40 py-2 my-4 font-bold bg-blue-700 rounded-lg px-7 hover:bg-blue-600 focus:border-blue-600"
              onClick={submitToBackend}
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

export default Register;
