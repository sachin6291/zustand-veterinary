import { usePatientStore } from "../store"

const PatientList = () => {

  const patients = usePatientStore(state=>state.patients)
  console.log(patients);
  
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ?(
        <p>patient</p>
      ):(<>
          <h2 className="font-semibold text-3xl text-center">Patient List is Empty</h2>
          <p className="text-lg mt-5 text-center mb-10"><span className="text-indigo-600 font-bold"></span></p>
        </>
      )}
    </div>
  )
}

export default PatientList