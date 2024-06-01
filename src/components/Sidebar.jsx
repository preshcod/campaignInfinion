import { FaMessage, FaPlus} from "react-icons/fa6";
import {Link, NavLink} from 'react-router-dom'
import { CiCircleQuestion } from "react-icons/ci";

export default function sidebar() {
  return (
    <div className="bg-[#f0f4f4] fixed top-0 bottom-0 w-[270px] h-screen py-4 flex flex-col items-center gap-5">
      <div className="flex items-center gap-2 text-xl">
      <FaMessage  className="text-3xl"/>
        <span className="font-semibold" >Scrutz</span>
      </div>

      <div className="flex items-center flex-col mt-5">
        <Link to='newcampaign'className="flex items-center bg-[#247B7B] px-2 py-1 gap-2 text-sm text-white">
        <FaPlus />
        New Campaign
        </Link>

        <div className="flex flex-col gap-2  items-center mt-5">
          <NavLink className={({ isActive }) => (isActive ? 'bg-white text-[#247B7B] ' : 'bg-transparent text-black')} style={{padding: '10px 20px'}} to='/'>Overview</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'bg-white text-[#247B7B]' : 'bg-transparent text-black')}  style={{padding: '10px 20px'}} to='/campaign'>Campaign</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'bg-white text-[#247B7B] ' : 'bg-transparent text-black')}  style={{padding: '10px 20px'}} to='/marketing'>Marketing Intelligence</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'bg-white text-[#247B7B] ' : 'bg-transparent text-black')}  style={{padding: '10px 20px'}} to='/account'>Account Settings</NavLink>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 bg-white py-4 px-7">
        <CiCircleQuestion size={30}/>
        <p>Need help</p>
        <p className="text-center text-sm mx-3 my-5">We’re readily available <br /> to provide help</p>
        <button className="border border-blue-600 text-blue-600 px-2 py-1 rounded-md">Get help</button>
      </div>
    </div>
  )
}
