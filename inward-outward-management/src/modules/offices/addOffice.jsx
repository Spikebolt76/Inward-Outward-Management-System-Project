import { useState, useEffect } from "react";
import { FaFilePen } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CloseButton from "../../components/closeButton";

const AddEditOffice = () => {

    const [formData, setFormData] = useState({
        officeName: "",
        instituteId: "",
        departmentId: "",
        openingDate: "",
        openingInwardNo: 1,
        openingOutwardNo: 1,
        isActive: 1,
        remarks: "",
        createdBy: 1, // Hardcoded temporary ID
        updatedBy: 1
    });
    
    const [helperData, setHelperData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        const fetchHelperData = async () => {
            try{
                const [{ data: { data: department } }, { data: { data: institute } }] = await Promise.all([
                    axios.get("/api/departments"),
                    axios.get("/api/institutes")
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
                await axios.put(`/api/offices/${id}`, formData);
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

                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit Office</span>
                    </div>
                    
                    <CloseButton />
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
                                value={formData.officeName}
                                onChange={(e) => setFormData({...formData, officeName: e.target.value})}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Institute <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.instituteId}
                                onChange={(e) => setFormData({...formData, instituteId: Number(e.target.value)})} >
                                <option value="">Select Institute</option>
                                {(helperData.institute || []).map((institute) => 
                                    <option key={institute.instituteId} value={institute.instituteId}>{institute.InstituteName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Department <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.departmentId}
                                onChange={(e) => setFormData({...formData, departmentId: Number(e.target.value)})} >
                                <option value="">Select Department</option>
                                {(helperData.department || []).map((department) => 
                                    <option key={department.departmentId} value={department.departmentId}>{department.DepartmentName}</option>
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
                                value={formData.openingDate}
                                onChange={(e) => setFormData({...formData, openingDate: e.target.value})}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Inward No</label>
                            <input
                                type="number"
                                min="1"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.openingInwardNo}
                                onChange={(e) => setFormData({...formData, openingInwardNo: Number(e.target.value)})}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Outward No</label>
                            <input
                                type="number"
                                min="1"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.openingOutwardNo}
                                onChange={(e) => setFormData({...formData, openingOutwardNo: Number(e.target.value)})}
                            />
                        </div>

                        <div className="flex items-center gap-6 pl-8">
                            <input
                                type="checkbox"
                                checked={formData.isActive}
                                onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                                className="cursor-pointer accent-[#1e6784]"
                            />
                            <label className="font-medium">Is Active</label>
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="3"
                                placeholder="Enter Remarks"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.remarks}
                                onChange={(e) => setFormData({...formData, remarks: e.target.value})}
                            />
                        </div>
                    </div>

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

export default AddEditOffice;
