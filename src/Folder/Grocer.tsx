import { useState } from "react"
import {  Button, Col, Container, Row } from "react-bootstrap"
import Navbar from "../Components/Navbar"
import {FaPenSquare,FaTrash} from "react-icons/fa"
import "./Grocer.css"


const getLocalstorage =() =>{
    const list =localStorage.grtItem("list")
    if (list) {}
}

function Grocer(){
 const[inputValue,setInputvalue] =useState("")
 const[list,setList]=useState([]) as any
 const[isEditing,setIsEditing] =useState(false)
 const[editId,setEditId] =useState(0)
 console.log({editId, isEditing})


    const handleSubmit =(e:any) => {
        e.preventDefault()
       if(editId && isEditing) {
        setList(
            list.map((item:any) => {
                if (item.id ===editId){
                    return{...item,title:inputValue}
                }
                return item
            })
        )
        setIsEditing(false)
        setEditId(0)
       } else{ const newItem ={
        id: new Date().getTime().toString(),
         title:inputValue
        
       }

       setList([...list,newItem]) 
       setInputvalue("") 
        }

    }

    const removeItem =(id:number) => {
        setList(list.filter((item:any) =>item.id !==id ))
    }

    const editItem =(id:number) => {
        const foundItem =list.find((item:any)=> item.id ===id)
        setInputvalue(foundItem.title)
        setEditId(id)
        setIsEditing(true)
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
             <p 
             onClick={() => editItem(id)}
             className="edit-icon">
                <FaPenSquare/>
             </p>
              <p 
              onClick={() => removeItem(id)}
              className="delete-icon">
                <FaTrash/>
             </p>
             </div>
              })}
              <Button variant="danger"
              onClick={() => {
                setList([])
              }}
              >Clear all</Button>
              
                </Col>
            </Row>
        </Container>
        </section>
    )
}
export default Grocer