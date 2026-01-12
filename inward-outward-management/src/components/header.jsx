import { FaRegBell, FaBars, FaBarsStaggered } from 'react-icons/fa6';
import CAlogo from '../assets/C&A.png'
import CAText from '../assets/Text_2.svg'
import caine from '../assets/caine_wirebacks.png'

const Header = ({isSidebarOpen, toggleSidebar}) => {

    return( 
        <header className="flex justify-between h-[66.8px] px-[10px] py-[8px] border-b border-gray-300 bg-white">
            <div className="ml-6 flex items-center gap-6">
                <div className="flex gap-4 pr-6 border-r border-gray-400">
                    <img src={CAlogo} className='size-20 cursor-pointer' alt="C&A" />
                    <img src={CAText} className='w-70 h-auto' alt="Inward-Outward Management Interface" />
                </div>
                <button onClick={toggleSidebar} className='cursor-pointer h-10 w-10 relative' >
                     <FaBars className={`text-[25px] absolute inset-0 transition-all duration-200 
                        ${isSidebarOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100'}`}/>
                     <FaBarsStaggered className={`text-[25px] absolute inset-0 transition-all duration-200 
                        ${isSidebarOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-75'}`}/>
                </button>
               
            </div>

            <div className="flex items-center gap-6">
                <button className='cursor-pointer border-none rounded-full p-3 bg-gray-200'>
                    <FaRegBell className='text-[22px]'/>
                </button>

                <div className="pl-6 flex items-center gap-5 mr-8 border-l border-gray-400">
                    <div className="flex flex-col">
                        <span className="text-[16px] font-normal ">Caine Wirebacks</span>
                        <span className="text-[13px] text-gray-700">Office Administrator</span>
                    </div>
                    <span className="w-19 h-auto cursor-pointer"> 
                        <img src={caine} alt="admin pfp" className='s-full rounded-xl shadow-xl'/>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;