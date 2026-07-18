import Sidebar from "../components/dashboard/Sidebar";
import ChatArea from "../components/dashboard/ChatArea";
import ProfilePanel from "../components/dashboard/ProfilePanel";

const Dashboard = () => {
    return (
        <div className="h-screen bg-[#09090B] flex overflow-hidden">

            <Sidebar />

            <ChatArea />

            <ProfilePanel />

        </div>
    );
};

export default Dashboard;