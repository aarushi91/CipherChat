import { useEffect, useState } from "react";

import GlassCard from "../common/GlassCard";
import ChatBubble from "../common/ChatBubble";
import TypingIndicator from "../common/TypingIndicator";
import SectionTitle from "../common/SectionTitle";

const conversation = [
  {
    own: false,
    text: "Hey Rohit 👋",
  },
  {
    own: true,
    text: "Hello Aarushi 😊",
  },
  {
    own: false,
    text: "How's CipherChat coming?",
  },
  {
    own: true,
    text: "Almost ready 🚀",
  },
];

const ChatShowcase = () => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {

    let messageIndex = 0;

    const runConversation = () => {

        setMessages([]);
        setTyping(false);

        messageIndex = 0;

        const interval = setInterval(() => {

            if (messageIndex >= conversation.length) {

                clearInterval(interval);

                setTyping(true);

                setTimeout(() => {

                    setTyping(false);

                    setTimeout(runConversation, 1000);

                }, 1800);

                return;
            }

            setMessages(prev => [
                ...prev,
                conversation[messageIndex]
            ]);

            messageIndex++;

        }, 1200);

    };

    runConversation();

}, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <SectionTitle
        title="Live Conversation"
        subtitle="Watch CipherChat come alive with real-time messaging."
      />

      <GlassCard className="mt-20 max-w-xl mx-auto p-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

          <div>
            <h3 className="font-semibold text-lg">Aarushi</h3>

            <p className="text-sm text-green-400">Online</p>
          </div>
        </div>

        <div className="space-y-5 min-h-[280px]">
          {messages.map((msg, index) => {

                console.log("Message:", msg);

                if (!msg) return null;

                return (
                    <ChatBubble
                        key={index}
                        own={msg.own}
                        message={msg.text}
                    />
                );

            })}

          {typing && <TypingIndicator />}
        </div>

        <div className="mt-8 flex justify-between text-sm text-zinc-500">
          <span>✓✓ Seen</span>

          <span>2:14 PM</span>
        </div>
      </GlassCard>
    </section>
  );
};

export default ChatShowcase;    