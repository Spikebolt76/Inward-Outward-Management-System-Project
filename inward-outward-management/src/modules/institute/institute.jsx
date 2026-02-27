import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { instituteColumns } from "./instituteColumns";
import AddButton from "../../components/addButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import ViewInstituteModal from "./viewInstituteModal";

const Institutes = () => {
	
	const navigate = useNavigate();
	const [institutes, setInstitutes] = useState([]);
	const [rowToDelete, setRowToDelete] = useState(null);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);
	const [rowToView, setRowToView] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get('/api/institutes');
				setInstitutes(data.data || []);
			} catch (err) {
				console.log('failed to load institutes', err);
			}
		}

		fetchData();
	}, []);

	const handleEdit = (row) => {
		navigate(`/institutes/${row.instituteId}`);
	}

	const handleDelete = (row) => {
		setRowToDelete(row);
		setIsDeleteOpen(true);
	}

	const handleConfirmDelete = async (row) => {
		try {
			await axios.delete(`/api/institutes/${row.instituteId}`);
			setInstitutes(prev => prev.filter(i => i.instituteId !== row.instituteId));
			setIsDeleteOpen(false);
		} catch (err) {
			console.log('failed to delete institute', err);
		}
	}

	const handleView = (row) => {
        setRowToView(row);
        setIsViewOpen(true);
    }

	return (
		<div className="flex-1">
			<div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
				<div className="flex justify-between">
					<div className="flex items-center gap-4 text-[22px]">
						<FaListUl />
						<span>Institutes</span>
					</div>
					<AddButton />
				</div>

				<hr className="border-gray-400 my-6 -mx-6"/>

				<DataTable
					columns={instituteColumns}
					data={institutes}
					rowKey="instituteId"
					onEdit={handleEdit}
					onDelete={handleDelete}
					onView={handleView}
				/>
			</div>

			{isDeleteOpen && <ConfirmDeleteModal
				onCancel={() => setIsDeleteOpen(false)}
				onConfirm={() => handleConfirmDelete(rowToDelete)}
			/>}

			{isViewOpen && <ViewInstituteModal 
            onCancel={() => setIsViewOpen(false)}
            onEdit={handleEdit}
            data={rowToView}/>}
		</div>
	);
}

export default Institutes;
