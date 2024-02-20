import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navbar";

import Home from "./views/Home"
import Contacto from "./views/Contacto";
import Menu from "./views/Menu"

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={ <Menu /> }/>
        <Route path='/Home' element={ <Home /> }/>
        <Route path='/Contacto' element={ <Contacto />} />
      </Routes>
    </>
  )
}

export default App
