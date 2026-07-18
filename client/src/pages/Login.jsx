import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

import { loginSchema } from "../validations/loginSchema";
import useLogin from "../hooks/useLogin";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

        resolver: zodResolver(loginSchema),

        defaultValues: {

            email: "",

            password: "",

        },

    });

    const {

        handleLogin,

        loading,

    } = useLogin();

    return (

        <AuthLayout>

            <AuthCard>

                <div className="text-center">

                    <h1 className="text-4xl font-bold">

                        Welcome Back

                    </h1>

                    <p className="mt-3 text-zinc-400">

                        Sign in to continue to CipherChat

                    </p>

                </div>

                <form

                    onSubmit={handleSubmit(handleLogin)}

                    className="mt-10 space-y-6"

                >

                    <AuthInput

                        label="Email"

                        type="email"

                        placeholder="Enter your email"

                        error={errors.email?.message}

                        {...register("email")}

                    />

                    <PasswordInput

                        label="Password"

                        placeholder="Enter your password"

                        error={errors.password?.message}

                        {...register("password")}

                    />

                    <div className="flex items-center justify-between">

                        <label className="flex items-center gap-2 text-sm text-zinc-400">

                            <input
                                type="checkbox"
                                className="accent-purple-600"
                            />

                            Remember Me

                        </label>

                        <button
                            type="button"
                            className="text-sm text-purple-400 hover:text-purple-300"
                        >

                            Forgot Password?

                        </button>

                    </div>

                    <AuthButton

                        loading={loading}

                        type="submit"

                    >

                        Login

                    </AuthButton>

                </form>

                <p className="mt-8 text-center text-zinc-400">

                    Don't have an account?{" "}

                    <Link

                        to="/register"

                        className="text-purple-400 hover:text-purple-300"

                    >

                        Register

                    </Link>

                </p>

            </AuthCard>

        </AuthLayout>

    );

};

export default Login;