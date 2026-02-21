import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { modeColumns } from "./modeColumns";
import AddButton from "../../components/addButton";
import axios from "axios";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewModeModal from "./viewModeModal";

const Modes = () => {
    const navigate = useNavigate();
    const [modes, setModes] = useState([]);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isDelteOpen, setIsDeleteOpen] = useState(false);
    const [rowToView, setRowToView] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

    useEffect(() => {
        const fetchModeData = async () => {
            try {
                const { data } = await axios.get("/api/modes");
                
                setModes(data.data);
            } catch(err) {
                console.log("failed to load modes data", err);
            }
        } 

        fetchModeData();
    }, []);

    const handleEdit = (row) => {
        navigate(`/modes/${row.InOutwardModeID}`);
    }

    const handleDelete = (row) => {
        setRowToDelete(row);        
        setIsDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/modes/${row.InOutwardModeID}`);

            setModes(prev => prev.filter((mode) => mode.InOutwardModeID !== row.InOutwardModeID));
            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete mode data", err);
        }
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
                            Inward/Outward Modes
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                columns={modeColumns}
                data={modes}
                rowKey="InOutwardModeID"
                onView={handleView}
                onDelete={handleDelete}
                onEdit={handleEdit}
                />
            </div>

            {isDelteOpen && <ConfirmDeleteModal 
            onCancel={() => setIsDeleteOpen(false)}
            onConfirm={() => handleConfirmDelete(rowToDelete)}/>}

            {isViewOpen && <ViewModeModal 
            onEdit={handleEdit}
            onCancel={() => setIsViewOpen(false)}
            data={rowToView}/>}
        </div>
    );
}

export default Modes;