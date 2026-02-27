import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { financialYearColumns } from "./financialYearColumns";
import AddButton from "../../components/addButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";
import ViewFinancialYearModal from "./viewFinancialYearModal";

const FinancialYear = () => {

    const navigate = useNavigate();
    const [financialYears, setFinancialYears] = useState([]);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [rowToView, setRowToView] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

    useEffect(() => {
        const fetchFinancialYears = async () => {
            try {
                const { data } = await axios.get("/api/financialYear");
                setFinancialYears(data.data);
            } catch (err) {
                console.error("Failed to load financial year data:", err);
            }
        };
        fetchFinancialYears();
    }, []);

    const handleEdit = (row) => {
        navigate(`/financialYear/${row.finYearId}`);
    };

    const handleDelete = (row) => {
        setRowToDelete(row);
        setIsDeleteOpen(true);
    };

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/financialYear/${row.finYearId}`);
            setFinancialYears((prev) => prev.filter((fy) => fy.finYearId !== row.finYearId));
            setIsDeleteOpen(false);
        } catch (err) {
            console.error("Failed to delete financial year:", err);
        }
    };

    const handleView = (row) => {
        setRowToView(row);
        setIsViewOpen(true);
    };

    return (
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-[22px]">
                        <FaListUl />
                        <span>Financial Year List</span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6" />

                <DataTable
                    columns={financialYearColumns}
                    data={financialYears}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onView={handleView}
                />
            </div>

            {isDeleteOpen && (
                <ConfirmDeleteModal
                    onCancel={() => setIsDeleteOpen(false)}
                    onConfirm={() => handleConfirmDelete(rowToDelete)}
                />
            )}

            {isViewOpen && (
                <ViewFinancialYearModal
                    onCancel={() => setIsViewOpen(false)}
                    onEdit={(row) => { setIsViewOpen(false); handleEdit(row); }}
                    data={rowToView}
                />
            )}
        </div>
    );
};

export default FinancialYear;
