import { useEffect } from "react";

import useAuthStore from "../store/authStore";

import { getCurrentUser } from "../services/authService";

const useAuth = () => {

    const {

        user,

        loading,

        setLoading,

        setUser,

    } = useAuthStore();

    useEffect(() => {

        const checkAuth = async () => {

            try {

                const response = await getCurrentUser();

                setUser(response.user);

            }

            catch {

                setUser(null);

            }

            finally {

                setLoading(false);

            }

        };

        checkAuth();

    }, []);

    return {

        user,

        loading,

    };

};

export default useAuth;