// import React from 'react'
import"./App.css"

import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"

import Sidebar from "./components/Sidebar"
import Login from "./components/Login/Login"


const App = () => {
  return (
    <>
    <div className="header"><Header /></div>
    <div  className="center"> <Sidebar/></div>
    <div className="footer"><Login/></div>
    
    
    </>
  )
}

export default App