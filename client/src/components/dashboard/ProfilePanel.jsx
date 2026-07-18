import {
    Phone,
    Mail,
    Settings,
    LogOut,
    Image,
    FileText,
} from "lucide-react";

const media = [
    "https://picsum.photos/100?1",
    "https://picsum.photos/100?2",
    "https://picsum.photos/100?3",
    "https://picsum.photos/100?4",
];

const ProfilePanel = ({ chat }) => {

    return (

        <aside
            className="
            w-80
            h-screen
            overflow-y-auto
            border-l
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            scrollbar-thin
            scrollbar-thumb-purple-600
            scrollbar-track-transparent
            "
        >

            <div className="p-8">

                <div className="flex flex-col items-center">

                    <img

                        src={`https://ui-avatars.com/api/?name=${chat.name}&background=7c3aed&color=fff&size=256`}

                        alt={chat.name}

                        className="
                        w-28
                        h-28
                        rounded-full
                        border-4
                        border-purple-500/30
                        "
                    />

                    <h2 className="mt-5 text-3xl font-bold">

                        {chat.name}

                    </h2>

                    <p className="text-zinc-400">

                        {chat.username}

                    </p>

                    <span
                        className={`
                        mt-3
                        rounded-full
                        px-4
                        py-1
                        text-sm

                        ${
                            chat.online
                                ? "bg-green-500/20 text-green-400"
                                : "bg-zinc-700/30 text-zinc-400"
                        }
                        `}
                    >

                        {chat.online ? "● Online" : "● Offline"}

                    </span>

                </div>

                <div className="mt-10 space-y-5">

                    <div className="flex items-center gap-3">

                        <Mail
                            size={18}
                            className="text-purple-400"
                        />

                        <span>

                            {chat.profile.email}

                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <Phone
                            size={18}
                            className="text-purple-400"
                        />

                        <span>

                            {chat.profile.phone}

                        </span>

                    </div>

                </div>

                <div className="mt-10">

                    <h3 className="font-semibold mb-3">

                        Bio

                    </h3>

                    <p className="text-zinc-400 leading-7">

                        {chat.profile.bio}

                    </p>

                </div>

                <div className="mt-10">

                    <h3 className="font-semibold mb-4">

                        Shared Media

                    </h3>

                    <div className="grid grid-cols-2 gap-3">

                        {media.map((img) => (

                            <img

                                key={img}

                                src={img}

                                alt=""

                                className="
                                rounded-xl
                                h-24
                                w-full
                                object-cover
                                hover:scale-105
                                transition
                                cursor-pointer
                                "

                            />

                        ))}

                    </div>

                </div>

                <div className="mt-10 space-y-3">

                    <button className="flex items-center gap-3 w-full rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">

                        <Image size={18}/>

                        Shared Photos

                    </button>

                    <button className="flex items-center gap-3 w-full rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">

                        <FileText size={18}/>

                        Shared Files

                    </button>

                    <button className="flex items-center gap-3 w-full rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">

                        <Settings size={18}/>

                        Settings

                    </button>

                    <button className="flex items-center gap-3 w-full rounded-xl bg-red-500/20 px-4 py-3 text-red-400 hover:bg-red-500/30 transition">

                        <LogOut size={18}/>

                        Logout

                    </button>

                </div>

            </div>

        </aside>

    );

};

export default ProfilePanel;