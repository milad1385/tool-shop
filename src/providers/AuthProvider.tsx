"use client";

import Loading from "@/components/modules/main/Loading";
import { useAuthStore } from "@/stores/auth.store";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { checkAuth, isLoading } = useAuthStore();
  const initialCheckDone = useRef(false);

  useEffect(() => {
    if (!initialCheckDone.current) {
      initialCheckDone.current = true;
      checkAuth();
    }
  }, [checkAuth]);

  useEffect(() => {
    checkAuth();
  }, [pathname, checkAuth]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}
