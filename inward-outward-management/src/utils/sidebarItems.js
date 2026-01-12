import { FaOutdent, FaIndent, FaRightLeft, FaBuilding, FaBoxesPacking, FaGear, FaB } from "react-icons/fa6";
import { TbLayoutDashboardFilled, TbReplaceFilled } from "react-icons/tb"
import { TiFlowSwitch } from "react-icons/ti";

export const sidebarItems = [
    {label: "Dashboard", icon: TbLayoutDashboardFilled, to: '/'},
    {label: "Office Master", icon: FaBuilding, to: '/offices'},
    {label: "Modes Master", icon: TiFlowSwitch, to: '/modes'},
    {label: "From / To", icon: FaRightLeft, to: '/from-to'},
    {label: "Courier Company", icon: FaBoxesPacking, to: '/courier'},
    {label: "Inward", icon: FaIndent, to: '/inward'},
    {label: "Outward", icon: FaOutdent, to: '/outward'},
    {label: "In-Out", icon: TbReplaceFilled, to: '/in-out'},
    {label: "Settings", icon: FaGear, to: '/settings'}
];  