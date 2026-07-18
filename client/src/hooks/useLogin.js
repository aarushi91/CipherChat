import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginUser } from "../services/authService";
import useAuthStore from "../store/authStore";

const useLogin = () => {

    const navigate = useNavigate();

    const {
        login,
        setLoading,
        loading,
    } = useAuthStore();

    const handleLogin = async (data) => {

        try {

            setLoading(true);

            const response =
                await loginUser(data);

            toast.success(response.message);

            login(response.user);

            navigate("/dashboard");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return {

        handleLogin,

        loading,

    };

};

export default useLogin;