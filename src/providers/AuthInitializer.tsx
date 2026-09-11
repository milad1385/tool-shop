"use client";
import { useAuthStore } from "@/stores/auth.store";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const { setUser, user: currentUser } = useAuthStore();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      if (currentUser?.id !== session.user.id) {
        setUser({
          id: session.user.id,
          fullname: (session.user as any).fullname || session.user.name || "",
          username: (session.user as any).username || "",
          email: session.user.email || "",
          image: session.user.image || "",
          roles: (session.user as any).roles || ["USER"],
        } as any);
      }
    }
  }, [session, status, setUser]);

  return <>{children}</>;
}

export default AuthInitializer;
