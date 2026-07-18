import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

const MessageList = ({ messages }) => {

    const bottomRef = useRef(null);

    useEffect(() => {

        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });

    }, [messages]);

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