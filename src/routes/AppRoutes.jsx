import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Menu from "../views/Menu"
import About from "../views/About"
import Home from "../views/Home"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  ) 
}

export default AppRoutes