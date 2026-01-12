import { FaArrowRight, FaIndent, FaOutdent, FaUserTie, FaCaretRight} from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchbarDashboard from "../components/searchbarDashboard";

const Dashboard = () => {
    return(
        <div className="flex-1">
            <div className="flex items-center text-4xl gap-6 mx-8 mt-8 p-6 rounded-xl
            bg-gradient-to-br
            from-white/25
            to-white/5
            backdrop-blur-xl
            border-2 border-white/30
            shadow-lg">
                <FaUserTie />
                <span>Welcome To Admin Dashboard</span>
            </div>
            <div className="flex">
                <div className="flex gap-15 mx-8 mt-8">
                    <div className="flex gap-8 bg-white border-l-5 border-[#d74a49] rounded-xl p-6 shadow-lg">
                        <div className="flex flex-col">
                            <div className="text-[#d74a49] font-medium text-[22px]">Today's Total Inwards</div>
                            <span className="text-[55px] font-bold">67</span>
                            <Link className="flex gap-4 items-center text-[16px] text-gray-700 hover:underline">
                                <span>See Inwards</span>
                                <FaArrowRight/>
                            </Link>
                        </div>
                        <FaIndent className="text-[62px] self-center text-gray-300"/>
                    </div>

                    <div className="flex gap-8 bg-white border-l-5 border-[#2b6e85] rounded-xl p-6 shadow-lg">
                        <div className="flex flex-col">
                            <div className="text-[#2b6e85] font-medium text-[22px]">Today's Total Outwards</div>
                            <span className="text-[55px] font-bold">67</span>
                            <Link className="flex gap-4 items-center text-[16px] text-gray-700 hover:underline">
                                <span>See Outwards</span>
                                <FaArrowRight/>
                            </Link>
                        </div>
                        <FaOutdent className="text-[62px] self-center text-gray-300"/>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-8 mx-8 p-6 rounded-xl shadow-lg flex gap-80 py-10 px-8 ">
                
                    <div className="flex flex-col gap-8">
                        <div className="flex items-baseline gap-4 text-[20px]">
                            <FaCaretRight className="self-center"/>
                            <span className="text-[#d74a49] font-medium">Track Inwards</span>
                            <span className="text-[15px] ">by Inward number</span>
                        </div>
                        <SearchbarDashboard label='Inward'/>
                    </div>
               
                    <div className="flex flex-col gap-8">
                        <div className="flex items-baseline gap-4 text-[20px]">
                            <FaCaretRight className="self-center"/>
                            <span className="text-[#2b6e85] font-medium">Track Outwards</span>
                            <span className="text-[15px] ">by Outward number</span>
                        </div>
                        <SearchbarDashboard label='Outward'/>
                    </div>
                
            </div>
        </div>
    );
}

export default Dashboard;