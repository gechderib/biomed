import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const url = "https://bmd-s4zi.onrender.com/api/biomed/addPatient";
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;
  const navigate = useNavigate();
  console.log(token);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [minFrr, setMinFrr] = useState("");
  const [maxFrr, setMaxFrr] = useState("");
  const [density, setDensity] = useState("");
  const [volumeThreshold, setVolumeThreshold] = useState();
  const [bedNum, setBedNum] = useState("");
  const [roomum, setroomNum] = useState("");
  const [age, setAge] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [emgPhoneNum, setEmdPhonNum] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [fluidType, setFludType] = useState("");

  const patientInfo = {
    fullName,
    minFrr,
    maxFrr,
    density,
    volumeThreshold,
    bedNum,
    roomum,
    age,
    booldType: bloodType,
    emgPhoneNum,
    mobileNum,
    fluidType,
    address,
    gender,
  };
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, patientInfo, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
      });

      if (response.data) {
        console.log(response.data);
        setAddress("");
        setAge("");
        setBedNum("");
        setBloodType("");
        setEmdPhonNum("");
        setFludType("");
        setMinFrr("");
        setMaxFrr("");
        setDensity("");
        setVolumeThreshold("");
        setFullName("");
        setGender("");
        setMobileNum("");
        setroomNum("");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="w-full">
      <div className="">
        <div className="md:flex">
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
              placeholder="Jane"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Emergency Phone Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="+251978645324"
              value={emgPhoneNum}
              onChange={(e) => setEmdPhonNum(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="+251978648354"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="md:flex">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="Number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Blood Group
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Blood Group"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="md:flex">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Gender
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Room Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Bed Bed Number"
              value={roomum}
              onChange={(e) => setroomNum(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Enter Bed Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Bed Number"
              value={bedNum}
              onChange={(e) => setBedNum(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="md:flex mt-5">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Minimun Flow Rate Range
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter flow rate"
              value={minFrr}
              onChange={(e) => setMinFrr(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Maximun Flow Rate Range
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter flow rate"
              value={maxFrr}
              onChange={(e) => setMaxFrr(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Fluid Type
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Fluid Type"
              value={fluidType}
              onChange={(e) => setFludType(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="md:flex mt-5">
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
             Density
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter flow rate"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
            ></input>
          </div>
          <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Volume Threshold
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter flow rate"
              value={volumeThreshold}
              onChange={(e) => setVolumeThreshold(e.target.value)}
            ></input>
          </div>
          <div className="w-full"></div>
          {/* <div className="w-full  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Fluid Type
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Fluid Type"
              value={fluidType}
              onChange={(e) => setFludType(e.target.value)}
            ></input>
          </div> */}
        </div>
      </div>
      <div
        onClick={handleAddUser}
        className="bg-blue-900 mx-3 mt-7 p-3 rounded-lg cursor-pointer text-center text-white"
      >
        Submit
      </div>
    </form>
  );
};

export default AddPatient;
