import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import { UiContext } from "../store/uiCtx";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const uiCtx = useContext(UiContext);
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const url = `https://bmd-s4zi.onrender.com/api/biomed/user/${id}`;
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;

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
  console.log(patient);
  return (
    <Layout>
      <div className="p-5">
        <div className="">
          {patient == null ? (
            <p>Loading..</p>
          ) : (
            <PatientCard
              key={patient._id}
              fullName={patient.fullName}
              EmgPhonNo={patient.emgPhoneNum}
              age={patient.age}
              frr={patient.frr}
              date={patient.createdAt}
              bedNum={patient.bedNum}
              bloodType={patient.booldType}
              doctor={patient["addedBy"]["fullName"]}
              fluidType={patient.fluidType}
              roomNum={patient.roomum}
            />
          )}
        </div>
        <div className="flex justify-between gap-5 mt-4">
          <div className="p-5 border-4 border-green-300 rounded-2xl w-full text-gray-700 bg-gray-100">
            <p className="">Amount of Fluid Left</p>
            <p>149 Mil</p>
          </div>
          <div className="p-5 border-4 border-blue-300 rounded-2xl w-full text-gray-600 bg-gray-100">
            <p>Flow Rate</p>
            <p>149 Mil/sec</p>
          </div>
          <div className="p-5 border-4 border-red-600 rounded-2xl w-full cursor-pointer text-gray-600 bg-gray-100">
            <p>Emmergency Button</p>
            <p>Please check your patient </p>
          </div>
          <div className="p-5 border-4 w-full cursor-pointer flex gap-2 items-center text-gray-600 bg-gray-100">
            <div
              onClick={() => uiCtx.onReset()}
              className="bg-blue-600 py-2 rounded-lg text-white flex  px-6"
            >
              RESET
              {uiCtx.action == "reset" ? (
                <span className="material-symbols-outlined">done</span>
              ) : null}
            </div>
            <div
              onClick={() => uiCtx.onStart()}
              className="bg-green-500 py-2 rounded-lg text-white px-6 flex"
            >
              START
              {uiCtx.action == "start" ? (
                <span className="material-symbols-outlined">done</span>
              ) : null}
            </div>
            <div
              onClick={() => uiCtx.onStop()}
              className="bg-red-500 py-2 rounded-lg text-white px-6 flex"
            >
              STOP
              {uiCtx.action == "stop" ? (
                <span className="material-symbols-outlined">done</span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
