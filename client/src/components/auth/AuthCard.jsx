const AuthCard = ({ children }) => {

    return (

        <div
            className="
                w-full
                max-w-md
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-10
                shadow-[0_0_40px_rgba(168,85,247,0.15)]
            "
        >

            {children}

        </div>

    );

};

export default AuthCard;