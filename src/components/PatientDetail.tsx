import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { Slide, toast } from "react-toastify"

type PatientDetailProp={
    patient: Patient
}
const PatientDetail = ({patient} : PatientDetailProp) => {

    const{id ,name, caretaker, email, date, symptoms}=patient
    
    const {deletePatient, getPatientById} = usePatientStore()

    const handleDelete =()=>{
        
        deletePatient(id)
        toast.error('Patient Deleted Sucessfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        })
    }
  
  
    return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
        <PatientDetailItem
            label='ID'
            data={id}
        />
        <PatientDetailItem
            label='Name'
            data={name}
        />
        <PatientDetailItem
            label='Caretaker'
            data={caretaker}
        />
        <PatientDetailItem
            label='Email'
            data={email}
        />
        <PatientDetailItem
            label='Date'
            data={date.toString()}
        />
        <PatientDetailItem
            label='Symptoms'
            data={symptoms}
        />

        <div className=" flex flex-col md:flex-row justify-between gap-3 mt-10">
            <button 
                type="button"
                className=" py-2 px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold uppercase rounded-md"
                onClick={()=>getPatientById(id)}
            >
                Edit
            </button>

            <button 
                type="button"
                className=" py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-semibold uppercase rounded-md"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
        
    </div>
  )
}

export default PatientDetail