import React, { useEffect, useState } from "react";
import contactusbg from"./contactusbg.avif"
import { Link } from "react-router-dom";
import axios from "axios";
const ProfilePage = () => {
  const [moneyPaid, setMoneyPaid] = useState(100); // initial money paid
  const [leftOverAmount, setLeftOverAmount] = useState(50); // initial left over amount
  const [user, setUser] = useState("");
  const [cancelToDate, setCancelToDate] = useState("");

  const logoutYourAcc = () => {
    console.log("At logout function");
    let token = localStorage.getItem("user");
    if (!token) {
      console.log("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    console.log("data", data.data.accessToken);
    axios
      .get("http://localhost:8000/api/v1/users/logout", {
        headers: {
          Authorization: `Bearer ${data.data.accessToken}`,
        },
      })
      .then((res) => {
        console.log("Response", res);
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };

  const handleCancel = () => {
    let token = localStorage.getItem("user");
    if (!token) {
      alert("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    //console.log("Data",data);
    axios.get("http://localhost:8000/api/v1/users/offYourMeal",{
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`,
      }
    }).then((res)=>{
     // console.log(res.data.messege);
      alert(res.data.messege);
    })
      .catch((err)=>{
        console.log(err.message);
       
        
      })
  };

  useEffect(()=>{
    const getCurrentUser = ()=>{
      let token = localStorage.getItem("user");
    if (!token) {
      alert("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    //console.log("Data",data);
    axios.get("http://localhost:8000/api/v1/users/getCurrentUser",{
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`,
      }
    }).then((res)=>{
      //console.log(res.data.data);
      setUser(res.data.data)
      
    }).catch((err)=>{
      alert("Error",err.message);
    })
    }

    getCurrentUser()
  },[])

  const onYourMeal =()=>{
    let token = localStorage.getItem("user");
    if (!token) {
      alert("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    //console.log("Data",data);
    axios.get("http://localhost:8000/api/v1/users/onyourmeal",{
      headers: {
        Authorization: `Bearer ${data.data.accessToken}`,
      }
    }).then((res)=>{
      //console.log(res.data);
      alert(res.data.messege);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="flex flex-row gap-4 bg-gray-400">
      <div className=" w-[300px] bg-amber-300">
        <div className="flex flex-col items-center justify-center gap-4 mt-6 ">
          <img
            className="rounded-full h-[200px] w-[200px]"
            src={user.avatar}
            alt="Profile"
          />
          <div className="flex flex-col gap-4">
            <p>Name: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>Hostel Name: {user.hostel} </p>
            <p>Meal Status: {`${user.mealStatus === false ? "OFF" : "Continue"}`}</p>
            <p>Roll No: {user.rollNo}</p>
            <p>Registration No: {user.registrationNo}</p>
            <div className="flex items-center justify-center ">
            <Link to="/">
            <button 
            onClick={logoutYourAcc}
            className="px-3 py-2 mb-3 text-lg font-semibold bg-gray-600 rounded-md hover:bg-gray-500">
              Logout
            </button>
           
          </Link>
          </div>
          </div>
        </div>
       
      </div>
      <div className="flex flex-col gap-4">
        <p className="mt-8 text-4xl ">You have paid: ${moneyPaid}</p>
        <p  className="mt-8 text-4xl ">Your left over amount: ${leftOverAmount}</p>
        <div className="cancel-section">
          <h2 className="mt-8 text-2xl font-bold">Meal Cancellation :- </h2>
          {/* <input
            className="mt-8 "
            type="date"
            value={cancelFromDate}
            onChange={(e) => setCancelFromDate(e.target.value)}
          />
          <input
            type="date"
            value={cancelToDate}
            onChange={(e) => setCancelToDate(e.target.value)}
          /> */}
          <div className="flex flex-col items-center justify-center gap-4 ">
          <p className="text-2xl ">You want to cancel meal today ?</p>
          <button
          className="px-3 py-2 mb-3 text-lg font-semibold bg-gray-600 rounded-md hover:bg-gray-500"
          onClick={handleCancel}>Off Meal</button>
          <button
          className="px-3 py-2 mb-3 text-lg font-semibold bg-gray-600 rounded-md hover:bg-gray-500"
          onClick={onYourMeal}>On Meal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
