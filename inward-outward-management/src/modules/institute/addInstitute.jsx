import { FaFilePen } from "react-icons/fa6";
import CloseButton from "../../components/closeButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const AddEditInstitute = () => {
	const [formData, setFormData] = useState({
		instituteName: "",
		shortName: "",
		email: "",
		phoneNo: "",
		address: "",
		city: "",
		state: "",
		pincode: "",
		isActive: true,
		remarks: "",
	});

	const navigate = useNavigate();
	const { id } = useParams();
	const isEditMode = Boolean(id);

	useEffect(() => {
		if(!id) return;

		const fetchData = async () => {
			try {
				const { data: { data } } = await axios.get(`/api/institutes/${id}`);
				setFormData({
					instituteName: data.instituteName || "",
					shortName: data.shortName || "",
					email: data.email || "",
					phoneNo: data.phoneNo || "",
					address: data.address || "",
					city: data.city || "",
					state: data.state || "",
					pincode: data.pincode || "",
					isActive: data.isActive ?? true,
					remarks: data.remarks || "",
				});
			} catch (err) {
				console.log('failed to load institute', err);
			}
		}

		fetchData();
	}, [id]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if(isEditMode) {
				await axios.put(`/api/institutes/${id}`, formData);
			} else {
				await axios.post('/api/institutes', formData);
			}
			navigate('/institutes');
		} catch (err) {
			console.log('failed to save institute', err);
		}
	};

	const handleReset = () => {
		setFormData({
			instituteName: "",
			shortName: "",
			email: "",
			phoneNo: "",
			address: "",
			city: "",
			state: "",
			pincode: "",
			isActive: true,
			remarks: "",
		});
	};

	return (
		<div className="flex-1">
			<div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">

				<div className="flex justify-between text-[22px] text-gray-800 px-2">
					<div className="flex items-center gap-4">
						<FaFilePen />
						<span>Add / Edit Institute</span>
					</div>

					<CloseButton />
				</div>

				<hr className="border-gray-300 my-6 -mx-6" />

				<form className="text-[15px] px-4 py-2" onSubmit={handleSubmit}>

					<div className="grid grid-cols-2 gap-x-10 gap-y-7">

						<div className="flex flex-col gap-1 col-span-2">
							<label className="font-medium">
								Institute Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="instituteName"
								placeholder="Enter Institute Name"
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
								required
								value={formData.instituteName}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label className="font-medium">Short Name</label>
							<input
								type="text"
								name="shortName"
								placeholder="Enter Short Name"
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.shortName}
								onChange={handleChange}
							/>
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
							<label className="font-medium">Phone</label>
							<input
								type="text"
								name="phoneNo"
								placeholder="Enter Phone"
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.phoneNo}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col gap-1 col-span-2">
							<label className="font-medium">Address</label>
							<textarea
								name="address"
								rows="2"
								placeholder="Enter Address"
								className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
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
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.pincode}
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
								name="remarks"
								rows="3"
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
}

export default AddEditInstitute;
