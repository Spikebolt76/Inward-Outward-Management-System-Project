import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AddEditOutward = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const initialData = {
        outwardNo: "",
        outwardDate: "",

        instituteId: "",
        finYearId: "",

        fromOfficeId: "",
        toOfficeId: "",

        // Recipient contact (FK preferred; fallback plain text)
        toContactId: "",            // maps to InOutwardFromToID in schema (the "To" direction)
        toName: "",                 // LetterForwardedToName
        toAddress: "",              // LetterForwardedToAddress
        toPhone: "",                // ToContactDetails
        toPlace: "",                // LetterForwardedToPlace

        departmentId: "",           // DepartmentID — sending department
        dispatchedByName: "",       // OutwardByPerson

        transferModeId: "",

        courierCompanyId: "",
        trackingNo: "",             // TrackingID in schema

        letterNo: "",
        letterDate: "",
        subject: "",
        subjectShort: "",
        fileNo: "",

        courierReceiptNo: "",
        courierReceiptDate: "",
        courierCharges: "",         // Charges in schema
        chargesPaidBy: "",          // AmountPaidType in schema

        deliveryStatus: "Pending",

        isReturned: false,
        returnDate: "",
        returnReason: "",
        returnAction: "",

        noOfEnclosures: "",         // NoOfCompilation in schema
        copyTo: "",
        smsTo: "",                  // SMSToCSV in schema
        emailTo: "",                // EmailToCSV in schema

        linkedInwardId: "",         // InwardID in schema

        // File paths — handled via upload
        documentPath: "",
        receiptPath: "",            // CourierReceiptPath
        acknowledgePath: "",        // CourierAcknowledgePath

        remarks: "",

        createdBy: 1,
        updatedBy: 1,
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
        inwards: [],
    });

    // BUG FIX: missing [] caused infinite re-fetch loop (same bug as in AddEditInward)
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
                    { data: { data: inwards } },
                ] = await Promise.all([
                    axios.get("/api/institutes"),
                    axios.get("/api/financialYear"),
                    axios.get("/api/offices"),
                    axios.get("/api/departments"),
                    axios.get("/api/modes"),
                    axios.get("/api/couriers"),
                    axios.get("/api/contacts"),
                    axios.get("/api/inwards"),
                ]);

                setHelperData({
                    institutes: institutes || [],
                    finYears: finYears || [],
                    offices: offices || [],
                    departments: departments || [],
                    modes: modes || [],
                    couriers: couriers || [],
                    contacts: contacts || [],
                    inwards: inwards || [],
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
                const { data: { data } } = await axios.get(`/api/outwards/${id}`);

                setFormData({
                    outwardNo: data.outwardNo || "",
                    outwardDate: data.outwardDate || "",

                    instituteId: data.instituteId || "",
                    finYearId: data.finYearId || "",

                    fromOfficeId: data.fromOfficeId || "",
                    toOfficeId: data.toOfficeId || "",

                    toContactId: data.toContactId || "",
                    toName: data.toName || "",
                    toAddress: data.toAddress || "",
                    toPhone: data.toPhone || "",
                    toPlace: data.toPlace || "",

                    departmentId: data.departmentId || "",
                    dispatchedByName: data.dispatchedByName || "",

                    transferModeId: data.transferModeId || "",

                    courierCompanyId: data.courierCompanyId || "",
                    trackingNo: data.trackingNo || "",

                    letterNo: data.letterNo || "",
                    letterDate: data.letterDate || "",
                    subject: data.subject || "",
                    subjectShort: data.subjectShort || "",
                    fileNo: data.fileNo || "",

                    courierReceiptNo: data.courierReceiptNo || "",
                    courierReceiptDate: data.courierReceiptDate || "",
                    courierCharges: data.courierCharges || "",
                    chargesPaidBy: data.chargesPaidBy || "",

                    deliveryStatus: data.deliveryStatus || "Pending",

                    isReturned: data.isReturned ?? false,
                    returnDate: data.returnDate || "",
                    returnReason: data.returnReason || "",
                    returnAction: data.returnAction || "",

                    noOfEnclosures: data.noOfEnclosures || "",
                    copyTo: data.copyTo || "",
                    smsTo: data.smsTo || "",
                    emailTo: data.emailTo || "",

                    linkedInwardId: data.linkedInwardId || "",

                    documentPath: data.documentPath || "",
                    receiptPath: data.receiptPath || "",
                    acknowledgePath: data.acknowledgePath || "",

                    remarks: data.remarks || "",

                    createdBy: data.createdBy ?? 1,
                    updatedBy: data.updatedBy ?? 1,
                });
            } catch (err) {
                console.error("Failed to fetch outward:", err);
            }
        };
        fetchFormData();
    }, [id]);

    const numericFields = [
        "instituteId", "finYearId", "fromOfficeId", "toOfficeId",
        "toContactId", "departmentId", "transferModeId", "courierCompanyId",
        "linkedInwardId", "noOfEnclosures",
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked
                : numericFields.includes(name) ? Number(value) || ""
                : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await axios.put(`/api/outwards/${id}`, formData);
            } else {
                await axios.post("/api/outwards", formData);
            }
            navigate(-1);
        } catch (err) {
            console.error("Failed to save outward:", err);
        }
    };

    const handleReset = () => {
        setFormData(initialData);
    };

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

                {/* Header */}
                <div className="flex justify-between text-[22px] text-gray-800 px-2">
                    <div className="flex items-center gap-4">
                        <FaFilePen />
                        <span>{isEditMode ? "Edit Outward" : "Add Outward"}</span>
                    </div>
                    <CloseButton />
                </div>

                <hr className="border-gray-300 my-6 -mx-6" />

                <form onSubmit={handleSubmit} onReset={handleReset} className="text-[15px] space-y-10 px-4 py-2">

                    {/* SECTION 1: Outward Basic */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Outward Details</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="outwardNo" className="font-medium">Outward No</label>
                                <input
                                    id="outwardNo"
                                    name="outwardNo"
                                    type="text"
                                    readOnly
                                    value={formData.outwardNo}
                                    className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="outwardDate" className="font-medium">Outward Date</label>
                                <input
                                    id="outwardDate"
                                    name="outwardDate"
                                    type="date"
                                    className="border rounded-md px-3 py-2 w-full"
                                    value={formData.outwardDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="linkedInwardId" className="font-medium">Linked Inward</label>
                                <select
                                    id="linkedInwardId"
                                    name="linkedInwardId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.linkedInwardId}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Inward (if any)</option>
                                    {helperData.inwards.map((inward) => (
                                        <option key={inward.inwardId} value={inward.inwardId}>
                                            {inward.inwardNo}{inward.subject ? ` — ${inward.subject}` : ""}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Institute & Financial Year — required fields in model, missing from original */}
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
                                    <option value="">Select Mode</option>
                                    {helperData.modes.map((mode) => (
                                        <option key={mode.transferModeId} value={mode.transferModeId}>{mode.transferModeName}</option>
                                    ))}
                                </select>
                            </div>

                            {/* BUG FIX: was named toContactId but had no value/onChange and no options rendered */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="toContactId" className="font-medium">To Contact</label>
                                <select
                                    id="toContactId"
                                    name="toContactId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.toContactId}
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

                    {/* SECTION 3: Letter & Recipient Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Letter & Recipient Details</h3>

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
                                <label htmlFor="toName" className="font-medium">To Name</label>
                                <input id="toName" name="toName" placeholder="Enter To Name" className="border px-3 py-2 rounded-md"
                                    value={formData.toName} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* BUG FIX: toPhone had no value/onChange wired */}
                                <label htmlFor="toPhone" className="font-medium">Contact Details</label>
                                <input id="toPhone" name="toPhone" placeholder="Enter Phone / Contact Details" className="border px-3 py-2 rounded-md"
                                    value={formData.toPhone} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="toPlace" className="font-medium">Place</label>
                                <input id="toPlace" name="toPlace" placeholder="Enter Place" className="border px-3 py-2 rounded-md"
                                    value={formData.toPlace} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="fileNo" className="font-medium">File No</label>
                                <input id="fileNo" name="fileNo" placeholder="Enter File No" className="border px-3 py-2 rounded-md"
                                    value={formData.fileNo} onChange={handleChange} />
                            </div>

                            {/* BUG FIX: toEmail was in original form but does NOT exist in the Outward model.
                                The schema has EmailToCSV (bulk notification) not a single recipient email.
                                Removed toEmail; emailTo (EmailToCSV) is handled in Internal Routing below. */}

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="toAddress" className="font-medium">To Address</label>
                                <textarea id="toAddress" name="toAddress" placeholder="Enter To Address" rows={3}
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.toAddress} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="subjectShort" className="font-medium">Subject (Short)</label>
                                <input id="subjectShort" name="subjectShort" placeholder="Enter Short Subject" className="border px-3 py-2 rounded-md"
                                    value={formData.subjectShort} onChange={handleChange} />
                            </div>

                            {/* Removed the empty <div /> spacer — col-span-2 subject fills naturally */}

                            <div className="col-span-2 flex flex-col gap-1">
                                <label htmlFor="subject" className="font-medium">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Enter Subject" rows={2}
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.subject} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: Courier Details */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Courier Details</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierReceiptNo" className="font-medium">Courier Receipt No</label>
                                <input id="courierReceiptNo" name="courierReceiptNo" placeholder="Enter Receipt No" className="border px-3 py-2 rounded-md"
                                    value={formData.courierReceiptNo} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="courierReceiptDate" className="font-medium">Courier Receipt Date</label>
                                <input id="courierReceiptDate" name="courierReceiptDate" type="date" className="border px-3 py-2 rounded-md"
                                    value={formData.courierReceiptDate} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* BUG FIX: was named courierCharges but schema field is "Charges" — mapped to courierCharges in state */}
                                <label htmlFor="courierCharges" className="font-medium">Courier Charges</label>
                                <input id="courierCharges" name="courierCharges" type="number" step="0.01" min="0" placeholder="0.00"
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.courierCharges} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* BUG FIX: was chargesPaidBy but schema field is AmountPaidType — mapped to chargesPaidBy in state */}
                                <label htmlFor="chargesPaidBy" className="font-medium">Charges Paid By</label>
                                <select id="chargesPaidBy" name="chargesPaidBy"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.chargesPaidBy} onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Account">Account</option>
                                    <option value="ToPay">To Pay</option>
                                    <option value="Prepaid">Prepaid</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="deliveryStatus" className="font-medium">Delivery Status</label>
                                <select id="deliveryStatus" name="deliveryStatus"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.deliveryStatus} onChange={handleChange}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="InTransit">In Transit</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Returned">Returned</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: Internal Routing */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Internal Routing</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="dispatchedByName" className="font-medium">Dispatched By</label>
                                <input id="dispatchedByName" name="dispatchedByName" placeholder="Dispatched By" className="border px-3 py-2 rounded-md"
                                    value={formData.dispatchedByName} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="departmentId" className="font-medium">Department</label>
                                <select id="departmentId" name="departmentId"
                                    className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
                                    value={formData.departmentId} onChange={handleChange}
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

                            <div className="flex flex-col gap-1">
                                {/* maps to SMSToCSV in schema */}
                                <label htmlFor="smsTo" className="font-medium">SMS To</label>
                                <input id="smsTo" name="smsTo" placeholder="Mobile numbers (comma-separated)" className="border px-3 py-2 rounded-md"
                                    value={formData.smsTo} onChange={handleChange} />
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* maps to EmailToCSV in schema */}
                                <label htmlFor="emailTo" className="font-medium">Email To</label>
                                <input id="emailTo" name="emailTo" placeholder="Emails (comma-separated)" className="border px-3 py-2 rounded-md"
                                    value={formData.emailTo} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6: Return Handling */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Return Handling</h3>

                        <div className="grid grid-cols-3 gap-7">
                            <div className="flex items-center gap-3">
                                <input
                                    id="isReturned"
                                    name="isReturned"
                                    type="checkbox"
                                    className="w-4 h-4 accent-[#1e6784]"
                                    checked={formData.isReturned}
                                    onChange={handleChange}
                                />
                                <label htmlFor="isReturned" className="font-medium">Is Returned</label>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="returnDate" className="font-medium">Return Date</label>
                                <input id="returnDate" name="returnDate" type="date" className="border px-3 py-2 rounded-md"
                                    value={formData.returnDate} onChange={handleChange} />
                            </div>

                            <div className="col-span-3 flex flex-col gap-1">
                                <label htmlFor="returnReason" className="font-medium">Return Reason</label>
                                <textarea id="returnReason" name="returnReason" placeholder="Enter Return Reason" rows={2}
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.returnReason} onChange={handleChange} />
                            </div>

                            <div className="col-span-3 flex flex-col gap-1">
                                <label htmlFor="returnAction" className="font-medium">Return Action</label>
                                <textarea id="returnAction" name="returnAction" placeholder="Enter Return Action Taken" rows={2}
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.returnAction} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* SECTION 7: Attachments & Remarks */}
                    <section>
                        <h3 className="font-semibold text-gray-700 mb-4 text-[16px]">Attachments & Remarks</h3>

                        <div className="grid grid-cols-2 gap-7">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="documentPath" className="font-medium">Document</label>
                                <input id="documentPath" name="documentPath" type="file"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) setFormData((prev) => ({ ...prev, documentPath: file.name }));
                                    }}
                                />
                                {formData.documentPath && (
                                    <span className="text-sm text-gray-500 mt-1">Current: {formData.documentPath}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* maps to CourierReceiptPath in schema */}
                                <label htmlFor="receiptPath" className="font-medium">Courier Receipt</label>
                                <input id="receiptPath" name="receiptPath" type="file"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) setFormData((prev) => ({ ...prev, receiptPath: file.name }));
                                    }}
                                />
                                {formData.receiptPath && (
                                    <span className="text-sm text-gray-500 mt-1">Current: {formData.receiptPath}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                {/* maps to CourierAcknowledgePath in schema */}
                                <label htmlFor="acknowledgePath" className="font-medium">Acknowledgement</label>
                                <input id="acknowledgePath" name="acknowledgePath" type="file"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) setFormData((prev) => ({ ...prev, acknowledgePath: file.name }));
                                    }}
                                />
                                {formData.acknowledgePath && (
                                    <span className="text-sm text-gray-500 mt-1">Current: {formData.acknowledgePath}</span>
                                )}
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="remarks" className="font-medium">Remarks</label>
                                <textarea id="remarks" name="remarks" placeholder="Remarks" rows={3}
                                    className="border px-3 py-2 rounded-md"
                                    value={formData.remarks} onChange={handleChange} />
                            </div>
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex justify-center gap-6 mt-10">
                        <button
                            type="submit"
                            className="px-8 py-2 rounded-md bg-[#1e6784] text-white hover:bg-[#175067] transition cursor-pointer">
                            {isEditMode ? "Update Outward" : "Save Outward"}
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

export default AddEditOutward;