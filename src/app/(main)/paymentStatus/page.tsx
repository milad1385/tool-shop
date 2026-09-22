"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import VerifyResult from "@/components/templates/payment/VerifyResult";
import { IVerifyResultStatus } from "@/libs/types";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState<IVerifyResultStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const trackId = searchParams.get("trackId");
      const success = searchParams.get("success");

      if (!trackId) {
        router.replace("/checkout?error=شناسه پرداخت یافت نشد");
        return;
      }

      try {
        const res = await fetch(
          `/api/payment/verify?trackId=${trackId}&success=${success || "1"}`,
        );
        const data = await res.json();
        setResult(data);
      } catch (error) {
        setResult({
          success: false,
          message: "خطا در ارتباط با سرور",
        });
      } finally {
        setIsLoading(false);
      }
    };

    verify();
  }, [searchParams, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4" />
          <p className="text-gray-600">در حال بررسی پرداخت...</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <VerifyResult
      success={result.success}
      message={result.message}
      orderId={result.data?.orderId}
      orderNumber={result.data?.orderNumber}
      failed={result.data?.failed}
    />
  );
}
