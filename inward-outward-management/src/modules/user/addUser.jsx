import { useState, useEffect } from "react";
import { FaFilePen } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CloseButton from "../../components/closeButton";

const AddEditUser = () => {
    const initialState = {
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        phoneNo: "",
        role: "Operator",
        instituteId: "",
        departmentId: "",
        isActive: true,
        mustChangePassword: true,
        remarks: ""
    }
    const [formData, setFormData] = useState(initialState);

    const [helperData, setHelperData] = useState({});
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    useEffect(() => {
        const fetchHelperData = async () => {
            try {
                const [{ data: { data: department } }, { data: { data: institute } }] = await Promise.all([
                    axios.get("/api/departments"),
                    axios.get("/api/institutes")
                ]);
                console.log({ department, institute })
                setHelperData({ department, institute });
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
                const { data } = await axios.get(`/api/users/${id}`);
                // Don't populate password fields on edit
                const { passwordHash, ...rest } = data.data;
                setFormData({ 
                    fullName: rest.fullName || "",
                    username: rest.username || "",
                    email: rest.email || "",
                    phoneNo: rest.phoneNo || "",
                    role: rest.role || "Operator",
                    instituteId: rest.instituteId || "",
                    departmentId: rest.departmentId || "",
                    isActive: rest.isActive ?? true,
                    mustChangePassword: rest.mustChangePassword ?? true,
                    remarks: rest.remarks || "",
                    password: "", confirmPassword: "" });
            } catch (err) {
                console.log("Failed to load user data", err);
            }
        };
        fetchFormData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isEditMode && formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        if (isEditMode && formData.password && formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }

        setPasswordError("");

        const payload = { ...formData };
        delete payload.confirmPassword;
        // If editing and password is blank, don't send it
        if (isEditMode && !payload.password) {
            delete payload.password;
        }

        try {
            if (isEditMode) {
                await axios.put(`/api/users/${id}`, payload);
            } else {
                await axios.post(`/api/users`, payload);
            }
            navigate("/users");
        } catch (err) {
            console.error("Failed to save user:", err);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]:
            type === "checkbox"
                ? checked
                : name === "instituteId" || name === "departmentId"
                ? (value ? Number(value) : "")
                : value
        }));
    };

    const handleReset = () => {
        setFormData(initialState);
    }

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>Add / Edit User</span>
                    </div>
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] px-4 py-2" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Full Name"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                name="fullName"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Username"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                name="username"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Password {!isEditMode && <span className="text-red-500">*</span>}
                                {isEditMode && <span className="text-gray-400 text-[13px] font-normal"> (leave blank to keep current)</span>}
                            </label>
                            <input
                                type="password"
                                placeholder={isEditMode ? "Enter new password" : "Enter Password"}
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required={!isEditMode}
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Confirm Password {!isEditMode && <span className="text-red-500">*</span>}
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required={!isEditMode}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                name="confirmPassword"
                            />
                            {passwordError && (
                                <span className="text-red-500 text-[13px]">{passwordError}</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Phone No</label>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.phoneNo}
                                name="phoneNo"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">
                                Role <span className="text-red-500">*</span>
                            </label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                                value={formData.role}
                                name="role"
                                onChange={handleChange}>
                                <option value="SuperAdmin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="Operator">Operator</option>
                                <option value="Viewer">Viewer</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Institute</label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.instituteId}
                                name="instituteId"
                                onChange={handleChange}>
                                <option value="">Select Institute</option>
                                {(helperData.institute || []).map((institute) =>
                                    <option key={institute.instituteId} value={institute.instituteId}>{institute.instituteName}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Department</label>
                            <select
                                className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={formData.departmentId}
                                name="departmentId"
                                onChange={handleChange}>
                                <option value="">Select Department</option>
                                {(helperData.department || []).map((department) =>
                                    <option key={department.departmentId} value={department.departmentId}>{department.departmentName}</option>
                                )}
                            </select>
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

                        <div className="flex items-center gap-6 pl-8">
                            <input
                                type="checkbox"
                                name="mustChangePassword"
                                checked={formData.mustChangePassword}
                                onChange={handleChange}
                                className="cursor-pointer accent-[#1e6784]"
                            />
                            <div>
                                <label className="font-medium">Must Change Password on Next Login</label>
                                {!isEditMode && (
                                    <p className="text-gray-400 text-[12px]">Enabled by default for new users</p>
                                )}
                            </div>
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

export default AddEditUser;