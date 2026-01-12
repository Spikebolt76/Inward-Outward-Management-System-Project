import NavItem from './navItem';
import { sidebarItems } from '../utils/sidebarItems'
import React from 'react';

const Sidebar = ({ open }) => {
    return (
        <aside 
        className={`
            bg-[#f9fafb]
            transition-[width,padding] duration-300 ease-in-out
            overflow-hidden shrink-0 border-gray-300
            ${open ? "w-110.5 px-6 border-r" : "w-0 px-0 border-0"}
        `}
        > 

            <div className="py-8">
                {sidebarItems.map((item) => (
                    <React.Fragment key={item.label} className="flex flex-col">
                        <NavItem 
                            icon={item.icon}
                            label={item.label}
                            to={item.to}
                            open={open}/> 
                        {['Dashboard', 'In-Out'].includes(item.label) && (
                            <hr className='border-gray-400 my-5'/>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </aside>
  );
};

export default Sidebar;