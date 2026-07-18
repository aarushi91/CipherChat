import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { registerUser } from "../services/authService";
import useAuthStore from "../store/authStore";

const useRegister = () => {

    const navigate = useNavigate();

    const {

        loading,

        setLoading,

    } = useAuthStore();

    const handleRegister = async (data) => {

        try {

            setLoading(true);

            const response = await registerUser(data);

            toast.success(response.message);

            setTimeout(() => {

                navigate("/login");

            }, 1200);

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        } finally {

            setLoading(false);

        }

    };

    return {

        handleRegister,

        loading,

    };

};

export default useRegister;