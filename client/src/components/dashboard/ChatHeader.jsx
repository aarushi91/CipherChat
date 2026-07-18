const ChatHeader = ({ chat }) => {

    return (

        <div
            className="
            flex
            items-center
            justify-between
            px-8
            py-5
            border-b
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            "
        >

            <div className="flex items-center gap-4">

                <img
                    src={`https://ui-avatars.com/api/?name=${chat.name}&background=7c3aed&color=fff`}
                    alt={chat.name}
                    className="w-14 h-14 rounded-full"
                />

                <div>

                    <h2 className="text-2xl font-semibold">

                        {chat.name}

                    </h2>

                    <p
                        className={
                            chat.online
                                ? "text-green-400"
                                : "text-zinc-500"
                        }
                    >

                        {chat.online ? "Online" : "Offline"}

                    </p>

                </div>

            </div>

        </div>

    );

};

export default ChatHeader;