import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
const CloseButton = () => {
    const navigate = useNavigate();
    return(
        <button className="cursor-pointer self-center text-gray-500 hover:bg-gray-300 hover:text-gray-800 rounded duration-100 ease-in-out"
            onClick={() => navigate(-1)}>
            <FaXmark className="text-[23px]"/>
        </button>
    );
}

export default CloseButton;