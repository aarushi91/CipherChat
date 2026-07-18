import AnimatedBackground from "../ui/AnimatedBackground";

const AuthLayout = ({ children }) => {

    return (

        <div className="relative min-h-screen bg-[#09090B] overflow-hidden">

            <AnimatedBackground />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

                {children}

            </div>

        </div>

    );

};

export default AuthLayout;