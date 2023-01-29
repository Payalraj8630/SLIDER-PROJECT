import { useState } from "react"
import Navbar from "../Components/Navbar"

function Home(){ 

        const [width,setWidth] = useState(window.innerWidth)
        return(
       <div>
        <Navbar/> 
<section className="text-center">
    <h1>Window Screeen Size</h1>
    <h1>{'${width}px'}</h1>

</section>
        </div>
    )
}
export default Home