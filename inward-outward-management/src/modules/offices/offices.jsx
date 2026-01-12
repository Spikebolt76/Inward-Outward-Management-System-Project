import { FaListUl } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import DataTable from "../../components/dataTable";
import { officeColumns } from "./officeColumns";
import { makeDummyData } from "../dummyData";
import AddButton from "../../components/addButton";

const data = makeDummyData(officeColumns, 3);

const Offices = () => {
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
                data={data}
                />
            </div>
        </div>
    );
}

export default Offices;