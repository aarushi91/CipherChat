import { Navigate } from "react-router-dom";

import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children }) => {

    const {

        loading,

        isAuthenticated,

    } = useAuthStore();

    if (loading) {

        return (

            <div
                className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-[#09090B]
                text-white
                text-xl
                "
            >

                Checking Authentication...

            </div>

        );

    }

    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;

    }

    return children;

};

export default ProtectedRoute;