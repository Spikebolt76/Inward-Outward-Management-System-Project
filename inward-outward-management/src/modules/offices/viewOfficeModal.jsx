import { FaBuilding, FaXmark } from "react-icons/fa6"
import { useEffect } from "react";

const ViewOfficeModal = ({onEdit, onCancel, data}) => {

    const {officeId, officeName, Institute: { instituteId, instituteName }, Department: { departmentID, departmentName }, 
        openingDate, openingInwardNo, openingOutwardNo, isActive, remarks, createdBy, 
        updatedBy, created_at, updated_at} = data;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onCancel();
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    });
    
    return(
        <div className="bg-black/40 fixed flex inset-0 justify-center items-center animate-fadeIn" onClick={onCancel}>
            
            <div className="bg-[#f9fafb] rounded-xl max-h-260 w-230 overflow-hidden animate-slideUp flex flex-col" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between px-10 pt-8 pb-5 shrink-0">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#b3d0db] p-4 rounded-md">
                            <FaBuilding className="text-[#1a5c77] text-[20px]"/>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-[18px] font-medium leading-10">{officeName}</h2>
                            <span className="text-gray-500 font-mono text-[14px] inline-block">{officeId}</span>
                        </div>

                    </div>

                    <div className="self-center">{isActive ? <ActiveBadge /> : <InactiveBadge />}</div>

                    <button className="cursor-pointer text-gray-500 hover:bg-gray-300 hover:text-gray-800 rounded duration-100 ease-in-out p-1 self-start"
                    onClick={onCancel}>
                        <FaXmark className="text-[18px]"/>
                    </button>
                </div>

                <hr className="border-gray-300 border"/>

                <div className="p-10 overflow-y-auto flex flex-col gap-8 flex-1">
                    <div className="">
                        <div className="text-gray-600 text-[13px] font-medium">DETAILS</div>

                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Office ID</div>
                                <div className="text-[14px]">{officeId}</div>
                            </div>
                            <div className="border-l border-b border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Office Name</div>
                                <div className="text-[14px]">{officeName}</div>
                            </div>
                            <div className="border-y border-r border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Institute Name</div>
                                    <div className="text-[14px]">{instituteName}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">instituteId</div>
                                    <div className="text-[14px]">{instituteId}</div>
                                </div>
                            </div>
                            <div className="border-y border-l border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Department Name</div>
                                    <div className="text-[14px]">{departmentName}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">departmentID</div>
                                    <div className="text-[14px]">{departmentID}</div>
                                </div>
                            </div>
                            <div className="border-y border-r border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Opening Inward No</div>
                                <div className="text-[14px]">{openingInwardNo}</div>
                            </div>
                            <div className="border-y border-l border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Opening Outward No</div>
                                <div className="text-[14px]">{openingOutwardNo}</div>
                            </div>
                            <div className="border-y col-span-2 border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Opening Date</div>
                                <div className="text-[14px]">{openingDate}</div>
                            </div>
                            <div className="border-t col-span-2 border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Remarks</div>
                                <div className="text-[14px]">{remarks}</div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-gray-600 text-[13px] font-medium">AUDIT TRAIL</div>

                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Created By</div>
                                <div className="font-mono text-[14px]">{createdBy}</div>
                            </div>
                            <div className="border-l border-b border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Created</div>
                                <div className="font-mono text-[14px]">{created_at}</div>
                            </div>
                            <div className="border-r border-t border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Modified By</div>
                                <div className="font-mono text-[14px]">{updatedBy}</div>
                            </div>
                            <div className="border-l border-t border-gray-300 p-5 gap-2 flex flex-col">
                                <div className="text-gray-500 text-[12px]">Modified</div>
                                <div className="font-mono text-[14px]">{updated_at}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300 border"/>

                <div className="flex items-center justify-between px-10 py-5"> 
                    <div className="text-[13px] text-gray-400">
                        ID <span className="text-gray-700 font-mono ml-2">{officeId}</span> <br />
                        Last updated <span className="text-gray-700 font-mono ml-2">{updated_at}</span>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-8 py-2 rounded-md bg-[#1e6784] text-[14px] text-white hover:bg-[#175067] transition cursor-pointer"
                        onClick={onCancel}>
                            Close
                        </button>
                        <button className="px-8 py-2 rounded-md bg-[#b3d0db] text-[14px] text-[#1a5c77] hover:bg-[#a1bbc5] transition cursor-pointer"
                        onClick={onEdit}>
                            Edit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ViewOfficeModal;