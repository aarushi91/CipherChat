import { motion } from "framer-motion";

const PhoneFrame = ({ children }) => {
    return (
        <motion.div
            animate={{
                y: [0, -12, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative"
        >
            {/* Purple Glow */}
            <div className="absolute inset-0 blur-3xl bg-purple-600/20 rounded-full scale-90" />

            {/* Phone */}
            <div className="relative w-[320px] h-[650px] rounded-[42px] bg-zinc-900 border border-zinc-700 shadow-[0_0_60px_rgba(168,85,247,0.18)] overflow-hidden">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-30" />

                {/* Screen */}
                <div className="absolute inset-3 rounded-[34px] overflow-hidden bg-[#09090B]">
                    {children}
                </div>

            </div>

        </motion.div>
    );
};

export default PhoneFrame;