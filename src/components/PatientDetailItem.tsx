type PatientDetailItemProp={
    label:string
    data: string
}

const PatientDetailItem = ({label, data}:PatientDetailItemProp) => {
  return (
    <p className=" font-semibold mb-3 uppercase">{label} {''} 
        <span className=" font-normal normal-case">{data}</span>
    </p>
  )
}

export default PatientDetailItem