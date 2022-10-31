import React from "react"
import Home from "./pages/home"
import Navbar from "./pages/navbar"
import Menu from "./pages/menu"
import Pricing from "./pages/pricing"
import Contact from "./pages/contact"
import Login from "./pages/login"

function App(){
   return <div>
        <Navbar />
        <Home />
        <Menu />
        <Pricing />
        <Contact />
        <Login />
    </div>
}

export default App;