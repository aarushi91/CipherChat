import {

    Phone,

    Video,

    MoreVertical,

} from "lucide-react";

const ChatHeader = () => {

    return (

        <div
            className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-8
            py-5
            "
        >

            <div>

                <h2 className="text-2xl font-semibold">

                    Rohit

                </h2>

                <p className="text-green-400">

                    Online

                </p>

            </div>

            <div className="flex gap-4">

                <Phone
                    className="cursor-pointer hover:text-purple-400"
                />

                <Video
                    className="cursor-pointer hover:text-purple-400"
                />

                <MoreVertical
                    className="cursor-pointer hover:text-purple-400"
                />

            </div>

        </div>

    );

};

export default ChatHeader;