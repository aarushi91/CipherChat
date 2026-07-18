import { motion } from "framer-motion";

const ChatBubble = ({
    message,
    own = false
}) => {

    return (

        <motion.div

            initial={{
                opacity:0,
                x: own ? 40 : -40
            }}

            animate={{
                opacity:1,
                x:0
            }}

            transition={{
                duration:.4
            }}

            className={`flex ${own ? "justify-end":"justify-start"}`}
        >

            <div
                className={`
                max-w-[75%]
                rounded-3xl
                px-5
                py-3

                ${own
                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                : "bg-zinc-800"}
                `}
            >

                {message}

            </div>

        </motion.div>

    );

};

export default ChatBubble;