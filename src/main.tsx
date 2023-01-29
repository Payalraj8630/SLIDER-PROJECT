import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Folder/Signup'
import Home from './Folder/Home'
import Colorpallete from './Folder/Colorpallete'
import Registration from './Folder/Registration'
import Grocer from './Folder/Grocer'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={ <App />}/>
    <Route path="/signup" element={ <Signup/>}/>
    <Route path="/home" element={ <Home/>}/>
    <Route path="/colorpallete" element={ <Colorpallete/>}/>
    <Route path="/registration" element={ <Registration/>}/>
    <Route path="/grocer" element={ <Grocer/>}/>
   </Routes>
   </BrowserRouter>

  </React.StrictMode>,
)
