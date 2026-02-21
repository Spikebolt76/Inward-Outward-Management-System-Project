import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";

const AddEditMode = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit Mode</span>
                    </div>
                    
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                {/* Form */}
                <form className="text-[15px] px-4 py-2">

                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        {/* Mode Name */}
                        <div className="flex flex-col gap-1 col-span-2">
                            <label className="font-medium">
                                Mode Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Mode Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
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

                        {/* Status */}
                        <div className="flex items-center gap-3 mt-6">
                            <input
                                type="checkbox"
                                defaultChecked
                                className="w-4 h-4"
                            />
                            <label className="font-medium">Is Active</label>
                        </div>

                        {/* Remarks */}
                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="3"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                     <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer">
                            Save
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

export default AddEditMode;
