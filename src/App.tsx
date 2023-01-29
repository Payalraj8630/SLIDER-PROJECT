import { useState } from "react"
import Navbar from "./Components/Navbar"

function App(){
  const[width,setWidth] =useState(window.innerWidth)
  return(
    <> 
    <Navbar/>
   
    </>
  )
}
export default App