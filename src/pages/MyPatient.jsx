import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPatient = () => {
  const [users, setUsers] = useState(null);
  const url = "http://localhost:4000/api/biomed/myPatient";
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.accessToken;
  const navigate = useNavigate()
  useEffect(() => {
    const getPatient = async () => {
      const patients = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${token}`,
        },
      });
      if (patients) {
        setUsers(patients.data);
      }
    };
    getPatient();
  }, [token]);
  return (
    <Layout>
      <div className="text-purple-500 font-medium text-2xl pl-5 pt-3">
        Patient Inforamtion
      </div>
      <div className="grid grid-cols-3 p-5">
      {users == null ? (
          <p>loading...</p>
        ) :users.length == 0 ? <p>you dont have a patient</p> :(
          users.map((user) => {
            console.log(user.addedBy)
            return (
              <PatientCard
              key={user._id}
              onDetail={()=>{navigate(`/detail/${user._id}`)}}
                fullName={user.fullName}
                EmgPhonNo={user.emgPhoneNum}
                age={user.age}
                frr={user.frr}
                date={user.createdAt}
                bedNum={user.bedNum}
                bloodType={user.booldType}
                doctor={user["addedBy"]["fullName"]}
                fluidType={user.fluidType}
                roomNum={user.roomum}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
};

export default MyPatient;
