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
                                <label htmlFor="InwardNo" className="font-medium">Inward No</label>
                                <input
                                    id="InwardNo"
                                    type="text"
                                    readOnly
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="InwardDate" className="font-medium">Inward Date</label>
                                <input
                                    id="InwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ReceivedDate" className="font-medium">Received Date</label>
                                <input
                                    id="ReceivedDate"
                                    type="date"
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
                                <label htmlFor="Mode" className="font-medium">Mode</label>
                                <select id="Mode" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option>Select Mode</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="FromTo" className="font-medium">From / To</label>
                                <select id="FromTo" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option>Select From / To</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="FromOffice" className="font-medium">From Office</label>
                                <select id="FromOffice" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option>Select Office</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ToOffice" className="font-medium">To Office</label>
                                <select id="ToOffice" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option>Select Office</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="Courier" className="font-medium">Courier Company</label>
                                <select id="Courier" className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500">
                                    <option>Select Courier</option>
                                </select>
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
                                <input id="letterNo" placeholder="Enter Letter No" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterDate" className="font-medium">Letter Date</label>
                                <input id="letterDate" type="date" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromName" className="font-medium">From Name</label>
                                <input id="fromName" placeholder="Enter From Name" className="border px-3 py-2 rounded-md" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="contactDetails" className="font-medium">Contact Details</label>
                                <input id="contactDetails" placeholder="Enter Contact Details" className="border px-3 py-2 rounded-md" />
                            </div>
                            
                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="fromAddress" className="font-medium">From Address</label>
                                <textarea
                                    id="fromAddress"
                                    placeholder="Enter From Address"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <textarea
                                    id="subject"
                                    placeholder="Enter Subject"
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
                            <input placeholder="To Person" className="border px-3 py-2 rounded-md" />
                            <input placeholder="No of Copies" className="border px-3 py-2 rounded-md" />
                            <input placeholder="Copy To" className="border px-3 py-2 rounded-md" />
                        </div>
                    </section>

                    {/* SECTION 5: Attachments */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Attachments & Remarks
                        </h3>

                        <div className="grid grid-cols-2 gap-7">
                            <input type="file" />
                            <textarea
                                placeholder="Remarks"
                                className="border px-3 py-2 rounded-md"
                            />
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex justify-center gap-7 pt-6">
                        <button className="bg-blue-600 text-white px-10 py-2 rounded-md">
                            Save Inward
                        </button>
                        <button type="reset" className="border px-10 py-2 rounded-md">
                            Clear
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEditInward;
