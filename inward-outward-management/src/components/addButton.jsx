import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate('add')}
        className="cursor-pointer text-[16px] font-semibold flex items-center rounded-md bg-[#d74a49] text-white p-3 gap-3 hover:opacity-85">
            <FaPlus className="stroke-6"/>
            <span>Add</span>
        </button>
    );
}

export default AddButton;