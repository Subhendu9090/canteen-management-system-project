import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UnverifiedUser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mealcount,setMealcount] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const getDataFromBackend = () => {
      axios
        .get("http://localhost:8000/api/v1/users/unverifieduser")
        .then((res) => {
          // console.log("Response", res.data.data);
          setData(res.data.data);
          // console.log(data.length);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };

    getDataFromBackend();
  }, [data]);

  const verifyuser = (id) => {
    axios
      .get(`http://localhost:8000/api/v1/users/verifyuser/${id}`)
      .then((res) => {
        // console.log("Responce", res);
        alert("user verified");
      })
      .catch((err) => {
        // console.log("Error", err);
        alert(err.message)
      });
  };

  const logoutYourAcc = () => {
    console.log("At logout function");
    let token = localStorage.getItem("admin");
    if (!token) {
      alert("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    //console.log("data", data.data.accessToken);
    axios
      .get("http://localhost:8000/api/v1/admins/logout", {
        headers: {
          Authorization: `Bearer ${data.data.accessToken}`,
        },
      })
      .then((res) => {
        //console.log("Response", res);
        localStorage.removeItem("admin");
        navigate("/adminlogin");
      })
      .catch((err) => {
        alert("Error", err.message);
      });
  };

  useEffect(()=>{
    let token = localStorage.getItem("admin");
    if (!token) {
      console.log("Token not found in localStorage");
      return;
    }
    const data = JSON.parse(token);
    //console.log("data", data.data.accessToken);
    axios
      .get("http://localhost:8000/api/v1/admins/counttotalmeal", {
        headers: {
          Authorization: `Bearer ${data.data.accessToken}`,
        },
      }).then((res)=>{
       let mealcount = (res.data.data.totalMeal.length)
       setMealcount(mealcount)
        //console.log(mealcount);
      })
        .catch((err)=>{
          console.log(err.message);
        })
  },[])

  return (
    <div className="min-h-screen bg-gray-500 ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-6">
          <h1 className="flex items-center justify-center px-6 py-2 my-5 overflow-hidden text-2xl font-bold bg-white border border-blue-800 rounded-full md:text-4xl">
            see all unverifieduser
          </h1>
          <h2 className="flex items-center justify-center px-6 py-2 my-5 overflow-hidden text-2xl font-bold bg-white border border-blue-800 rounded-full md:text-4xl">Total Meal: {mealcount}</h2>
          <div className="flex gap-3 ">
            <button
              className="px-3 py-2 my-6 font-semibold bg-blue-700 rounded-lg hover:border hover:border-red-700 hover:ring-2 hover:ring-red-800"
              onClick={() => navigate("/verifieduser")}
            >
              verified user
            </button>
            <button
              className="px-3 py-2 my-6 font-semibold bg-blue-700 rounded-lg hover:border hover:border-red-700 hover:ring-2 hover:ring-red-800 "
              onClick={logoutYourAcc}
            >
              logout
            </button>
          </div>
        </div>

        <h2 className="mb-6 text-xl font-semibold underline">
          All unverified user:{data.length}
        </h2>
        {loading ? (
          <p>Loading.....</p>
        ) : (
          data.map((ele) => (
            <div key={ele._id} className="flex flex-row justify-center gap-4 ">
              <div className="flex flex-row justify-between max-w-full gap-16 p-2 my-2 bg-gray-600 border border-blue-800 rounded-3xl ring-2 ">
                <img
                  src={ele.avatar}
                  alt="user image"
                  className="rounded-full h-[80px] w-[80px] bg-slate-400 hover:h-[150px]  hover:w-[130px] ml-4"
                />

                <div className="flex flex-col items-start justify-center gap-4 w-[200px]">
                  <h2 className="text-xl font-semibold text-balance ">
                    Name :{ele.fullname}
                  </h2>
                  <h3 className="font-semibold text-l text-balance ">
                    Email: {ele.email}
                  </h3>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 mr-6 w-[150px]">
                  <h2 className="font-semibold text-l text-balance ">
                    Roll No:{ele.rollNo}
                  </h2>
                  <h3 className="font-semibold text-l text-balance ">
                    {" "}
                    Regd No:{ele.registrationNo}
                  </h3>
                </div>
              </div>
              <button
                className="px-6 my-5 font-semibold bg-gray-600 border rounded-full hover:bg-gray-400 border-blue-950 ring-2"
                onClick={() => verifyuser(ele._id)}
              >
                Verify
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UnverifiedUser;
