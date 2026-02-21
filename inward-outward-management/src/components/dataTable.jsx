import { FaFileLines, FaPenToSquare, FaTrashCan } from "react-icons/fa6"
import Tooltip from "./tooltip";
import ActiveBadge from "./activeBadge";
import InactiveBadge from "./inactiveBadge";

const DataTable = ({
    columns, // DO NOT ADD "Actions" COLUMN TO ANY *Columns.JS FILE
    data, 
    rowKey,
    onView,
    onEdit,
    onDelete,
}) => {

    return (
        <div className="overflow-hidden rounded-lg border border-gray-300">
            <table className="text-left w-full border-collapse shadow-sm text-[15px]">
            
                <thead className="bg-gray-300 border-b border-gray-500 rounded-md border-defaul">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} scope="col" className="px-6 py-3 font-medium">
                                {col.header}
                            </th>
                        ))}

                        <th scope="col" className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>

                <tbody className="bg-gray-100">
                    {data.map((row, rowIndex) => (
                        <tr key={rowKey ? row[rowKey] : rowIndex} className="border-b border-gray-400">

                            {columns.map((col) => (
                                <td key={col.key} className="px-6 py-4">
                                    {col.render ? col.render(row) : 
                                        col.key === 'IsActive' 
                                            ? (row[col.key] ? <ActiveBadge /> : <InactiveBadge />)
                                            : row[col.key]
                                    }
                                </td>
                            ))}
                        
                            <td className="px-6 py-4">
                                <div className="flex gap-4 text-[18px] items-center">

                                    <Tooltip text="View">
                                        <button onClick={() => onView?.(row)}
                                        className="p-3 rounded-md text-blue-700 hover:bg-gray-300 cursor-pointer">
                                            <FaFileLines />
                                        </button>
                                    </Tooltip>                              
                                
                                    <Tooltip text="Edit">
                                        <button onClick={() => onEdit?.(row)}
                                        className="p-3 rounded-md text-green-700 hover:bg-gray-300 cursor-pointer">
                                            <FaPenToSquare />
                                        </button>
                                    </Tooltip>
                            
                                    <Tooltip text="Delete">
                                        <button onClick={() => onDelete?.(row)}
                                        className="p-3 rounded-md text-red-700 hover:bg-gray-300 cursor-pointer">
                                            <FaTrashCan />
                                        </button>
                                    </Tooltip>
                                
                                </div>
                            </td>
                        
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
  )
}

export default DataTable;
