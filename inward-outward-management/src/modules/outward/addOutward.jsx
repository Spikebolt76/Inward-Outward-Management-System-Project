import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";

const AddEditOutward = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit Outward</span>
                    </div>
                    
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] space-y-10 px-4 py-2">

                    {/* SECTION 1: Outward Basic */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Outward Details
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="outwardNo" className="font-medium">Outward No</label>
                                <input
                                    id="outwardNo"
                                    name="outwardNo"
                                    type="text"
                                    readOnly
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="outwardDate" className="font-medium">Outward Date</label>
                                <input
                                    id="outwardDate"
                                    name="outwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="linkedInwardId" className="font-medium">Linked Inward</label>
                                <select
                                    id="linkedInwardId"
                                    name="linkedInwardId"
                                    className="border rounded-md px-3 py-2 w-full"
                                >
                                    <option value="">Select Inward</option>
                                </select>
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
                                <label htmlFor="toContactId" className="font-medium">From / To</label>
                                <select id="toContactId" name="toContactId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
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

                    {/* SECTION 3: Recipient & Letter Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Letter & Recipient Details
                        </h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterNo" className="font-medium">Letter No</label>
                                <input
                                    id="letterNo"
                                    name="letterNo"
                                    placeholder="Enter Letter No"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterDate" className="font-medium">Letter Date</label>
                                <input
                                    id="letterDate"
                                    name="letterDate"
                                    type="date"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toName" className="font-medium">To Name</label>
                                <input
                                    id="toName"
                                    name="toName"
                                    placeholder="Enter To Name"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toPhone" className="font-medium">Phone</label>
                                <input
                                    id="toPhone"
                                    name="toPhone"
                                    placeholder="Enter Phone"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toEmail" className="font-medium">Email</label>
                                <input
                                    id="toEmail"
                                    name="toEmail"
                                    type="email"
                                    placeholder="Enter Email"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fileNo" className="font-medium">File No</label>
                                <input
                                    id="fileNo"
                                    name="fileNo"
                                    placeholder="Enter File No"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="toAddress" className="font-medium">To Address</label>
                                <textarea
                                    id="toAddress"
                                    name="toAddress"
                                    placeholder="Enter To Address"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="subjectShort" className="font-medium">Subject (Short)</label>
                                <input
                                    id="subjectShort"
                                    name="subjectShort"
                                    placeholder="Enter Short Subject"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div></div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <textarea
                                    id="subject"
                                    name="subject"
                                    placeholder="Enter Subject"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Courier Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Courier Details
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierReceiptNo" className="font-medium">Courier Receipt No</label>
                                <input
                                    id="courierReceiptNo"
                                    name="courierReceiptNo"
                                    placeholder="Enter Receipt No"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierReceiptDate" className="font-medium">Courier Receipt Date</label>
                                <input
                                    id="courierReceiptDate"
                                    name="courierReceiptDate"
                                    type="date"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierCharges" className="font-medium">Courier Charges</label>
                                <input
                                    id="courierCharges"
                                    name="courierCharges"
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    placeholder="0.00"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="chargesPaidBy" className="font-medium">Charges Paid By</label>
                                <select id="chargesPaidBy" name="chargesPaidBy" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Account">Account</option>
                                    <option value="ToPay">To Pay</option>
                                    <option value="Prepaid">Prepaid</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="deliveryStatus" className="font-medium">Delivery Status</label>
                                <select id="deliveryStatus" name="deliveryStatus" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="Pending">Pending</option>
                                    <option value="InTransit">In Transit</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Returned">Returned</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Internal Routing */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Internal Routing
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="dispatchedByName" className="font-medium">Dispatched By</label>
                                <input
                                    id="dispatchedByName"
                                    name="dispatchedByName"
                                    placeholder="Dispatched By"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="departmentId" className="font-medium">Department</label>
                                <select id="departmentId" name="departmentId" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select Department</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="noOfEnclosures" className="font-medium">No of Enclosures</label>
                                <input
                                    id="noOfEnclosures"
                                    name="noOfEnclosures"
                                    type="number"
                                    min="0"
                                    placeholder="No of Enclosures"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="copyTo" className="font-medium">Copy To</label>
                                <input
                                    id="copyTo"
                                    name="copyTo"
                                    placeholder="Copy To"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="smsTo" className="font-medium">SMS To</label>
                                <input
                                    id="smsTo"
                                    name="smsTo"
                                    placeholder="Mobile numbers (comma-separated)"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="emailTo" className="font-medium">Email To</label>
                                <input
                                    id="emailTo"
                                    name="emailTo"
                                    placeholder="Emails (comma-separated)"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6: Return Handling */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Return Handling
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex items-center gap-3">
                                <input
                                    id="isReturned"
                                    name="isReturned"
                                    type="checkbox"
                                    className="w-4 h-4 accent-[#1e6784]"
                                />
                                <label htmlFor="isReturned" className="font-medium">Is Returned</label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="returnDate" className="font-medium">Return Date</label>
                                <input
                                    id="returnDate"
                                    name="returnDate"
                                    type="date"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div></div>

                            <div className="flex flex-col gap-1 col-span-3">
                                <label htmlFor="returnReason" className="font-medium">Return Reason</label>
                                <textarea
                                    id="returnReason"
                                    name="returnReason"
                                    placeholder="Enter Return Reason"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1 col-span-3">
                                <label htmlFor="returnAction" className="font-medium">Return Action</label>
                                <textarea
                                    id="returnAction"
                                    name="returnAction"
                                    placeholder="Enter Return Action Taken"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 7: Attachments & Remarks */}
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
                                <label htmlFor="receiptPath" className="font-medium">Courier Receipt</label>
                                <input id="receiptPath" name="receiptPath" type="file" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="acknowledgePath" className="font-medium">Acknowledgement</label>
                                <input id="acknowledgePath" name="acknowledgePath" type="file" />
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
                            Save Outward
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

export default AddEditOutward;