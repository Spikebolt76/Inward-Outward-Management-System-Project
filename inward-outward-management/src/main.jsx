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
import Contact from './modules/contact/contact.jsx'
import Courier from './modules/courier/courier.jsx'
import Inward from './modules/inward/inward.jsx'
import Outward from './modules/outward/outward.jsx'
import InOut from './modules/inOut/inOut.jsx'
import Users from './modules/user/users.jsx'
import Institutes from './modules/institute/institute.jsx'
import Departments from './modules/department/department.jsx'

import AddMode from './modules/modes/addMode.jsx'
import AddOffice from './modules/offices/addOffice.jsx'
import AddContact from './modules/contact/addContact.jsx'
import AddCourier from './modules/courier/addCourier.jsx'
import AddInward from './modules/inward/addInward.jsx'
import AddOutward from './modules/outward/addOutward.jsx'
import AddUser from './modules/user/addUser.jsx'
import AddInstitute from './modules/institute/addInstitute.jsx'
import AddDepartment from './modules/department/addDepartment.jsx'



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
      { path: "offices/add", element: <AddOffice />},
      { path: "offices/:id", element: <AddOffice />},

      {
        path: "modes",
        element: <Modes />
      },
      { path: "modes/add", element: <AddMode />},
      { path: "offices/:id", element: <AddOffice />},
      
      {
        path: "contact",
        element: <Contact />
      },
      { path: "contact/add", element: <AddContact /> },
      { path: "contact/:id", element: <AddContact />},

  
      {
        path: "courier",
        element: <Courier />
      },
      { path: "courier/add", element: <AddCourier />},
      { path: "courier/:id", element: <AddCourier />},
   
      {
        path: "inward",
        element: <Inward />
      },
      { path: "inward/add", element: <AddInward />},
      { path: "inward/:id", element: <AddInward />},
  
      {
        path: "outward",
        element: <Outward />
      },
      { path: "outward/add", element: <AddOutward />},
      { path: "outward/:id", element: <AddOutward />},

      {
        path: "in-out",
        element: <InOut />
      },

      {
        path: "users",
        element: <Users />
      },
      { path: "users/add", element: <AddUser />},
      { path: "users/:id", element: <AddUser />},

      {
        path: "institutes",
        element: <Institutes />
      },
      { path: "institutes/add", element: <AddInstitute />},
      { path: "institutes/:id", element: <AddInstitute />},

      {
        path: "departments",
        element: <Departments />
      },
      { path: "departments/add", element: <AddDepartment />},
      { path: "departments/:id", element: <AddDepartment />},
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
