const GlassCard = ({ children, className = "" }) => {

    return (

        <div
            className={`
            relative
            overflow-hidden
            rounded-3xl

            border
            border-white/10

            bg-white/[0.05]

            backdrop-blur-xl

            shadow-lg

            transition-all
            duration-500

            hover:border-purple-500/40
            hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]

            ${className}
            `}
        >

            {children}

        </div>

    );

};

export default GlassCard;