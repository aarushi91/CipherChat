const AuthButton = ({
    children,
    loading = false,
    ...props
}) => {

    return (

        <button

            disabled={loading}

            className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                py-3
                font-semibold
                transition
                hover:scale-[1.02]
                disabled:opacity-60
                disabled:cursor-not-allowed
            "

            {...props}

        >

            {loading ? "Logging in..." : children}

        </button>

    );

};

export default AuthButton;