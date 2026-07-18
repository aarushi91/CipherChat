import { motion } from "framer-motion";

const MessageBubble = ({
    own,
    message,
    time,
}) => {

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: .3,
            }}

            className={`flex ${own ? "justify-end" : "justify-start"}`}
        >

            <div
                className={`
                    max-w-[70%]
                    rounded-3xl
                    px-5
                    py-3
                    shadow-lg

                    ${
                        own
                            ? "bg-gradient-to-r from-purple-600 to-fuchsia-600"
                            : "bg-white/10 backdrop-blur-xl"
                    }
                `}
            >

                <p>

                    {message}

                </p>

                <p
                    className="
                    mt-2
                    text-xs
                    opacity-70
                    text-right
                    "
                >

                    {time}

                </p>

            </div>

        </motion.div>

    );

};

export default MessageBubble;