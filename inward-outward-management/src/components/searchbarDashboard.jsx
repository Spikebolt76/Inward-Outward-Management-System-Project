import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchbarDashboard = ({label}) => {
  return (
    <div className="relative w-full max-w-sm min-w-[280px] ml-12">
      <input
        placeholder={`Enter ${label} Number`}
        className="w-full rounded-md border-2 border-gray-300 bg-transparent py-3 px-4 text-[15px] text-gray-800 placeholder:text-gray-400
            transition-colors duration-200
            hover:border-gray-400
            focus:border-gray-500 focus:outline-none"
      />

      <button
        type="button"
        className="absolute right-1 flex inset-y-1 items-center gap-3 rounded-md
            bg-gray-800 px-4 py-2 text-[14px] text-white
            transition-colors duration-200
            hover:bg-gray-700
            active:bg-gray-700"
      >
        <FaMagnifyingGlass className="text-sm" />
        Track
      </button>
    </div>
  );
};

export default SearchbarDashboard;