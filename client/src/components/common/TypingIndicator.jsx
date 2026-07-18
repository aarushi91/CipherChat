import { motion } from "framer-motion";

const dot = {
    animate: {
        y: [0, -5, 0]
    }
};

const TypingIndicator = () => {

    return (

        <div className="flex gap-1">

            {[0,1,2].map((i)=>(
                <motion.span
                    key={i}
                    variants={dot}
                    animate="animate"
                    transition={{
                        duration:0.6,
                        repeat:Infinity,
                        delay:i*0.2
                    }}
                    className="w-2 h-2 rounded-full bg-zinc-400"
                />
            ))}

        </div>

    );

};

export default TypingIndicator;