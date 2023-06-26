

const PatientCard = ({onDetail, fullName,EmgPhonNo,doctor,date,fluidType,minFrr,maxFrr,bedNum, roomNum,age, bloodType}) => {
 
  return (
    <div onClick={onDetail} className="cursor-pointer">
      <div className="bg-gradient-to-r from-blue-400 border-2 rounded-xl p-4">
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Full Name</span> <span className="bg-white w-3/5 p-1">{fullName}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Emg P Num</span> <span className="bg-white w-3/5 p-1">{EmgPhonNo}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Doctor</span> <span className="bg-white w-3/5 p-1">{doctor}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">A Date</span> <span className="bg-white w-3/5 p-1">{date}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Fluid Type</span> <span className="bg-white w-3/5 p-1">{fluidType}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Minimun Flow Rate</span> <span className="bg-white w-3/5 p-1">{minFrr}mil/sec</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Maximum Flow Rate</span> <span className="bg-white w-3/5 p-1">{maxFrr}mil/sec</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Bed Number</span> <span className="bg-white w-3/5 p-1">{bedNum}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Room No</span> <span className="bg-white w-3/5 p-1">{roomNum}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Age</span> <span className="bg-white w-3/5 p-1">{age}</span></div>
        <div className="flex gpa font-semibold gap-10 text-gray-800 mb-2"><span className="w-1/4">Blood G</span> <span className="bg-white w-3/5 p-1">{bloodType}</span></div>
      </div>
    </div>
  )
}

export default PatientCard