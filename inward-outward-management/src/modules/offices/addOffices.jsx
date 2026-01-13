import { FaFilePen } from "react-icons/fa6";

const AddOffices = () => {
    return(
        <div className="flex-1">
            <div className="flex flex-col bg-white rounded-xl m-8 p-6 shadow-lg">
                <div className="flex items-center gap-4 text-[22px]">
                    <FaFilePen />
                    <span>Add/Edit Offices: </span>
                </div>

                <hr className="border-gray-400 my-6 -mx-6"/>

                <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-8 items-center justify-center text-[14px]" >
                    <div className="flex gap-6 items-center">
                        <label htmlFor="officeName" >Office Name </label>
                        <span>:</span>
                        <input className="border-2 rounded-md border-gray-400 p-3 focus:outline-0 text-gray-700" placeholder="Enter Office Name" type="text" id="officeName"/>
                    </div>
                    
                </form>
            </div>
        </div>
            
    );
}

export default AddOffices;