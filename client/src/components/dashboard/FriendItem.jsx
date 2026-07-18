import { motion } from "framer-motion";

const FriendItem = ({
    friend,
    active,
}) => {

    return (

        <motion.div

            whileHover={{
                scale: 1.02,
                x: 4,
            }}

            whileTap={{
                scale: 0.98,
            }}

            className={`
                mx-3
                mb-2
                rounded-2xl
                p-3
                cursor-pointer
                transition-all

                ${
                    active
                        ? "bg-purple-600/20 border border-purple-500/40"
                        : "hover:bg-white/5"
                }
            `}
        >

            <div className="flex items-center gap-3">

                <div className="relative">

                    <img
                        src={`https://ui-avatars.com/api/?name=${friend.name}&background=7c3aed&color=fff`}
                        alt={friend.name}
                        className="w-12 h-12 rounded-full"
                    />

                    {friend.online && (

                        <span
                            className="
                            absolute
                            bottom-0
                            right-0
                            w-3
                            h-3
                            rounded-full
                            bg-green-500
                            border-2
                            border-[#111111]
                            "
                        />

                    )}

                </div>

                <div className="flex-1">

                    <h3 className="font-medium">

                        {friend.name}

                    </h3>

                    <p className="text-sm text-zinc-400">

                        {friend.online
                            ? "Online"
                            : "Offline"}

                    </p>

                </div>

                {friend.unread > 0 && (

                    <span
                        className="
                        bg-purple-600
                        text-xs
                        rounded-full
                        px-2
                        py-1
                        "
                    >
                        {friend.unread}
                    </span>

                )}

            </div>

        </motion.div>

    );

};

export default FriendItem;