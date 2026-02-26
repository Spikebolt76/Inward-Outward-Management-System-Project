import { FaBuilding, FaXmark } from "react-icons/fa6"
import { useEffect } from "react";
import ActiveBadge from "../../components/activeBadge";
import InactiveBadge from "../../components/inactiveBadge";
import { Field, MonoField } from "../../components/fields";

const ViewOfficeModal = ({ onEdit, onCancel, data }) => {
    const {
        officeId, officeName,
        institute: { instituteId, instituteName } = {},
        department: { departmentId, departmentName } = {},
        email, phoneNo, address,
        openingDate, openingInwardNo, openingOutwardNo,
        isActive, remarks,
        createdBy, updatedBy, created_at, updated_at
    } = data;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onCancel();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onCancel]);

    return (
        <div className="bg-black/40 fixed flex inset-0 justify-center items-center animate-fadeIn" onClick={onCancel}>

            <div className="bg-[#f9fafb] rounded-xl max-h-260 w-230 overflow-hidden animate-slideUp flex flex-col" onClick={(e) => e.stopPropagation()}>

                <div className="flex justify-between px-10 pt-8 pb-5 shrink-0 bg-white">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#b3d0db] p-4 rounded-md">
                            <FaBuilding className="text-[#1a5c77] text-[20px]" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[18px] font-medium leading-10">{officeName}</h2>
                            <span className="text-gray-500 font-mono text-[14px] inline-block">#{officeId}</span>
                        </div>
                    </div>

                    <div className="self-center">{isActive ? <ActiveBadge /> : <InactiveBadge />}</div>

                    <button
                        className="cursor-pointer text-gray-500 hover:bg-gray-300 hover:text-gray-800 rounded duration-100 ease-in-out p-1 self-start"
                        onClick={onCancel}
                        aria-label="Close"
                    >
                        <FaXmark className="text-[18px]" />
                    </button>
                </div>

                <hr className="border-gray-300 border" />

                <div className="p-10 overflow-y-auto flex flex-col gap-8 flex-1">

                    {/* DETAILS */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">DETAILS</div>
                        
                        <div className="grid grid-cols-2">
                            <Field label="Office ID"   value={officeId}   className="border-r border-b border-gray-300" />
                            <Field label="Office Name" value={officeName} className="border-l border-b border-gray-300" />

                            <div className="border-y border-r border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Institute</div>
                                    <div className="text-[14px]">{instituteName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Institute ID</div>
                                    <div className="text-[14px]">{instituteId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <div className="border-y border-l border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Department</div>
                                    <div className="text-[14px]">{departmentName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Department ID</div>
                                    <div className="text-[14px]">{departmentId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>

                            <Field label="Opening Inward No"  value={openingInwardNo}  className="border-y border-r border-gray-300" />
                            <Field label="Opening Outward No" value={openingOutwardNo} className="border-y border-l border-gray-300" />
                            <Field label="Opening Date"       value={openingDate}      className="border-y col-span-2 border-gray-300" />
                            <Field label="Remarks"            value={remarks}          className="border-t col-span-2 border-gray-300" />
                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">CONTACT INFORMATION</div>
                        <div className="grid grid-cols-2">
                            <Field label="Email"    value={email}   className="border-r border-b border-gray-300" />
                            <Field label="Phone No" value={phoneNo} className="border-l border-b border-gray-300" />
                            <Field label="Address"  value={address} className="border-t col-span-2 border-gray-300" />
                        </div>
                    </div>

                    {/* AUDIT TRAIL */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">AUDIT TRAIL</div>
                        <div className="grid grid-cols-2">
                            <MonoField label="Created By"  value={createdBy}  className="border-r border-b border-gray-300" />
                            <MonoField label="Created"     value={created_at} className="border-l border-b border-gray-300" />
                            <MonoField label="Modified By" value={updatedBy}  className="border-r border-t border-gray-300" />
                            <MonoField label="Modified"    value={updated_at} className="border-l border-t border-gray-300" />
                        </div>
                    </div>

                </div>

                <hr className="border-gray-300 border" />

                <div className="flex items-center justify-between px-10 py-5 bg-white">
                    <div className="text-[13px] text-gray-400">
                        ID <span className="text-gray-700 font-mono ml-2">{officeId}</span> <br />
                        Last updated <span className="text-gray-700 font-mono ml-2">{updated_at}</span>
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-[14px] text-white hover:bg-[#175067] transition cursor-pointer"
                            onClick={onCancel}>
                            Close
                        </button>
                        <button
                            className="px-8 py-2 rounded-md bg-[#b3d0db] text-[14px] text-[#1a5c77] hover:bg-[#a1bbc5] transition cursor-pointer"
                            onClick={() => onEdit(data)}>
                            Edit
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewOfficeModal;