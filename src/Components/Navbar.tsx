import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to={"/Navbar"}>Navbar</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to={"/Home"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={"/Slider"}>Slider</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/Colorpallete"}>Colorpallete</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link "to={"/grocer"}>Grocer</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to={"/registration"}>Registration</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link " to={"/Signup"}>Signup</Link>
          </li>
      </ul>
    
    </div>
  </div>
</nav>
      </>
    )
}
export default  Navbar