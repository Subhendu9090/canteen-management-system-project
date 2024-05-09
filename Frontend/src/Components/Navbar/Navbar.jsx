import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  // const showDropdown = () => {
  //   setRegister(true);
  // };

  // const hideDropdown = () => {
  //   setRegister(false);
  // };
  // const showDropdown1 = () => {
  //   setLogin(true);
  // };

  // const hideDropdown1 = () => {
  //   setLogin(false);
  // };

  return (
    <nav className="flex flex-row justify-between h-[50px] bg-yellow-300 items-center  ">
      <div className="p-2 font-black min-w-[200px] ml-4">
        <h1>ACADEMIC APETITE</h1>
      </div>
      <div className="">
        <ul className="flex flex-row justify-between gap-5 mr-10 sm:gap-10 lg:gap-16">
          <li className="p-2 font-semibold rounded-lg hover:bg-yellow-900">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-2 font-semibold rounded-lg hover:bg-yellow-900">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 font-semibold rounded-lg hover:bg-yellow-900">
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className="p-2 font-semibold rounded-lg hover:bg-yellow-900">
            <Link to="/profile">Profile</Link>
          </li>
          
          {/* <li
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
                <Link to="/login">user login</Link>
              </li>
              <li className="p-2 rounded-md hover:bg-slate-600">
                <Link to="/adminlogin">admin login</Link>
              </li>
            </ul>
          </li> */}

          {/* <li
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
          </li> */}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
