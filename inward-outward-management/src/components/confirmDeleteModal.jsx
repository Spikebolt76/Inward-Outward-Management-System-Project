const ConfirmDeleteModal = ({onCancel, onConfirm}) => {

    return(
        <div className="bg-black/40 fixed flex inset-0 justify-center items-center">
            <div className="bg-[#f9fafb] rounded-xl flex flex-col gap-4 p-6">
                <h2 className="text-[25px] font-semibold shadow p-1 bg-gray-200 rounded-sm">Delete record</h2>

                <p className="text-[18px]">Are you sure you want to delete this record?</p>

                <div className="flex gap-4 mt-2 justify-end">
                    <button className="hover:bg-[#bd4141] text-[17px] text-[#f9fafb] border-3 rounded-lg border-[#e4bdbd] bg-[#d74a49] px-3 py-2"
                    onClick={onConfirm}
                    >Delete</button>
                    
                    <button className="hover:bg-gray-300 text-[17px] px-3 py-2 rounded-lg border-2 text-gray-800 border-gray-500"
                    onClick={onCancel}
                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDeleteModal;