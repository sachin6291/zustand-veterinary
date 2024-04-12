import Error from "./Error"
import { useForm} from "react-hook-form"
import type { DraftPatient } from "../types"
import { usePatientStore } from "../store"


const PatientForm = () => {

    const {addPatient} = usePatientStore()

    const {register, handleSubmit, formState:{errors}, reset}=useForm<DraftPatient>()

    const registerPatient =(data:DraftPatient)=> {
        addPatient(data)
        reset()
    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-semibold text-3xl text-center">Patient Information</h2>

        <p className="text-lg mt-5 text-center mb-10">
        Add and 
        <span className="text-indigo-600 font-bold"> Administrate </span>
        Patients
        </p>

        <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
        >
            <div className="mb-5">
                <label htmlFor="name" className="text-sm uppercase font-bold">
                    Patient 
                </label>
                <input  
                    id="name"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Patient Name" 
                    {...register('name',{
                        required:'The Patient Name is Required'
                    })}
                />
                {errors.name &&(
                    <Error>{errors.name.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Caretaker 
                </label>
                <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Pet Owner's Name" 
                    {...register('caretaker',{
                        required:'The Pet Owners Name is Required'
                    })}
                />
                {errors.caretaker &&(
                    <Error>{errors.caretaker.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="mail@mail.com"
                    {...register("email", {
                        required: "The e-mail is Required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'invalid E-mail'
                        }
                      })}  
                />
                {errors.email &&(
                    <Error>{errors.email.message}</Error>
                )}
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Date
                </label>
                <input  
                    id="date"
                    className="w-full p-3  border border-gray-100"  
                    type="date" 
                    {...register('date',{
                        required:'The date of admition is Required'
                    })}
                />
                {errors.date &&(
                    <Error>{errors.date.message}</Error>
                )}
            </div>
        
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Symptoms
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Patient Symptoms" 
                    {...register('symptoms',{
                        required:'the symptoms are required'
                    })}
                ></textarea>
                {errors.symptoms &&(
                    <Error>{errors.symptoms.message}</Error>
                )}
            </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value='Guardar Paciente'
            />
        </form> 
    </div>
  )
}

export default PatientForm