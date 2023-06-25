import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import { UiContext } from "../store/uiCtx";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const uiCtx = useContext(UiContext);
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const url = `https://bmd-s4zi.onrender.com/api/biomed/user/${id}`;
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;
  const navigate = useNavigate()
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

  
  return (
    <Layout>
      <div className="p-5">
        <div className="">
          <div className="flex justify-end py-3 px-5" onClick={()=>{navigate(`/edit/${id}`)
         localStorage.setItem( "patient", JSON.stringify(patient))
        }}><span className="material-symbols-outlined text-red-400 cursor-pointer">
        edit
        </span></div>
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
        {patient == null?<p>Loading...</p>:<div className="flex justify-between gap-5 mt-4">
          <div className="p-5 border-4 border-green-300 rounded-2xl w-full text-gray-700 bg-gray-100">
            <p className="">Amount of Fluid Left</p>
            <p>{`${patient.volume}`} ml</p>
          </div>
          <div className="p-5 border-4 border-blue-300 rounded-2xl w-full text-gray-600 bg-gray-100">
            <p>Flow Rate</p>
            <p>{`${patient.sensorData}`} ml/s</p>
          </div>
          <div className={`p-5 border-4 text-white rounded-2xl w-full cursor-pointer  ${patient.status?"bg-red-800 border-red-600":"bg-green-600"}`}>
            
            <p>IV Fluid Status</p>
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
        </div>}
        
      </div>
    </Layout>
  );
};

export default Detail;
