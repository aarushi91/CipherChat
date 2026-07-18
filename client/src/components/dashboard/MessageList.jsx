import { useEffect, useRef } from "react";

import MessageBubble from "./MessageBubble";

const messages = [

    {
        id: 1,
        own: false,
        text: "Hello 👋",
        time: "2:10 PM",
    },

    {
        id: 2,
        own: true,
        text: "Hi 😊",
        time: "2:11 PM",
    },

    {
        id: 3,
        own: false,
        text: "How's CipherChat going?",
        time: "2:12 PM",
    },

    {
        id: 4,
        own: true,
        text: "Almost finished 🚀",
        time: "2:13 PM",
    },

];

const MessageList = () => {

    const bottomRef = useRef();

    useEffect(() => {

        bottomRef.current?.scrollIntoView({

            behavior: "smooth",

        });

    }, []);

    return (

        <div
            className="
            flex-1
            overflow-y-auto
            p-8
            space-y-5
            "
        >

            {messages.map((msg) => (

                <MessageBubble

                    key={msg.id}

                    own={msg.own}

                    message={msg.text}

                    time={msg.time}

                />

            ))}

            <div ref={bottomRef} />

        </div>

    );

};

export default MessageList;