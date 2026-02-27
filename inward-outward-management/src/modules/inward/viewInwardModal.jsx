import { FaFilePen, FaXmark } from "react-icons/fa6";
import { useEffect } from "react";
import { Field, MonoField } from "../../components/fields";

const ViewInwardModal = ({ onEdit, onCancel, data }) => {
    const {
        inwardId, inwardNo, inwardDate, receivedAt,

        institute: { instituteId, instituteName } = {},
        finYear: { finYearId, finYearName } = {},

        fromOffice: { officeId: fromOfficeId, officeName: fromOfficeName } = {},
        toOffice: { officeId: toOfficeId, officeName: toOfficeName } = {},

        fromContact: { contactId: fromContactId, contactName: fromContactName } = {},
        fromName, fromAddress, fromPhone,

        toPersonName,
        toDepartment: { departmentId: toDepartmentId, departmentName: toDepartmentName } = {},

        transferMode: { transferModeId, transferModeName } = {},

        courierCompany: { courierCompanyId, courierCompanyName } = {},
        trackingNo,

        letterNo, letterDate, subject, subjectShort, description,

        receiptNo, receiptDate,

        documentPath,

        linkedOutward: { outwardId: linkedOutwardId, outwardNo: linkedOutwardNo } = {},

        copyTo, noOfEnclosures, remarks,

        createdBy, updatedBy, created_at, updated_at,
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
                            <FaFilePen className="text-[#1a5c77] text-[20px]" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[18px] font-medium leading-10">
                                {subjectShort || subject || "Inward Entry"}
                            </h2>
                            <span className="text-gray-500 font-mono text-[14px] inline-block">#{inwardNo}</span>
                        </div>
                    </div>

                    <div className="self-center">
                        {transferModeName && (
                            <span className="bg-blue-100 text-blue-700 text-[12px] font-medium px-3 py-1 rounded-full">
                                {transferModeName}
                            </span>
                        )}
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

                    {/* INWARD DETAILS */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">INWARD DETAILS</div>
                        <div className="grid grid-cols-2">
                            <Field label="Inward No"    value={inwardNo}    className="border-r border-b border-gray-300" />
                            <Field label="Inward Date"  value={inwardDate}  className="border-l border-b border-gray-300" />
                            <Field label="Received At"  value={receivedAt}  className="border-r border-b border-gray-300" />
                            <Field label="Receipt No"   value={receiptNo}   className="border-l border-b border-gray-300" />
                            <Field label="Receipt Date" value={receiptDate} className="border-t col-span-2 border-gray-300" />
                        </div>
                    </div>

                    {/* SCOPE */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">SCOPE</div>
                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Institute</div>
                                    <div className="text-[14px]">{instituteName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Institute ID</div>
                                    <div className="text-[14px]">{instituteId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <div className="border-l border-b border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Financial Year</div>
                                    <div className="text-[14px]">{finYearName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Fin Year ID</div>
                                    <div className="text-[14px]">{finYearId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <div className="border-r border-t border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">From Office</div>
                                    <div className="text-[14px]">{fromOfficeName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Office ID</div>
                                    <div className="text-[14px]">{fromOfficeId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <div className="border-l border-t border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">To Office</div>
                                    <div className="text-[14px]">{toOfficeName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Office ID</div>
                                    <div className="text-[14px]">{toOfficeId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SENDER */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">SENDER</div>
                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">From Contact</div>
                                    <div className="text-[14px]">{fromContactName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Contact ID</div>
                                    <div className="text-[14px]">{fromContactId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <Field label="From Name"    value={fromName}  className="border-l border-b border-gray-300" />
                            <Field label="Contact Details" value={fromPhone} className="border-r border-t border-gray-300" />
                            <Field label="From Address" value={fromAddress} className="border-l border-t border-gray-300" />
                        </div>
                    </div>

                    {/* INTERNAL ROUTING */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">INTERNAL ROUTING</div>
                        <div className="grid grid-cols-2">
                            <Field label="To Person" value={toPersonName} className="border-r border-b border-gray-300" />
                            <div className="border-l border-b border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">To Department</div>
                                    <div className="text-[14px]">{toDepartmentName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Dept ID</div>
                                    <div className="text-[14px]">{toDepartmentId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <Field label="Copy To"          value={copyTo}         className="border-r border-t border-gray-300" />
                            <Field label="No of Enclosures" value={noOfEnclosures} className="border-l border-t border-gray-300" />
                        </div>
                    </div>

                    {/* LETTER DETAILS */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">LETTER DETAILS</div>
                        <div className="grid grid-cols-2">
                            <Field label="Letter No"       value={letterNo}     className="border-r border-b border-gray-300" />
                            <Field label="Letter Date"     value={letterDate}   className="border-l border-b border-gray-300" />
                            <Field label="Subject (Short)" value={subjectShort} className="border-t col-span-2 border-b border-gray-300" />
                            <Field label="Subject"         value={subject}      className="border-t col-span-2 border-b border-gray-300" />
                            <Field label="Description"     value={description}  className="border-t col-span-2 border-gray-300" />
                        </div>
                    </div>

                    {/* COURIER */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">COURIER</div>
                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 gap-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Courier Company</div>
                                    <div className="text-[14px]">{courierCompanyName ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Company ID</div>
                                    <div className="text-[14px]">{courierCompanyId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                            <Field label="Tracking No" value={trackingNo} className="border-l border-b border-gray-300" />
                            <div className="border-t border-gray-300 p-5 gap-2 col-span-2 flex flex-row">
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Linked Outward</div>
                                    <div className="text-[14px]">{linkedOutwardNo ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <div className="text-gray-500 text-[12px]">Outward ID</div>
                                    <div className="text-[14px]">{linkedOutwardId ?? <span className="text-gray-300">—</span>}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ATTACHMENTS & REMARKS */}
                    <div>
                        <div className="text-gray-600 text-[13px] font-medium mb-2">ATTACHMENTS & REMARKS</div>
                        <div className="grid grid-cols-2">
                            <div className="border-r border-b border-gray-300 p-5 flex flex-col gap-1">
                                <div className="text-gray-500 text-[12px]">Document</div>
                                {documentPath
                                    ? <a href={documentPath} target="_blank" rel="noopener noreferrer"
                                        className="text-[14px] text-[#1e6784] underline underline-offset-2 break-all">
                                        View Document
                                      </a>
                                    : <span className="text-gray-300">—</span>
                                }
                            </div>
                            <Field label="Remarks" value={remarks} className="border-l border-b border-gray-300" />
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
                        Inward <span className="text-gray-700 font-mono ml-2">{inwardNo}</span> <br />
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

export default ViewInwardModal;