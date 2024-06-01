
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Sidebar /> 
        
        <main className="ml-[270px]">{<Outlet />}</main>
    </div>
    
  )
}
