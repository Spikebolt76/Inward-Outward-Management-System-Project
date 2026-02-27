import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddEditFinancialYear = () => {

    const initialData = {
        yearName: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
        isActive: true,
        remarks: "",
        createdBy: 1,
        updatedBy: 1,
    };

    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        if (!id) return;

        const fetchFormData = async () => {
            try {
                const { data: { data } } = await axios.get(`/api/financialYear/${id}`);

                setFormData({
                    yearName:  data.yearName  || "",
                    startDate: data.startDate || "",
                    endDate:   data.endDate   || "",
                    isCurrent: data.isCurrent ?? false,
                    isActive:  data.isActive  ?? true,
                    remarks:   data.remarks   || "",
                    createdBy: data.createdBy ?? 1,
                    updatedBy: data.updatedBy ?? 1,
                });
            } catch (err) {
                console.error("Failed to load financial year data:", err);
            }
        };

        fetchFormData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axios.put(`/api/financialYear/${id}`, formData);
            } else {
                await axios.post("/api/financialYear", formData);
            }
            navigate("/financialYear");
        } catch (err) {
            console.error("Failed to save financial year:", err);
        }
    };

    const handleReset = () => {
        setFormData(initialData);
    };

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>{isEditMode ? "Edit Financial Year" : "Add Financial Year"}</span>
                    </div>
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] px-4 py-2" onSubmit={handleSubmit} onReset={handleReset}>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        <div className="flex flex-col gap-1 col-span-2">
                            <label htmlFor="yearName" className="font-medium">
                                Year Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="yearName"
                                name="yearName"
                                type="text"
                                placeholder='e.g. "2024-25"'
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.yearName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="startDate" className="font-medium">
                                Start Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="startDate"
                                name="startDate"
                                type="date"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="endDate" className="font-medium">
                                End Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="endDate"
                                name="endDate"
                                type="date"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.endDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center gap-6 pl-8">
                            <input
                                id="isCurrent"
                                type="checkbox"
                                name="isCurrent"
                                checked={formData.isCurrent}
                                className="cursor-pointer accent-[#1e6784]"
                                onChange={handleChange}
                            />
                            <label htmlFor="isCurrent" className="font-medium">Is Current Year</label>
                        </div>

                        <div className="flex items-center gap-6 pl-8">
                            <input
                                id="isActive"
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                className="cursor-pointer accent-[#1e6784]"
                                onChange={handleChange}
                            />
                            <label htmlFor="isActive" className="font-medium">Is Active</label>
                        </div>

                        {formData.isCurrent && (
                            <div className="col-span-2 bg-blue-50 border border-blue-200 text-blue-700 text-[13px] rounded-md px-4 py-3">
                                ⚠️ Marking this as the current year will unset any previously active current year. Only one financial year can be current at a time.
                            </div>
                        )}

                        <div className="col-span-2 flex flex-col gap-1">
                            <label htmlFor="remarks" className="font-medium">Remarks</label>
                            <textarea
                                id="remarks"
                                name="remarks"
                                rows="2"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.remarks}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer">
                            {isEditMode ? "Update" : "Save"}
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

export default AddEditFinancialYear;
