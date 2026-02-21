import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";

const AddEditCourierCompany = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit Courier</span>
                    </div>
                    
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                {/* Form */}
                <form className="text-[15px] px-4 py-2">

                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        {/* Company Name */}
                        <div className="flex flex-col gap-1 col-span-2">
                            <label
                                htmlFor="CourierCompanyName"
                                className="font-medium"
                            >
                                Company Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="CourierCompanyName"
                                name="CourierCompanyName"
                                type="text"
                                placeholder="Enter Courier Company Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        {/* Contact Person */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="ContactPersonName"
                                className="font-medium"
                            >
                                Contact Person
                            </label>
                            <input
                                id="ContactPersonName"
                                name="ContactPersonName"
                                type="text"
                                placeholder="Enter Contact Person Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="PhoneNo"
                                className="font-medium"
                            >
                                Phone No
                            </label>
                            <input
                                id="PhoneNo"
                                name="PhoneNo"
                                type="text"
                                placeholder="Enter Phone Number"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="Email"
                                className="font-medium"
                            >
                                Email
                            </label>
                            <input
                                id="Email"
                                name="Email"
                                type="email"
                                placeholder="Enter Email Address"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Website */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="Website"
                                className="font-medium"
                            >
                                Website
                            </label>
                            <input
                                id="Website"
                                name="Website"
                                type="url"
                                placeholder="Enter Website URL"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Default Rate */}
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="DefaultRate"
                                className="font-medium"
                            >
                                Default Rate
                            </label>
                            <input
                                id="DefaultRate"
                                name="DefaultRate"
                                type="number"
                                step="0.01"
                                placeholder="Enter Default Rate"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Address */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <label
                                htmlFor="Address"
                                className="font-medium"
                            >
                                Address
                            </label>
                            <textarea
                                id="Address"
                                name="Address"
                                rows="3"
                                placeholder="Enter Address"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Remarks */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <label
                                htmlFor="Remarks"
                                className="font-medium"
                            >
                                Remarks
                            </label>
                            <textarea
                                id="Remarks"
                                name="Remarks"
                                rows="2"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Save
                        </button>

                        <button
                            type="reset"
                            className="px-8 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition"
                        >
                            Clear
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEditCourierCompany;
