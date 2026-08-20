"use client";

import { hasToken } from "@/libs/actions/auth.actions";
import { useAuthStore } from "@/stores/auth.store";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { checkAuth, isLoading, isAuthenticated } = useAuthStore();
  const initialCheckDone = useRef(false);

  useEffect(() => {
    if (!initialCheckDone.current) {
      initialCheckDone.current = true;
      checkAuth();
    }
  }, [checkAuth]);

  useEffect(() => {
    const verifyAuth = async () => {
      const tokenExists = await hasToken();

      if (!tokenExists && isAuthenticated) {
        checkAuth();
        return;
      }

      if (tokenExists && !isAuthenticated) {
        checkAuth();
        return;
      }
    };

    verifyAuth();
  }, [pathname, isAuthenticated, checkAuth]);

  return <>{children}</>;
}
