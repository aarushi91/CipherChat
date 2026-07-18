import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatArea = ({ chat }) => {

    return (

        <section className="flex-1 flex flex-col">

            <ChatHeader
                chat={chat}
            />

            <MessageList
                messages={chat.messages}
            />

            <MessageInput />

        </section>

    );

};

export default ChatArea;