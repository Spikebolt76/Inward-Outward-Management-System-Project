import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { outwardColumns } from "./outwardColumns";
import AddButton from "../../components/addButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import ViewOutwardModal from "./viewOutwardModal";

const Outward = () => {

    const navigate = useNavigate();
    const [outwards, setOutwards] = useState([]);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [rowToView, setRowToView] = useState(null);

    useEffect(() => {
        const fetchOutwardsData = async () => {
            try {
                const { data } = await axios.get("/api/outwards");

                setOutwards(data.data || []);
            } catch(err) {
                console.log("failed to load outwards data", err)
            }
        }

        fetchOutwardsData();
    }, []);

    const handleDelete = (row) => {
        setRowToDelete(row);
        isDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/outwards/${row.outwardId}`);

            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete outward data", err)
        }
    }

    const handleEdit = (row) => {
        navigate(`/outward/${row.outwardId}`);
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
                            Outward List
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                    columns={outwardColumns}
                    data={outwards}
                    rowKey="outwardId"
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onView={handleView}
                />

                {isDeleteOpen && <ConfirmDeleteModal 
                onCancel={() => setIsDeleteOpen(false)}
                onConfirm={() => handleConfirmDelete(rowToDelete)}/>}

                {isViewOpen && <ViewOutwardModal 
                onEdit={handleEdit}
                onCancel={() => setIsViewOpen(false)}
                data={rowToView}/>}
            </div>
        </div>
    );
}

export default Outward;