import { useState } from "react"
import {  Col, Container, Row } from "react-bootstrap"
import Navbar from "../Components/Navbar"
import {BsFillPencilFill,BsFillTrashFill, BsJustify} from "react-icons/bs"

function Grocer(){
 const[inputValue,setInputvalue] =useState("")
 const[list,setList]=useState([]) as any

    const handleSubmit =(e:any) => {
        e.preventDefault()
        const newItem={
           id: new Date().getTime().toString(),
            title:inputValue
        }
           setList([...list,newItem]) 
           setInputvalue("") 
    }
    
    return(
        <section>
            <Navbar/>
        <Container>
            <Row className="text-center">
                <Col md={12}>
                <h1>Grocery List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="e.g. maggie" onChange ={(e:any) =>setInputvalue(e.target.value)}
                    name="item"  value={inputValue}/>
                    <button type="submit" className="btn btn-info">Create</button>
                </form>
                </Col>
                <Col md={12}>
              {list.map((item:any) => {
                const{id,title}=item
                return <div key={id} 
                style={{display:"flex" ,
                 justifyContent:"center",
                 fontSize:"20px"
                 }}
                 >
                
                    <p>{title}</p>
             <p>
                <BsFillPencilFill/>
             </p>
              <p>
                <BsFillTrashFill/>
             </p>
             </div>
              })}
              
              
                </Col>
            </Row>
        </Container>
        </section>
    )
}
export default Grocer