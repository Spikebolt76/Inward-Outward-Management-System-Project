import { FaCircleCheck } from "react-icons/fa6";

const ActiveBadge = () => {
    return (
        <div className="rounded-full bg-green-300 flex gap-2 px-3 py-2 text-[12px] items-center tracking-wide">
            <FaCircleCheck className="text-green-900"/>
            <span className="text-green-900">Active</span>
        </div>
    );
}

export default ActiveBadge;