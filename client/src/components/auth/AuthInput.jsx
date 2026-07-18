const AuthInput = ({
    label,
    error,
    type = "text",
    placeholder,
    ...props
}) => {

    return (

        <div className="space-y-2">

            <label className="text-sm text-zinc-300">

                {label}

            </label>

            <input

                type={type}

                placeholder={placeholder}

                className={`
                    w-full
                    rounded-xl
                    border
                    bg-zinc-900/70
                    px-4
                    py-3
                    outline-none
                    transition
                    ${
                        error
                            ? "border-red-500"
                            : "border-white/10 focus:border-purple-500"
                    }
                `}

                {...props}

            />

            {error && (

                <p className="text-sm text-red-400">

                    {error}

                </p>

            )}

        </div>

    );

};

export default AuthInput;