import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const NavItem = ({ icon, label, to = '/', open, className }) => {
    const IconComponent = icon;

    return(
        <NavLink to={to}
            className={({ isActive }) => `flex items-center gap-8 
            px-4 py-5
            rounded-md cursor-pointer
            transition-colors w-full 
            ${isActive ? 'bg-[#b3d0db] ' : 'hover:bg-gray-200'} ` 
            + className}>
           
            <IconComponent className='text-4xl shrink-0 text-[#18536c]' />

            <span className={`whitespace-nowrap text-[18px] font-light text-gray-900 transition-all duration-300 ${open ? "opacity-100" : "opacity-0 w-0"}`}
            >{label}</span>

            <IoIosArrowForward className="text-2xl ml-auto text-gray-400 shrink-0"/>
        </NavLink>
    );
}

export default NavItem; 