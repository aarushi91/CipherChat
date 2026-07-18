import FriendItem from "./FriendItem";
import SearchBar from "./SearchBar";

const Sidebar = ({
    chats,
    selectedChat,
    setSelectedChat,
}) => {

    return (

        <aside
            className="
            w-80
            bg-white/[0.03]
            backdrop-blur-xl
            border-r
            border-white/10
            flex
            flex-col
            "
        >

            <div className="p-6">

                <h1
                    className="
                    text-3xl
                    font-bold
                    bg-gradient-to-r
                    from-purple-400
                    to-fuchsia-500
                    bg-clip-text
                    text-transparent
                    "
                >
                    CipherChat
                </h1>

                <div className="mt-6">

                    <SearchBar />

                </div>

            </div>

            <div className="flex-1 overflow-y-auto">

                {chats.map((chat) => (

                    <div
                        key={chat.id}
                        onClick={() => setSelectedChat(chat)}
                    >

                        <FriendItem
                            friend={chat}
                            active={selectedChat.id === chat.id}
                        />

                    </div>

                ))}

            </div>

        </aside>

    );

};

export default Sidebar;