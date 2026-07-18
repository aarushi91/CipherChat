import { create } from "zustand";

const useAuthStore = create((set) => ({

    user: null,

    isAuthenticated: false,

    loading: true,

    setLoading: (loading) =>
        set({
            loading,
        }),

    setUser: (user) =>
        set({

            user,

            isAuthenticated: !!user,

        }),

    login: (user) =>
        set({

            user,

            isAuthenticated: true,

        }),

    logout: () =>
        set({

            user: null,

            isAuthenticated: false,

        }),

}));

export default useAuthStore;