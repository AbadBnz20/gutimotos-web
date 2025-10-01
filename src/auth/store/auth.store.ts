import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../interfaces/user.interfaces";
import { authWithFirebase } from "../actions/authwithfirebase";
import { login } from "../actions/login";
import { checkAuth } from "../actions/check-auth.action";
import { logout } from "../actions/logout.action";
type AuthStatus = "authenticated" | "not-authenticated" | "checking";
type AuthStore = {
  user: User | null;
  access_token: string | null;
  refresh_token: string | null;
  authStatus: AuthStatus;
  login: () => Promise<boolean>;
  logout: () => void;
  checkAuthStatus: () => Promise<boolean>;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      access_token: null,
      refresh_token: null,
      authStatus: "checking",

      login: async () => {
        try {
          const auth = await authWithFirebase();
          if (!auth.status) {
            set({
              user: null,
              access_token: null,
              refresh_token: null,
              authStatus: "not-authenticated",
            });
            return false;
          }

          const data = await login(auth.token!);
          localStorage.setItem("token-access", data.data.access);
          localStorage.setItem("token-refresh", data.data.refresh);

          set({
            user: auth.user,
            access_token: data.data.access,
            refresh_token: data.data.refresh,
            authStatus: "authenticated",
          });
          return true;
        } catch (error) {
          localStorage.removeItem("token-access");
          localStorage.removeItem("token-refresh");
          set({
            user: null,
            access_token: null,
            refresh_token: null,
            authStatus: "not-authenticated",
          });
          return false;
        }
      },

      logout: async () => {
        await logout();
        set({
          user: null,
          access_token: null,
          refresh_token: null,
          authStatus: "not-authenticated",
        });
        localStorage.removeItem("token-access");
        localStorage.removeItem("token-refresh");
      },

      checkAuthStatus: async () => {
        try {
          const { data } = await checkAuth();
          set({
            access_token: data.access,
            authStatus: "authenticated",
          });
         localStorage.setItem("token-access", data.access);
          return true;
        } catch (error) {
          localStorage.removeItem("token-access");
          localStorage.removeItem("token-refresh");
          set({
            user: null,
            access_token: null,
            refresh_token: null,
            authStatus: "not-authenticated",
          });
          return false;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
