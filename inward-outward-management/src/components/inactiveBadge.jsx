import { FaCircleXmark } from "react-icons/fa6"

const InactiveBadge = () => {
    return (
        <div className="rounded-full bg-red-300 flex gap-2 px-3 py-2 text-[12px] items-center tracking-wide">
            <FaCircleXmark className="text-red-900"/>
            <span className="text-red-900">Inactive</span>
        </div>
    );
};

export default InactiveBadge;
