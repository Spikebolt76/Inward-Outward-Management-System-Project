import { NavLink } from "react-router-dom";
import ConfirmDeleteModal from "../components/confirmDeleteModal";
import ViewOfficeModal from "../modules/offices/viewOfficeModal";

const PageNotFound = () => {
    
    return(
        <div className="p-10">
            <h1 className="m-10 text-6xl font-semibold">404: Page Not Found</h1>

            <NavLink to="/" className="m-10 inline-block hover:opacity-80 text-4xl text-white border-3 border-[#e4bdbd] rounded-lg p-3 bg-[#d74a49]">
                Return To Dashboard
            </NavLink>
        </div>        
    );
}

export default PageNotFound;

