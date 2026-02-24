import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { userColumns } from "./userColumns";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/addButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import ConfirmDeleteModal from "../../components/confirmDeleteModal";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [rowToView, setRowToView] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const { data }
                    = await axios.get("/api/users");
                console.log(data)
                setUsers(data.data); 
            } catch(err) {
                console.log("failed to load user data", err);
            }   
        }

        fetchUserData();
    }, []); 

    const handleView = (row) => {
        setIsViewOpen(true);
        setRowToView(row)
    }

    const handleEdit = (row) => {
        navigate(`/users/${row.userId}`);
    }

    const handleDelete = (row) => {
        setRowToDelete(row);
        setIsDeleteOpen(true);
    }

    const handleConfirmDelete = async (row) => {
        try {
            await axios.delete(`/api/users/${row.userId}`);

            setUsers(prev => prev.filter(user => user.userId !== row.userId));
            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete user data", err);
        }
    }

    return(
        <div className="flex-1">
           <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-[22px]">
                        <FaListUl />
                        <span>
                            Users List
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                    columns={userColumns}
                    data={users}
                    rowKey="userId"
                    onView={handleView}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            </div>
            
            {isDeleteOpen && <ConfirmDeleteModal 
                onCancel={() => setIsDeleteOpen(false)}
                onConfirm={() => handleConfirmDelete(rowToDelete)}/>}

            {isViewOpen && <ViewUserModal 
                onEdit={handleEdit} 
                onCancel={() => setIsViewOpen(false)}
                data={rowToView}/>}
                
        </div>
    );
}

export default Users;