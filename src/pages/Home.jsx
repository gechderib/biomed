import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PatientCard from "../components/PatientCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const url = "https://bmd-s4zi.onrender.com/api/biomed/users";
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
   
      <div className="grid grid-cols-3 p-5 gap-5">
        {users.length == 0 || users == null ? (
          <p>loading...</p>
        ) : (
          users.map((user) => {
            console.log(user.addedBy)
            return (
              <PatientCard
              key={user._id}
              onDetail={()=>{navigate(`/detail/${user._id}`)}}
                fullName={user.fullName}
                EmgPhonNo={user.emgPhoneNum}
                age={user.age}
                maxFrr={user.maxFrr}
                minFrr={user.minFrr}
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

export default Home;
