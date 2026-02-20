import { FaListUl } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { officeColumns } from "./officeColumns";

import AddButton from "../../components/addButton";
import { useState, useEffect } from "react";
import axios from 'axios';

const Offices = () => {

    const [office, setOffice] = useState([]);

    useEffect(() => {
        const fetchOfficeData = async () => {
            try{
                const { data: { data: offices } }
                    = await axios.get("/api/offices");
                
                setOffice(offices);
            } catch(err) {
                console.log("failed to load office data", err);
            }   
        }

        fetchOfficeData();
    }, []); //i better don't forget to put the empty dependency array bruh

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
                data={office}
                rowKey="InOutOfficeID"
                />
            </div>
        </div>
    );
}

export default Offices;