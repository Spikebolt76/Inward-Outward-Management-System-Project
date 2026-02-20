import { useState, useEffect } from "react";
import { FaFilePen } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEditOffice = () => {

    const [formData, setFormData] = useState({});
    const [helperData, setHelperData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        const fetchHelperData = async () => {
            try{
                const [{ data: { data: department } }, { data: { data: institute } }] = await Promise.all([
                    axios.get("/api/department"),
                    axios.get("/api/institute")
                ]);
                setHelperData({ department, institute });
            } catch(err) {
                console.log("failed to load office data", err);
            }
        }
        fetchHelperData();
    }, []);

    useEffect(() => {
        if (!id) return; //is_Edit_mode

        const fetchFormData = async () => {
            try {
                const { data } = await axios.get(`/api/offices/${id}`);
                setFormData(data.data);
            } catch(err) {
                console.log("failed to load office data", err);
            }
        }
        fetchFormData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await axios.put(`/api/office/${id}`, formData);
            } else {
                await axios.post(`/api/offices`, formData);
            }
            navigate("/offices");
        } catch(err) {
            console.error("Failed to save office:", err);
        }
    }

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                <div className="flex items-center gap-4 text-[22px] text-gray-800">
                    <FaFilePen />
                    <span>Add / Edit Office</span>
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] px-4 py-2" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        <div className="flex flex-col gap-1 col-span-2">
                            <label className="font-medium">
                                Office Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Office Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.OfficeName}
                                onChange={(e) => setFormData({...formData, OfficeName: e.target.value})}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Institute <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                onChange={(e) => setHelperData({...formData, OfficeName: e.target.value})}
                            >
                                <option value="">Select Institute</option>
                                {helperData.institute.map((institute) => 
                                    <option key={institute.InstituteID} value={institute.InstituteID}>{institute.InstituteName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            >
                                <option value="">Select Department</option>
                                {helperData.department.map((department) => 
                                    <option key={department.DepartmentID} value={department.DepartmentID}>{department.DepartmentName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Opening Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Inward No</label>
                            <input
                                type="number"
                                min="1"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                defaultValue={1}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Outward No</label>
                            <input
                                type="number"
                                min="1"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                defaultValue={1}
                            />
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="3"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                            Save
                        </button>

                        <button
                            type="reset"
                            className="px-8 py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition">
                            Clear
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddEditOffice;
