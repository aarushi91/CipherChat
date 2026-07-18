import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";

import { registerSchema } from "../validations/registerSchema";
import useRegister from "../hooks/useRegister";

const Register = () => {

    const {
        handleRegister,
        loading,
    } = useRegister();

    const {

        register,

        handleSubmit,

        formState: {

            errors,

        },

    } = useForm({

        resolver: zodResolver(registerSchema),

        defaultValues: {

            fullName: "",

            username: "",

            email: "",

            password: "",

            confirmPassword: "",

        },

    });

    return (

        <AuthLayout>

            <AuthCard>

                <div className="text-center">

                    <h1 className="text-4xl font-bold">

                        Create Account

                    </h1>

                    <p className="mt-3 text-zinc-400">

                        Join CipherChat and start chatting securely

                    </p>

                </div>

                <form

                    onSubmit={handleSubmit(handleRegister)}

                    className="mt-10 space-y-6"

                >

                    <AuthInput

                        label="Full Name"

                        placeholder="Enter your full name"

                        error={errors.fullName?.message}

                        {...register("fullName")}

                    />

                    <AuthInput

                        label="Username"

                        placeholder="Choose a username"

                        error={errors.username?.message}

                        {...register("username")}

                    />

                    <AuthInput

                        label="Email"

                        type="email"

                        placeholder="Enter your email"

                        error={errors.email?.message}

                        {...register("email")}

                    />

                    <PasswordInput

                        label="Password"

                        placeholder="Create a password"

                        error={errors.password?.message}

                        {...register("password")}

                    />

                    <PasswordInput

                        label="Confirm Password"

                        placeholder="Confirm your password"

                        error={errors.confirmPassword?.message}

                        {...register("confirmPassword")}

                    />

                    <AuthButton

                        loading={loading}

                        type="submit"

                    >

                        Create Account

                    </AuthButton>

                </form>

                <p className="mt-8 text-center text-zinc-400">

                    Already have an account?{" "}

                    <Link

                        to="/login"

                        className="text-purple-400 hover:text-purple-300"

                    >

                        Login

                    </Link>

                </p>

            </AuthCard>

        </AuthLayout>

    );

};

export default Register;