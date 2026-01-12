import Header from './components/header'
import Sidebar from './components/sidebar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom';

function Root() { 
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className='h-screen flex flex-col'>
      
        <Header 
          isSidebarOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen((s) => !s)}
        />
    

        <div className='flex flex-1'>
          <Sidebar open={sidebarOpen}/>
          <Outlet />
        </div>
      </div>
    </>
  ) 
}

export default Root;
