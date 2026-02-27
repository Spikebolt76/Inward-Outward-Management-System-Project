import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { inwardColumns } from "./inwardColumns";
import AddButton from "../../components/addButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import ViewInwardModal from "./viewInwardModal";

const Inward = () => {

    const navigate = useNavigate();
    const [inwards, setInwards] = useState([]);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [rowToView, setRowToView] = useState(null);

    useEffect(() => {
        const fetchInwardsData = async () => {
            try {
                const { data } = await axios.get("/api/inwards");

                setInwards(data.data || []);
            } catch(err) {
                console.log("failed to load inwards data", err)
            }
        }

        fetchInwardsData();
    }, []);

    const handleDelete = (row) => {
        setRowToDelete(row);
        isDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/inwards/${row.inwardId}`);

            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete inward data", err)
        }
    }

    const handleEdit = (row) => {
        navigate(`/inward/${row.inwardId}`);
    }

    const handleView = (row) => {
        setRowToView(row);
        setIsViewOpen(true);
    }

    return(
        <div className="flex-1">
           <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-[22px]">
                        <FaListUl />
                        <span>
                            Inward List
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                    columns={inwardColumns}
                    data={inwards}
                    rowKey="inwardId"
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onView={handleView}
                />
            </div>

            {isDeleteOpen && <ConfirmDeleteModal 
                onCancel={() => setIsDeleteOpen(false)}
                onConfirm={() => handleConfirmDelete(rowToDelete)}/>}

            {isViewOpen && <ViewInwardModal 
            onEdit={handleEdit}
            onCancel={() => setIsViewOpen(false)}
            data={rowToView}/>}
        </div>
    );
}

export default Inward;