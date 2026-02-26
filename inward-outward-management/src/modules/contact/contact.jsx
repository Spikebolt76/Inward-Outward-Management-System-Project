import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { contactColumns } from "./contactColumns";
import AddButton from "../../components/addButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteModal from "../../components/confirmDeleteModal";

const Contact = () => {

    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    

    const handleEdit = (row) => {
        navigate(`/contacts/${row.contactId}`);
    }

    const handleDelete = (row) => {
        setRowToDelete(row);
        setIsDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/contacts/${row.contactId}`);

            setContacts(prev => prev.filter((contact) => contact.contactId !== row.contactId));
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
                            Contact List
                        </span>
                    </div>
                   <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                columns={contactColumns}
                data={contacts}
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

export default Contact;