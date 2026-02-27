import { FaOutdent, FaIndent, FaRightLeft, FaBuilding, FaBoxesPacking, FaGear, FaUser, FaBuildingColumns, FaCalendarDays } from "react-icons/fa6";
import { TbLayoutDashboardFilled, TbReplaceFilled } from "react-icons/tb"
import { HiMiniBuildingOffice2 } from "react-icons/hi2"
import { TiFlowSwitch } from "react-icons/ti";

export const sidebarItems = [
    {label: "Dashboard", icon: TbLayoutDashboardFilled, to: '/'},
    {label: "Office Master", icon: FaBuilding, to: '/offices'},
    {label: "Modes Master", icon: TiFlowSwitch, to: '/modes'},
    {label: "Contact", icon: FaRightLeft, to: '/contacts'},
    {label: "Courier Company", icon: FaBoxesPacking, to: '/courier'},
    {label: "Inward", icon: FaIndent, to: '/inward'},
    {label: "Outward", icon: FaOutdent, to: '/outward'},
    {label: "Users", icon: FaUser, to: '/users'},
    {label: "Institutes", icon: FaBuildingColumns, to: '/institutes'},
    {label: "Departments", icon: HiMiniBuildingOffice2, to: '/departments'},
    {label: "Financial Year", icon: FaCalendarDays, to: '/financialYear'},
    {label: "Settings", icon: FaGear, to: '/settings'}
];  