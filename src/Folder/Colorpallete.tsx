import { useState } from "react"
import { Button } from "react-bootstrap"
import Values from "values.js"
import Navbar from "../Components/Navbar"

function Colorpallete(){
const[colorName,setColorName]=useState("")
const[list,Setlist] =useState([])
const[error,setError]=useState(false)


const handleSubmit=(e:any)=>{
try{
    e.preventDefault()
    const colors:any =new Values('#${colorName}').all(10)
    Setlist(colors)
}  catch (error:any){
    setError(true)
}   
}
console.log({list})
    return(
        <>
        <Navbar/>
        <h1 className="text-center">Colorpallete Component</h1>
        <form>
            <input style={{borderColor:'${error ? "red" :""}'}} type="text" name="color" placeholder="#gd34df"
            onChange={(e:any)=> (e.target.value)}
            />
            <Button variant={"success"}
            onClick={handleSubmit}
            >Generate</Button>
        </form>
       {list.map((item:any)=>{
        return <div>color component</div>
       })}

        </>
    )
}
export default Colorpallete