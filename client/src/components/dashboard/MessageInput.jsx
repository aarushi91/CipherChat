import { useState } from "react";

import {

    Smile,

    Paperclip,

    Mic,

    Send,

} from "lucide-react";

import EmojiPicker from "emoji-picker-react";

const MessageInput = () => {

    const [message, setMessage] = useState("");

    const [showEmoji, setShowEmoji] = useState(false);

    return (

        <div
            className="
            relative
            border-t
            border-white/10
            bg-[#111111]
            p-5
            "
        >

            {showEmoji && (

                <div className="absolute bottom-24 left-4 z-50">

                    <EmojiPicker

                        onEmojiClick={(emoji) => {

                            setMessage(

                                message + emoji.emoji

                            );

                        }}

                    />

                </div>

            )}

            <div
                className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                "
            >

                <button
                    onClick={() =>
                        setShowEmoji(!showEmoji)
                    }
                >

                    <Smile size={22} />

                </button>

                <button>

                    <Paperclip size={20} />

                </button>

                <input

                    value={message}

                    onChange={(e) =>
                        setMessage(e.target.value)
                    }

                    placeholder="Type a message..."

                    className="
                    flex-1
                    bg-transparent
                    outline-none
                    "
                />

                <button>

                    <Mic size={20} />

                </button>

                <button
                    className="
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    to-fuchsia-600
                    p-3
                    hover:scale-105
                    transition
                    "
                >

                    <Send size={18} />

                </button>

            </div>

        </div>

    );

};

export default MessageInput;