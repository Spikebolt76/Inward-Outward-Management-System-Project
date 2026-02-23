import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";

const AddEditInward = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit Inward</span>
                    </div>
                    
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] space-y-10 px-4 py-2">

                    {/* SECTION 1: Inward Basic */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Inward Details
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="inwardNo" className="font-medium">Inward No</label>
                                <input
                                    id="inwardNo"
                                    name="inwardNo"
                                    type="text"
                                    readOnly
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="inwardDate" className="font-medium">Inward Date</label>
                                <input
                                    id="inwardDate"
                                    name="inwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receivedAt" className="font-medium">Received Date</label>
                                <input
                                    id="receivedAt"
                                    name="receivedAt"
                                    type="datetime-local"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: Mode & Offices */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Mode & Offices
                        </h3>

                        <div className="grid grid-cols-2 gap-7">
                            
                            <div className="flex flex-col gap-1">
                                <label htmlFor="transferModeId" className="font-medium">Mode</label>
                                <select id="transferModeId" name="transferModeId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Mode</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromContactId" className="font-medium">From / To</label>
                                <select id="fromContactId" name="fromContactId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select From / To</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromOfficeId" className="font-medium">From Office</label>
                                <select id="fromOfficeId" name="fromOfficeId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Office</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toOfficeId" className="font-medium">To Office</label>
                                <select id="toOfficeId" name="toOfficeId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Office</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierCompanyId" className="font-medium">Courier Company</label>
                                <select id="courierCompanyId" name="courierCompanyId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Courier</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="trackingNo" className="font-medium">Tracking No</label>
                                <input
                                    id="trackingNo"
                                    name="trackingNo"
                                    placeholder="Enter Tracking No"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: Letter Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Letter Details
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterNo" className="font-medium">Letter No</label>
                                <input id="letterNo" name="letterNo" placeholder="Enter Letter No" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterDate" className="font-medium">Letter Date</label>
                                <input id="letterDate" name="letterDate" type="date" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromName" className="font-medium">From Name</label>
                                <input id="fromName" name="fromName" placeholder="Enter From Name" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromPhone" className="font-medium">Contact Details</label>
                                <input id="fromPhone" name="fromPhone" placeholder="Enter Contact Details" className="border px-3 py-2 rounded-md" />
                            </div>
                            
                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="fromAddress" className="font-medium">From Address</label>
                                <textarea
                                    id="fromAddress"
                                    name="fromAddress"
                                    placeholder="Enter From Address"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="subjectShort" className="font-medium">Subject (Short)</label>
                                <input id="subjectShort" name="subjectShort" placeholder="Enter Short Subject" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receiptNo" className="font-medium">Receipt No</label>
                                <input id="receiptNo" name="receiptNo" placeholder="Enter Receipt No" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receiptDate" className="font-medium">Receipt Date</label>
                                <input id="receiptDate" name="receiptDate" type="date" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <textarea
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter Subject"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="description" className="font-medium">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter Description"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Routing */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Internal Routing
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="toPersonName" className="font-medium">To Person</label>
                                <input id="toPersonName" name="toPersonName" placeholder="To Person" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toDepartmentId" className="font-medium">To Department</label>
                                <select id="toDepartmentId" name="toDepartmentId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Department</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="noOfEnclosures" className="font-medium">No of Enclosures</label>
                                <input id="noOfEnclosures" name="noOfEnclosures" type="number" min="0" placeholder="No of Enclosures" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="copyTo" className="font-medium">Copy To</label>
                                <input id="copyTo" name="copyTo" placeholder="Copy To" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1 col-span-2">
                                <label htmlFor="linkedOutwardId" className="font-medium">Linked Outward</label>
                                <select id="linkedOutwardId" name="linkedOutwardId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Linked Outward (if any)</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Attachments */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Attachments & Remarks
                        </h3>

                        <div className="grid grid-cols-2 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="documentPath" className="font-medium">Document</label>
                                <input id="documentPath" name="documentPath" type="file" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="remarks" className="font-medium">Remarks</label>
                                <textarea
                                    id="remarks"
                                    name="remarks"
                                    placeholder="Remarks"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer">
                            Save Inward
                        </button>

                        <button
                            type="reset"
                            className="px-8 py-2 rounded-md bg-[#b3d0db] text-[#1a5c77] hover:bg-[#a1bbc5] transition cursor-pointer">
                            Clear
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEditInward;