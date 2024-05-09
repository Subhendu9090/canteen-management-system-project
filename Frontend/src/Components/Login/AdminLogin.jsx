import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const [user, setUser] = useState("");
  const [secret, setSecret] = useState("");
  const navigate = useNavigate()
  const submitToBackend = (e) => {
    e.preventDefault();
    console.log(user, secret);

    // const requestData = {};
    // if (typeof user === "number") {
    //   requestData = { email: user, secret: secret };
    // } else if (typeof user === "string") {
    //   requestData = { mobileNo: user, secret: secret };
    // }

    axios
      .post("http://localhost:8000/api/v1/admins/login", {
        email:user,
        secret:secret
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("responce", res.data.success);
        
        if (res.data.success) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          navigate("/unverifieduser")
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black ">
      <div className="my-4 text-center text-black bg-slate-300 rounded-xl w-[400px] sm:w-[500px] lg:w-[500px]">
        <div className="w-full p-10 mx-auto border rounded-xl border-black/10">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5c/Indira_Gandhi_Institute_of_Technology%2C_Sarang_Logo.png"
              alt="logo"
              className="w-12 h-12"
            />
            <h2 className="my-3 text-2xl font-bold ">Login your account</h2>
            <h3 className="my-3 font-serif text-xl">
              {" "}
              You don't have an acount ?
            </h3>
            <Link to="/register" className="text-blue-600 hover:underline">
              {" "}
              Signup
            </Link>
          </div>
          <form className="flex flex-col items-center justify-center mx-4 my-3">
            <input
              type="text"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 rounded-lg outline-none focus:border focus:border-blue-800 focus:ring-2"
              placeholder="enter email or mobile no:-"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>

            <input
              type="password"
              className="w-1/2 h-8 px-3 my-2 space-y-5 duration-150 rounded-lg outline-none focus:border focus:border-blue-800 focus:ring-2"
              placeholder="enter secrete:-"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
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
  );
}

export default AdminLogin;
