import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Fetch from './fetchapi'
import Fetchs from './asyncapi'
import Hero from './hero'
import Navbar from './navbars'
import AboutSecton from './about'
import Contact from './contactform'
//import './App.css'

function App() {  

  return (
    <>
 <Navbar/>
   <AboutSecton/>
  <Contact/>
    </>
  )
}

export default App
