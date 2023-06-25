import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPatient = () => {
  const { id } = useParams();
  console.log(id)
  const url = `https://bmd-s4zi.onrender.com/api/biomed/user/${id}`;
  const user = JSON.parse(localStorage.getItem("user"));
  const currentPatient = JSON.parse(localStorage.getItem("patient"));
  
  const token = user.accessToken;
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getPatient = async () => {
      const patient = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
      });
      if (patient) {
        setPatient(patient.data);
      }
    };
    getPatient();
  }, [token, url]);

  console.log(patient)
  const [fullName, setFullName] = useState(currentPatient.fullName);
  const [address, setAddress] = useState(currentPatient.address);
  const [gender, setGender] = useState(currentPatient.gender);
  const [minFrr, setMinFrr] = useState(currentPatient.minFrr);
  const [maxFrr, setMaxFrr] = useState(currentPatient.maxFrr);
  const [density, setDensity] = useState(currentPatient.density);
  const [volumeThreshold, setVolumeThreshold] = useState(
    currentPatient.volumeThreshold
  );
  const [bedNum, setBedNum] = useState(currentPatient.bedNum);
  const [roomum, setroomNum] = useState(currentPatient.roomum);
  const [age, setAge] = useState(currentPatient.age);
  const [bloodType, setBloodType] = useState(currentPatient.bloodType);
  const [emgPhoneNum, setEmdPhonNum] = useState(currentPatient.emgPhoneNum);
  const [mobileNum, setMobileNum] = useState(currentPatient.mobileNum);
  const [fluidType, setFludType] = useState(currentPatient.fluidType);

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
      const response = await axios.patch(url, patientInfo, {
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
    <Layout>
      <div className="mt-10"></div>
      {patient == null ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </Layout>
  );
};

export default EditPatient;
