import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import Root from './Root.jsx'
import Login from './pages/login'
import PageNotFound from './pages/404NotFound.jsx'

import Dashboard from './modules/dashboard.jsx'
import Offices from './modules/offices/offices.jsx'
import Modes from './modules/modes/modes.jsx'
import FromTo from './modules/fromTo/fromTo.jsx'
import Courier from './modules/courier/courier.jsx'
import Inward from './modules/inward/inward.jsx'
import Outward from './modules/outward/outward.jsx'
import InOut from './modules/inOut/inOut.jsx'

import AddModes from './modules/modes/addModes.jsx'
import AddOffices from './modules/offices/addOffices.jsx'
import AddFromTo from './modules/fromTo/addFromTo.jsx'
import AddCourier from './modules/courier/addCourier.jsx'
import AddInward from './modules/inward/addInward.jsx'
import AddOutward from './modules/outward/addOutward.jsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  { 
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      
      {
        path: "offices",
        element: <Offices />
      },
      { path: "offices/add", element: <AddOffices />},

      {
        path: "modes",
        element: <Modes />
      },
      { path: "modes/add", element: <AddModes />},
      
      {
        path: "from-to",
        element: <FromTo />
      },
      { path: "from-to/add", element: <AddFromTo /> },

  
      {
        path: "courier",
        element: <Courier />
      },
      { path: "courier/add", element: <AddCourier />},
   
      {
        path: "inward",
        element: <Inward />
      },
      { path: "inward/add", element: <AddInward />},
  
      {
        path: "outward",
        element: <Outward />
      },
      {  path: "outward/add", element: <AddOutward />},

      {
        path: "in-out",
        element: <InOut />
      }
    ] 
  },
  {
    path: "/*",
    element: <PageNotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
