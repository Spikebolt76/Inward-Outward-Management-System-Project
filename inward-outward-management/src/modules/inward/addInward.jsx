import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddEditInward = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const initialData = {
        inwardNo: "",
        inwardDate: "",
        receivedAt: "",       

        instituteId: "",
        finYearId: "",

        fromOfficeId: "",
        toOfficeId: "",

        fromContactId: "",
        fromName: "",
        fromAddress: "",
        fromPhone: "",

        toPersonName: "",
        toDepartmentId: "",

        transferModeId: "",

        courierCompanyId: "",
        trackingNo: "",

        letterNo: "",
        letterDate: "",
        subject: "",
        subjectShort: "",
        description: "",

        receiptNo: "",
        receiptDate: "",

        documentPath: "",
        linkedOutwardId: "",

        copyTo: "",
        noOfEnclosures: "",
        remarks: "",

        createdBy: 1,
        updatedBy: 1
    };

    const [formData, setFormData] = useState(initialData);
    const [helperData, setHelperData] = useState({
        institutes: [],
        finYears: [],
        offices: [],
        departments: [],
        modes: [],
        couriers: [],
        contacts: [],
        outwards: [], 
    });

    useEffect(() => {
        const fetchHelperData = async () => {
            try {
                const [
                    { data: { data: institutes } },
                    { data: { data: finYears } },
                    { data: { data: offices } },
                    { data: { data: departments } },
                    { data: { data: modes } },
                    { data: { data: couriers } },
                    { data: { data: contacts } },
                    { data: { data: outwards } },   
                ] = await Promise.all([
                    axios.get("/api/institutes"),
                    axios.get("/api/financialYear"),
                    axios.get("/api/offices"),
                    axios.get("/api/departments"),
                    axios.get("/api/modes"),
                    axios.get("/api/couriers"),
                    axios.get("/api/contacts"),
                    axios.get("/api/outwards"),     
                ]);

                setHelperData({
                    institutes: institutes || [],
                    finYears: finYears || [],
                    offices: offices || [],
                    departments: departments || [],
                    modes: modes || [],
                    couriers: couriers || [],
                    contacts: contacts || [],
                    outwards: outwards || [],
                });
            } catch (err) {
                console.error("Failed to load helper data:", err);
            }
        };
        fetchHelperData();
    }, []); 

    useEffect(() => {
        if (!id) return;

        const fetchFormData = async () => {
            try {
                const { data: { data } } = await axios.get(`/api/inwards/${id}`);

                setFormData({
                    inwardNo: data.inwardNo || "",
                    inwardDate: data.inwardDate || "",
                    receivedAt: data.receivedAt || "",         

                    instituteId: data.instituteId || "",
                    finYearId: data.finYearId || "",

                    fromOfficeId: data.fromOfficeId || "",
                    toOfficeId: data.toOfficeId || "",

                    fromContactId: data.fromContactId || "",
                    fromName: data.fromName || "",
                    fromAddress: data.fromAddress || "",
                    fromPhone: data.fromPhone || "",

                    toPersonName: data.toPersonName || "",
                    toDepartmentId: data.toDepartmentId || "",

                    transferModeId: data.transferModeId || "",

                    courierCompanyId: data.courierCompanyId || "",
                    trackingNo: data.trackingNo || "",

                    letterNo: data.letterNo || "",
                    letterDate: data.letterDate || "",
                    subject: data.subject || "",
                    subjectShort: data.subjectShort || "",
                    description: data.description || "",

                    receiptNo: data.receiptNo || "",
                    receiptDate: data.receiptDate || "",

                    documentPath: data.documentPath || "",
                    linkedOutwardId: data.linkedOutwardId || "",

                    copyTo: data.copyTo || "",
                    noOfEnclosures: data.noOfEnclosures || "",
                    remarks: data.remarks || "",

                    createdBy: data.createdBy ?? 1,
                    updatedBy: data.updatedBy ?? 1,
                });
            } catch (err) {
                console.error("Failed to fetch inward:", err);
            }
        };
        fetchFormData();
    }, [id]);

    const numericFields = [
        "instituteId", "finYearId", "fromOfficeId", "toOfficeId", "fromContactId",
        "toDepartmentId", "transferModeId", "courierCompanyId", "linkedOutwardId", "noOfEnclosures"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked
                : numericFields.includes(name) ? Number(value) || ""
                : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axios.put(`/api/inwards/${id}`, formData);
            } else {
                await axios.post("/api/inwards", formData);
            }
            navigate(-1);
        } catch (err) {
            console.error("Failed to save inward:", err);
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
                        <span>{isEditMode ? "Edit Inward" : "Add Inward"}</span>
                    </div>
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form onSubmit={handleSubmit} onReset={handleReset} className="text-[15px] space-y-10 px-4 py-2">

                    {/* SECTION 1: Inward Basic */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Inward Details</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="inwardNo" className="font-medium">Inward No</label>
                                <input
                                    id="inwardNo"
                                    name="inwardNo"
                                    type="text"
                                    readOnly
                                    value={formData.inwardNo}
                                    onChange={handleChange}
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="inwardDate" className="font-medium">Inward Date</label>
                                <input
                                    id="inwardDate"
                                    name="inwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                    value={formData.inwardDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receivedAt" className="font-medium">Received Date</label>
                                <input
                                    id="receivedAt"
                                    name="receivedAt"
                                    type="datetime-local"
                                    className="border rounded-md px-3 py-2 w-full"
                                    value={formData.receivedAt}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-7 mt-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="instituteId" className="font-medium">Institute</label>
                                <select
                                    id="instituteId"
                                    name="instituteId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.instituteId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Institute</option>
                                    {helperData.institutes.map((inst) => (
                                        <option key={inst.instituteId} value={inst.instituteId}>{inst.instituteName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="finYearId" className="font-medium">Financial Year</label>
                                <select
                                    id="finYearId"
                                    name="finYearId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.finYearId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Financial Year</option>
                                    {helperData.finYears.map((fy) => (
                                        <option key={fy.finYearId} value={fy.finYearId}>{fy.finYearName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2: Mode & Offices */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Mode & Offices</h3>

                        <div className="grid grid-cols-2 gap-7">

                            <div className="flex flex-col gap-1">
                                <label htmlFor="transferModeId" className="font-medium">Mode</label>
                                <select
                                    id="transferModeId"
                                    name="transferModeId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.transferModeId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Transfer Mode</option>
                                    {/* BUG FIX: was empty — now populated from helperData.modes */}
                                    {helperData.modes.map((mode) => (
                                        <option key={mode.transferModeId} value={mode.transferModeId}>{mode.transferModeName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromContactId" className="font-medium">From Contact</label>
                                <select
                                    id="fromContactId"
                                    name="fromContactId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.fromContactId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Contact</option>
                                    {helperData.contacts.map((contact) => (
                                        <option key={contact.contactId} value={contact.contactId}>{contact.contactName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromOfficeId" className="font-medium">From Office</label>
                                <select
                                    id="fromOfficeId"
                                    name="fromOfficeId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.fromOfficeId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Office</option>
                                    {helperData.offices.map((office) => (
                                        <option key={office.officeId} value={office.officeId}>{office.officeName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toOfficeId" className="font-medium">To Office</label>
                                <select
                                    id="toOfficeId"
                                    name="toOfficeId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.toOfficeId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Office</option>
                                    {helperData.offices.map((office) => (
                                        <option key={office.officeId} value={office.officeId}>{office.officeName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierCompanyId" className="font-medium">Courier Company</label>
                                <select
                                    id="courierCompanyId"
                                    name="courierCompanyId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.courierCompanyId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Courier</option>
                                    {/* BUG FIX: was using courier.companyName — model field is courierCompanyName */}
                                    {helperData.couriers.map((courier) => (
                                        <option key={courier.courierCompanyId} value={courier.courierCompanyId}>{courier.courierCompanyName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="trackingNo" className="font-medium">Tracking No</label>
                                <input
                                    id="trackingNo"
                                    name="trackingNo"
                                    placeholder="Enter Tracking No"
                                    className="border rounded-md px-3 py-2 w-full"
                                    value={formData.trackingNo}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: Letter Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Letter Details</h3>

                        <div className="grid grid-cols-2 gap-x-10 gap-y-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterNo" className="font-medium">Letter No</label>
                                <input id="letterNo" name="letterNo" placeholder="Enter Letter No" className="border px-3 py-2 rounded-md"
                                    value={formData.letterNo} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="letterDate" className="font-medium">Letter Date</label>
                                <input id="letterDate" name="letterDate" type="date" className="border px-3 py-2 rounded-md"
                                    value={formData.letterDate} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromName" className="font-medium">From Name</label>
                                <input id="fromName" name="fromName" placeholder="Enter From Name" className="border px-3 py-2 rounded-md"
                                    value={formData.fromName} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fromPhone" className="font-medium">Contact Details</label>
                                <input id="fromPhone" name="fromPhone" placeholder="Enter Contact Details" className="border px-3 py-2 rounded-md"
                                    value={formData.fromPhone} onChange={handleChange} />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="fromAddress" className="font-medium">From Address</label>
                                <textarea id="fromAddress" name="fromAddress" placeholder="Enter From Address"
                                    className="border px-3 py-2 rounded-md" rows={3}
                                    value={formData.fromAddress} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="subjectShort" className="font-medium">Subject (Short)</label>
                                <input id="subjectShort" name="subjectShort" placeholder="Enter Short Subject" className="border px-3 py-2 rounded-md"
                                    value={formData.subjectShort} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receiptNo" className="font-medium">Receipt No</label>
                                <input id="receiptNo" name="receiptNo" placeholder="Enter Receipt No" className="border px-3 py-2 rounded-md"
                                    value={formData.receiptNo} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="receiptDate" className="font-medium">Receipt Date</label>
                                <input id="receiptDate" name="receiptDate" type="date" className="border px-3 py-2 rounded-md"
                                    value={formData.receiptDate} onChange={handleChange} />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Enter Subject"
                                    className="border px-3 py-2 rounded-md" rows={2}
                                    value={formData.subject} onChange={handleChange} />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="description" className="font-medium">Description</label>
                                <textarea id="description" name="description" placeholder="Enter Description"
                                    className="border px-3 py-2 rounded-md" rows={3}
                                    value={formData.description} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Internal Routing */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Internal Routing</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="toPersonName" className="font-medium">To Person</label>
                                <input id="toPersonName" name="toPersonName" placeholder="To Person" className="border px-3 py-2 rounded-md"
                                    value={formData.toPersonName} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toDepartmentId" className="font-medium">To Department</label>
                                <select
                                    id="toDepartmentId"
                                    name="toDepartmentId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.toDepartmentId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Department</option>
                                    {helperData.departments.map((dept) => (
                                        <option key={dept.departmentId} value={dept.departmentId}>{dept.departmentName}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="noOfEnclosures" className="font-medium">No of Enclosures</label>
                                <input id="noOfEnclosures" name="noOfEnclosures" type="number" min="0" placeholder="No of Enclosures"
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.noOfEnclosures} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="copyTo" className="font-medium">Copy To</label>
                                <input id="copyTo" name="copyTo" placeholder="Copy To" className="border px-3 py-2 rounded-md"
                                    value={formData.copyTo} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1 col-span-2">
                                <label htmlFor="linkedOutwardId" className="font-medium">Linked Outward</label>
                                <select
                                    id="linkedOutwardId"
                                    name="linkedOutwardId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.linkedOutwardId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Linked Outward (if any)</option>
                                    {helperData.outwards.map((outward) => (
                                        <option key={outward.outwardId} value={outward.outwardId}>
                                            {outward.outwardNo} {outward.subject ? `— ${outward.subject}` : ""}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Attachments & Remarks */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Attachments & Remarks</h3>

                        <div className="grid grid-cols-2 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="documentPath" className="font-medium">Document</label>
                                <input
                                    id="documentPath"
                                    name="documentPath"
                                    type="file"
                                    onChange={(e) => {
                                        // Handle file upload separately — don't treat as text field
                                        const file = e.target.files[0];
                                        if (file) {
                                            // TODO: implement upload to server and store returned path
                                            setFormData((prev) => ({ ...prev, documentPath: file.name }));
                                        }
                                    }}
                                />
                                {formData.documentPath && (
                                    <span className="text-sm text-gray-500 mt-1">Current: {formData.documentPath}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="remarks" className="font-medium">Remarks</label>
                                <textarea
                                    id="remarks"
                                    name="remarks"
                                    placeholder="Remarks"
                                    className="border px-3 py-2 rounded-md"
                                    rows={3}
                                    value={formData.remarks}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer"
                        >
                            {isEditMode ? "Update Inward" : "Save Inward"}
                        </button>

                        <button
                            type="reset"
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

export default AddEditInward;