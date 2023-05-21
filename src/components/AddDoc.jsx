import { useState } from "react";
import blood from "../assets/images/blood.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddDoc = () => {
  const url = "http://localhost:4000/api/biomed/addUser";
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;
  const navigate = useNavigate()
  console.log(token)
  const [fullName, setFullName] = useState("");
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const docInfo = {
    fullName,
    username,
    password,
    roles:["doctor"]
  };
  const handleAddDoc = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, docInfo, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
      });
      
      if (response.data) {
        console.log(response.data);
        setPassword("")
        setUserName("")
        setFullName("")
        navigate("/home")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="w-full md:px-16">
      <div className="flex">
        <div className="w-1/2">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Belachew Alemu"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="janeman"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3 mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="abc@gmail.com"
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="password"
              placeholder=".............."
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
          </div>
          <div onClick={handleAddDoc} className="bg-blue-900 mx-3 mt-7 p-3 rounded-lg cursor-pointer text-center text-white">
            Submit
          </div>
        </div>
        <div className="h-full mt-5">
          <img src={blood} alt="blood"></img>
        </div>
      </div>
    </form>
  );
};

export default AddDoc;
