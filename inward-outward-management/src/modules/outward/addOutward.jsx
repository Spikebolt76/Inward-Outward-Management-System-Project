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
                                <label htmlFor="OutwardNo" className="font-medium">Outward No</label>
                                <input
                                    id="OutwardNo"
                                    type="text"
                                    readOnly
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="OutwardDate" className="font-medium">Outward Date</label>
                                <input
                                    id="OutwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="LinkedInward" className="font-medium">Linked Inward</label>
                                <select
                                    id="LinkedInward"
                                    className="border rounded-md px-3 py-2 w-full"
                                >
                                    <option>Select Inward</option>
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
                                    placeholder="Enter Letter No"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterDate" className="font-medium">Letter Date</label>
                                <input
                                    id="letterDate"
                                    type="date"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="forwardedToName" className="font-medium">Forwarded To Name</label>
                                <input
                                    id="forwardedToName"
                                    placeholder="Enter Forwarded To Name"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="contactDetails" className="font-medium">Contact Details</label>
                                <input
                                    id="contactDetails"
                                    placeholder="Enter Contact Details"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="forwardedToAddress" className="font-medium">Forwarded To Address</label>
                                <textarea
                                    id="forwardedToAddress"
                                    placeholder="Enter Forwarded To Address"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="place" className="font-medium">Place</label>
                                <input
                                    id="place"
                                    placeholder="Enter Place"
                                    className="border px-3 py-2 rounded-md"
                                />
                            </div>

                            <div></div>

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

                    {/* SECTION 4: Internal Routing */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Internal Routing
                        </h3>

                        <div className="grid grid-cols-3 gap-7">
                            <input
                                placeholder="Outward By"
                                className="border px-3 py-2 rounded-md"
                            />
                            <input
                                placeholder="No of Copies"
                                className="border px-3 py-2 rounded-md"
                            />
                            <input
                                placeholder="Copy To"
                                className="border px-3 py-2 rounded-md"
                            />
                        </div>
                    </section>

                    {/* SECTION 5: Courier & Attachments */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">
                            Courier & Attachments
                        </h3>

                        <div className="grid grid-cols-2 gap-7">
                            <input type="file" />
                            <input type="file" />
                            <textarea
                                placeholder="Remarks"
                                className="border px-3 py-2 rounded-md col-span-2"
                            />
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
