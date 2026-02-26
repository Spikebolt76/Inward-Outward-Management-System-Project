import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { courierColumns } from "./courierColumns";
import AddButton from "../../components/addButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";

const Courier = () => {

    const navigate = useNavigate();
    const [couriers, setCouriers] = useState([]);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    useEffect(() => {
        const fetchCouriers = async () => {
            try {
                const { data } = await axios.get("/api/courier"); 

                setCouriers(data.data);
            } catch(err) {
                console.log("failed to load courier data", err);
            }
        }
        fetchCouriers();
    }, []);

    const handleEdit = (row) => {
        navigate(`/couriers/${row.courierCompanyId}`);
    }

    const handleDelete = (row) => {
        setRowToDelete(row);
        setIsDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/couriers/${row.courierCompanyId}`);

            setCouriers(prev => prev.filter((courier) => courier.courierCompanyId !== row.courierCompanyId));
            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete mode data", err);
        }
    }
    return(
        <div className="flex-1">
           <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-[22px]">
                        <FaListUl />
                        <span>
                            Courier Company List
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                columns={courierColumns}
                data={couriers}
                onDelete={handleDelete}
                onEdit={handleEdit}
                />
            </div>

            {isDeleteOpen && <ConfirmDeleteModal
            onCancel={() => setIsDeleteOpen(false)}
            onConfirm={() => handleConfirmDelete(rowToDelete)} />}

        </div>
    );
}

export default Courier;