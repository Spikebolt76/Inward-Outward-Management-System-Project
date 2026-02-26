import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CONTACT_TYPES = ["Client", "Vendor", "Department", "Branch", "Government", "Other"];

const AddEditContact = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const initialData = {
        contactName: "",
        contactType: "Other",
        personName: "",
        email: "",
        phoneNo: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        displayOrder: "",
        remarks: "",
        isActive: true,
        createdBy: 1,
        updatedBy: 1
    };
    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        if (!id) return;

        const fetchFormData = async () => {
            try {
                const { data: { data } } = await axios.get(`/api/contacts/${id}`);
                setFormData({
                    contactName: data.contactName || "",
                    contactType: data.contactType || "Other",
                    personName: data.personName || "",
                    email: data.email || "",
                    phoneNo: data.phoneNo || "",
                    address: data.address || "",
                    city: data.city || "",
                    state: data.state || "",
                    pincode: data.pincode || "",
                    displayOrder: data.displayOrder ?? "",
                    remarks: data.remarks || "",
                    isActive: data.isActive ?? true
                });
            } catch (err) {
                console.log("Failed to load form data", err);
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
                await axios.put(`/api/contacts/${id}`, formData);
            } else {
                await axios.post(`/api/contacts`, formData);
            }
            navigate("/contact");
        } catch (err) {
            console.log("Failed to save contact", err);
        }
    };

    const handleReset = () => {
        setFormData(initialData);
    };

    const inputClass =
        "border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400";

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>{isEditMode ? "Edit Contact" : "Add Contact"}</span>
                    </div>
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form className="text-[15px] px-4 py-2" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-7">

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Contact Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                name="contactName"
                                placeholder="Enter Contact Name"
                                className={inputClass}
                                value={formData.contactName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Contact Type <span className="text-red-500">*</span></label>
                            <select
                                name="contactType"
                                className={inputClass}
                                value={formData.contactType}
                                onChange={handleChange}
                                required
                            >
                                {CONTACT_TYPES.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Contact Person</label>
                            <input
                                type="text"
                                name="personName"
                                placeholder="Enter Person Name"
                                className={inputClass}
                                value={formData.personName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                className={inputClass}
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
                                className={inputClass}
                                value={formData.phoneNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Display Order</label>
                            <input
                                type="number"
                                name="displayOrder"
                                placeholder="Enter Display Order"
                                className={inputClass}
                                value={formData.displayOrder}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Address</label>
                            <textarea
                                rows="3"
                                name="address"
                                placeholder="Enter Address"
                                className={`${inputClass} resize-none`}
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">City</label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Enter City"
                                className={inputClass}
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">State</label>
                            <input
                                type="text"
                                name="state"
                                placeholder="Enter State"
                                className={inputClass}
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter Pincode"
                                className={inputClass}
                                value={formData.pincode}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2 flex flex-col gap-1">
                            <label className="font-medium">Remarks</label>
                            <textarea
                                rows="2"
                                name="remarks"
                                placeholder="Enter Remarks"
                                className={`${inputClass} resize-none`}
                                value={formData.remarks}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center gap-4 col-span-2">
                            <input
                                type="checkbox"
                                name="isActive"
                                id="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                                className="cursor-pointer accent-[#1e6784]"
                            />
                            <label htmlFor="isActive" className="font-medium cursor-pointer">Is Active</label>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="px-8 py-2 rounded-md bg-[#b3d0db] text-[#1a5c77] hover:bg-[#a1bbc5] transition cursor-pointer"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditContact;