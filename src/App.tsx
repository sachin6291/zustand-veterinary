import { Slide, ToastContainer } from "react-toastify"
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import "react-toastify/dist/ReactToastify.css"

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
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
    </>
  )
}

export default App
