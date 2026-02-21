import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { officeColumns } from "./officeColumns";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/addButton";
import { useState, useEffect } from "react";
import axios from 'axios';
import ConfirmDeleteModal from "../../components/confirmDeleteModal";

const Offices = () => {
    const navigate = useNavigate();
    const [offices, setOffices] = useState([]);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [rowToDelete, setRowToDelete] = useState(null);

    useEffect(() => {
        const fetchOfficeData = async () => {
            try{
                const { data }
                    = await axios.get("/api/offices");
                
                setOffices(data.data); 
            } catch(err) {
                console.log("failed to load office data", err);
            }   
        }

        fetchOfficeData();
    }, []); //i better don't forget to put the empty dependency array 

    // const handleView = (office) => {
        
    // }

    const handleEdit = (office) => {
        navigate(`/offices/${office.InOutwardOfficeID}`);
    }

    const handleDelete = async (row) => {
        try {
            await axios.delete(`/api/offices/${row.InOutwardOfficeID}`);

            setOffices(prev => prev.filter(office => office.InOutwardOfficeID !== row.InOutwardOfficeID));
            setIsDeleteOpen(false);
        } catch(err) {
            console.log("failed to delete office data", err);
        }
    }

    return(
        <div className="flex-1">
           <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4 text-[22px]">
                        <FaListUl />
                        <span>
                            Offices List
                        </span>
                    </div>
                    <AddButton />
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <DataTable 
                    columns={officeColumns}
                    data={offices}
                    rowKey="InOutwardOfficeID"
                    //onView={handleView}
                    onDelete={(row) => {
                        setRowToDelete(row);
                        setIsDeleteOpen(true);
                    }}
                    onEdit={handleEdit}
                />
            </div>
            
            {isDeleteOpen && <ConfirmDeleteModal 
                onCancel={() => setIsDeleteOpen(false)}
                onConfirm={() => handleDelete(rowToDelete)}/>}
        </div>
    );
}

export default Offices;