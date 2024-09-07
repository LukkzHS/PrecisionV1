import React from 'react'
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import { FloatingWhatsApp } from 'react-floating-whatsapp'



function App() {


  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    <FloatingWhatsApp className='floating-whatsapp'/>
    </>
  )
}

export default App