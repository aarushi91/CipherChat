import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import ChatArea from "../components/dashboard/ChatArea";
import ProfilePanel from "../components/dashboard/ProfilePanel";

import chatData from "../data/chatData";

const Dashboard = () => {

    const [selectedChat, setSelectedChat] = useState(chatData[0]);

    return (

        <div className="h-screen bg-[#09090B] flex overflow-hidden">

            <Sidebar
                chats={chatData}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
            />

            <ChatArea
                chat={selectedChat}
            />

            <ProfilePanel
                chat={selectedChat}
            />

        </div>

    );

};

export default Dashboard;