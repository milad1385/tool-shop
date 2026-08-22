import { getCurrentUser, logoutUser } from "@/libs/actions/auth.actions";
import { UserRoleEnums } from "@/libs/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  id: string;
  username: string;
  phone: string;
  email: string;
  roles: UserRoleEnums[];
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setLoading: (isLoading) =>
        set({
          isLoading,
        }),

      logout: async () => {
        await logoutUser();
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      checkAuth: async () => {
        set({ isLoading: true });

        try {
          const result = await getCurrentUser();

          if (result.success && result.user) {
            set({
              user: result.user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
            });
          }
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
