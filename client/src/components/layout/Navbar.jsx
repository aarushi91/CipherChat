import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <header
            className="
            sticky
            top-0
            z-50
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                mt-6
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-8
                py-4
                flex
                justify-between
                items-center
                shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                "
            >

                <Link
                    to="/"
                    className="
                    text-3xl
                    font-extrabold
                    bg-gradient-to-r
                    from-purple-400
                    to-fuchsia-500
                    bg-clip-text
                    text-transparent
                    "
                >
                    CipherChat
                </Link>

                <div className="flex gap-4">

                    <Link
                        to="/login"
                        className="
                        px-6
                        py-3
                        rounded-full
                        hover:bg-white/10
                        transition
                        "
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="
                        rounded-full
                        px-6
                        py-3
                        bg-gradient-to-r
                        from-purple-600
                        to-fuchsia-600
                        hover:scale-105
                        transition
                        "
                    >
                        Register
                    </Link>

                </div>

            </div>

        </header>

    );

};

export default Navbar;