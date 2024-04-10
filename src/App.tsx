import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
    <div className="container mx-auto mt-12">
      <h1 className="text-5xl text-center md:w-2/3 md:mx-auto font-semibold"><span className=" text-indigo-700">Veterinary</span> Patient List</h1>
      
      <div className=" mt-12 md:flex">
        <PatientForm/>
        <PatientList/>
      </div>
    </div>
    </>
  )
}

export default App
