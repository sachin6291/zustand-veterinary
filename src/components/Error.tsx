import { ReactNode } from "react"

const Error = ({children}: {children:ReactNode}) => {
  return (
    <p className=" text-center my-3 bg-red-600 text-white font-semibold p-1 uppercase text-sm">{children}</p>
  )
}

export default Error