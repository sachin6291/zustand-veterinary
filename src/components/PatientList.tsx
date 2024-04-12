import { usePatientStore } from "../store"
import PatientDetail from "./PatientDetail";

const PatientList = () => {

  const patients = usePatientStore(state=>state.patients)

  
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {patients.length ?(
        <>
          <h2 className="font-semibold text-3xl text-center">Patient List</h2>
          <p className=" text-lg mt-5 mb-10 text-center">Administrate 
            <span className="text-indigo-600 font-bold"> Patients and Apointments</span>
          </p>
          {patients.map(patient=>(
                          
            <PatientDetail
              key={patient.id}
              patient={patient}
            />

          ))}
        </>
      ):(<>
          <h2 className="font-semibold text-3xl text-center">Patient List is Empty</h2>
          <p className="text-lg mt-5 text-center mb-10">Add<span className="text-indigo-600 font-bold"> Patients </span> to the List</p>
        </>
      )}
    </div>
  )
}

export default PatientList