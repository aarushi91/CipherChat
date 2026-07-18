import FriendItem from "./FriendItem";
import SearchBar from "./SearchBar";

const friends = [
    {
        id: 1,
        name: "Rohit",
        online: true,
        unread: 2,
    },
    {
        id: 2,
        name: "Rahul",
        online: false,
        unread: 0,
    },
    {
        id: 3,
        name: "Priya",
        online: true,
        unread: 5,
    },
];

const Sidebar = () => {
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

                {friends.map(friend => (

                    <FriendItem
                        key={friend.id}
                        friend={friend}
                        active={friend.id === 1}
                    />

                ))}

            </div>

        </aside>
    );
};

export default Sidebar;