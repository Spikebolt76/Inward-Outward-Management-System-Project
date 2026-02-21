import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";

const AddFromTo = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit From-To</span>
                    </div>
                    
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                {/* Form */}
                <form className="text-[15px] px-4 py-2">

                    {/* Grid */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        {/* From / To Name */}
                        <div className="flex flex-col gap-1">
                            <label className="font-medium">From / To Name</label>
                            <input
                                type="text"
                                placeholder="Enter From / To Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Person Name */}
                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Contact Person</label>
                            <input
                                type="text"
                                placeholder="Enter Person Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Place */}
                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Place</label>
                            <input
                                type="text"
                                placeholder="Enter Place"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Sequence */}
                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Sequence</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="Enter Sequence"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Address */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Address</label>
                            <textarea
                                rows="3"
                                placeholder="Enter Address"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Remarks */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="2"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Status */}
                        <div className="flex items-center gap-3 col-span-2">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="w-4 h-4"
                            />
                            <label className="font-medium">Is Active</label>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Save
                        </button>

                        <button
                            type="reset"
                            className="px-6 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition"
                        >
                            Clear
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddFromTo;
