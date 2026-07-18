import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({
    label,
    placeholder,
    error,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="space-y-2">

            <label className="text-sm text-zinc-300">

                {label}

            </label>

            <div className="relative">

                <input

                    type={showPassword ? "text" : "password"}

                    placeholder={placeholder}

                    className={`
                        w-full
                        rounded-xl
                        bg-zinc-900/70
                        px-4
                        py-3
                        pr-12
                        outline-none
                        transition

                        ${error
                            ? "border border-red-500"
                            : "border border-white/10 focus:border-purple-500"}
                    `}

                    {...props}

                />

                <button

                    type="button"

                    onClick={() => setShowPassword(!showPassword)}

                    className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-zinc-400
                        hover:text-white
                    "

                >

                    {showPassword

                        ? <EyeOff size={20} />

                        : <Eye size={20} />

                    }

                </button>

            </div>

            {

                error && (

                    <p className="text-sm text-red-400">

                        {error}

                    </p>

                )

            }

        </div>

    );

};

export default PasswordInput;