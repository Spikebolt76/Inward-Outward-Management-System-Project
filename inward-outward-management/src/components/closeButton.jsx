import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
const CloseButton = () => {
    const navigate = useNavigate();
    return(
        <button className="self-center hover:bg-gray-300 rounded"
            onClick={() => navigate(-1)}>
            <FaXmark className="text-[24px]"/>
        </button>
    );
}

export default CloseButton;