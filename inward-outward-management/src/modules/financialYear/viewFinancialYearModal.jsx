import { FaCalendarDays, FaXmark } from "react-icons/fa6";
import ActiveBadge from "../../components/activeBadge";
import InactiveBadge from "../../components/inactiveBadge";
import { useEffect } from "react";
import { Field, MonoField } from "../../components/fields";

const ViewFinancialYearModal = ({ onCancel, onEdit, data }) => {

    const {
        finYearId, yearName, startDate, endDate,
        isCurrent, isActive, remarks,
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

                {/* HEADER */}
                <div className="flex justify-between px-10 pt-8 pb-5 shrink-0 bg-white">
                    <div className="flex items-center gap-5">
                        <div className="bg-[#b3d0db] p-4 rounded-md">
                            <FaCalendarDays className="text-[#1a5c77] text-[20px]" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[18px] font-medium leading-10">{yearName}</h2>
                            <span className="text-gray-500 font-mono text-[14px] inline-block">#{finYearId}</span>
                        </div>
                    </div>

                    <div className="self-center flex items-center gap-3">
                        {isCurrent && (
                            <span className="bg-blue-100 text-blue-700 text-[12px] font-medium px-3 py-1 rounded-full">
                                Current Year
                            </span>
                        )}
                        {isActive ? <ActiveBadge /> : <InactiveBadge />}
                    </div>

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
                            <Field label="Financial Year ID" value={finYearId}  className="border-r border-b border-gray-300" />
                            <Field label="Year Name"         value={yearName}   className="border-l border-b border-gray-300" />
                            <Field label="Start Date"        value={startDate}  className="border-r border-t border-gray-300" />
                            <Field label="End Date"          value={endDate}    className="border-l border-t border-gray-300" />
                        </div>
                    </div>

                    {/* MISC */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">MISC.</div>
                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 flex flex-col gap-1">
                                <div className="text-gray-500 text-[12px]">Is Current</div>
                                {isCurrent
                                    ? <span className="inline-flex items-center gap-1 text-[13px] font-medium text-blue-600">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Yes
                                      </span>
                                    : <span className="text-[14px] text-gray-400">No</span>
                                }
                            </div>
                            <div className="border-l border-b border-gray-300 p-5 flex flex-col gap-1">
                                <div className="text-gray-500 text-[12px]">Is Active</div>
                                {isActive
                                    ? <span className="inline-flex items-center gap-1 text-[13px] font-medium text-green-600">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Yes
                                      </span>
                                    : <span className="inline-flex items-center gap-1 text-[13px] font-medium text-red-500">
                                        <span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> No
                                      </span>
                                }
                            </div>
                            <Field label="Remarks" value={remarks} className="border-t col-span-2 border-gray-300" />
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

                {/* FOOTER */}
                <div className="flex items-center justify-between px-10 py-5 bg-white">
                    <div className="text-[13px] text-gray-400">
                        ID <span className="text-gray-700 font-mono ml-2">{finYearId}</span> <br />
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

export default ViewFinancialYearModal;
