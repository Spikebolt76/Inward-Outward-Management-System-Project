import { useState, useEffect } from "react";
import { FaFilePen } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CloseButton from "../../components/closeButton";

const AddEditOffice = () => {

    const initialData = {
        officeName: "",
        instituteId: "",
        departmentId: "",
        email: "",
        phoneNo: "",
        address: "",
        openingDate: "",
        openingInwardNo: 1,
        openingOutwardNo: 1,
        isActive: true,
        remarks: "",
    };
    const [formData, setFormData] = useState(initialData);

    const [helperData, setHelperData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        const fetchHelperData = async () => {
            try {
                const [{ data: { data: departments } }, { data: { data: institutes } }] = await Promise.all([
                    axios.get("/api/departments"),
                    axios.get("/api/institutes")
                ]);
                setHelperData({ departments: departments || [], institutes: institutes || [] });
            } catch (err) {
                console.log("Failed to load helper data", err);
            }
        };
        fetchHelperData();
    }, []);

    useEffect(() => {
        if (!id) return;

        const fetchFormData = async () => {
            try {
                const { data : { data } } = await axios.get(`/api/offices/${id}`);
                setFormData({
                    officeName: data.officeName || "",
                    instituteId: data.instituteId || "",
                    departmentId: data.departmentId || "",
                    email: data.email || "",
                    phoneNo: data.phoneNo || "",
                    address: data.address || "",
                    openingDate: data.openingDate || "",
                    openingInwardNo: data.openingInwardNo ?? 1,
                    openingOutwardNo: data.openingOutwardNo ?? 1,
                    isActive: data.isActive ?? true,
                    remarks: data.remarks || "",
                });
            } catch (err) {
                console.log("Failed to load office data", err);
            }
        };
        fetchFormData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? checked
                : (name === "instituteId" || name === "departmentId" || name === "openingInwardNo" || name === "openingOutwardNo")
                    ? Number(value) || "" : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isEditMode) {
                await axios.put(`/api/offices/${id}`, formData);
            } else {
                await axios.post(`/api/offices`, formData);
            }
            navigate("/offices");
        } catch (err) {
            console.error("Failed to save office:", err);
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
                                name="officeName"
                                placeholder="Enter Office Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.officeName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Institute <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="instituteId"
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.instituteId}
                                onChange={handleChange}>
                                <option value="">Select Institute</option>
                                {(helperData.institutes || []).map((institute) =>
                                    <option key={institute.instituteId} value={institute.instituteId}>{institute.instituteName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Department</label>
                            <select
                                name="departmentId"
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.departmentId}
                                onChange={handleChange}>
                                <option value="">Select Department</option>
                                {(helperData.departments || []).map((department) =>
                                    <option key={department.departmentId} value={department.departmentId}>{department.departmentName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Phone No</label>
                            <input
                                type="text"
                                name="phoneNo"
                                placeholder="Enter Phone Number"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.phoneNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Address</label>
                            <textarea
                                rows="2"
                                name="address"
                                placeholder="Enter Address"
                                className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Opening Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="openingDate"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.openingDate}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Inward No</label>
                            <input
                                type="number"
                                name="openingInwardNo"
                                min="0"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.openingInwardNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Opening Outward No</label>
                            <input
                                type="number"
                                name="openingOutwardNo"
                                min="0"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.openingOutwardNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center gap-6 pl-8">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="cursor-pointer accent-[#1e6784]"
                            />
                            <label className="font-medium">Is Active</label>
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="3"
                                name="remarks"
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
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
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