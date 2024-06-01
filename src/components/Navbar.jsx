import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className='ml-[270px] px-[50px] flex items-center justify-between py-4 '>
      <div className=" flex items-center w-[300px] border-2 px-3 py-2 relative" >
        <input type="text" placeholder="Search"  className="focus:outline-none bg-transparent w-full placeholder:text-sm"/>
        <CiSearch className="text-2xl absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer" />
      </div>
      <div className="border-2 flex items-center gap-2 px-3 py-2">
        <LuBell />
        <div className="border-l flex items-center px-2 gap-3">
          <FaUserAlt />
          <p className="flex items-center gap-2 text-lg">BigTech <RiArrowDropDownLine  size={32}/> </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;