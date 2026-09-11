"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";

const errorMessages: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: "خطا در تنظیمات",
    description: "مشکلی در تنظیمات سرور رخ داده است. لطفاً بعداً تلاش کنید.",
  },
  AccessDenied: {
    title: "دسترسی رد شد",
    description: "شما اجازه دسترسی به این بخش را ندارید.",
  },
  Verification: {
    title: "خطا در تأیید",
    description: "لینک تأیید منقضی شده یا قبلاً استفاده شده است.",
  },
  OAuthSignin: {
    title: "خطا در ورود",
    description: "مشکلی در فرآیند ورود با گوگل رخ داده است.",
  },
  OAuthCallback: {
    title: "خطا در بازگشت",
    description: "مشکلی در فرآیند بازگشت از گوگل رخ داده است.",
  },
  OAuthCreateAccount: {
    title: "خطا در ساخت حساب",
    description: "مشکلی در ساخت حساب کاربری رخ داده است.",
  },
  EmailCreateAccount: {
    title: "خطا در ساخت حساب",
    description: "مشکلی در ساخت حساب با ایمیل رخ داده است.",
  },
  Callback: {
    title: "خطا در بازگشت",
    description: "مشکلی در فرآیند بازگشت رخ داده است.",
  },
  OAuthAccountNotLinked: {
    title: "حساب متصل نیست",
    description: "این ایمیل قبلاً با روش دیگری ثبت شده است.",
  },
  EmailSignin: {
    title: "خطا در ارسال ایمیل",
    description: "مشکلی در ارسال ایمیل رخ داده است.",
  },
  CredentialsSignin: {
    title: "خطا در ورود",
    description: "ایمیل یا رمز عبور اشتباه است.",
  },
  SessionRequired: {
    title: "نیاز به ورود",
    description: "برای دسترسی به این بخش باید وارد شوید.",
  },
  Default: {
    title: "خطای ناشناخته",
    description: "مشکلی رخ داده است. لطفاً بعداً تلاش کنید.",
  },
};

function ErrorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error") || "Default";

  const errorInfo = errorMessages[error] || errorMessages.Default;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-4">
            <FaExclamationTriangle className="text-red-500 text-4xl" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          {errorInfo.title}
        </h1>


        <p className="text-gray-600 mb-8 leading-relaxed">
          {errorInfo.description}
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="bg-gray-100 rounded-lg p-3 mb-6">
            <p className="text-xs text-gray-500 font-mono">
              Error Code: {error}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/auth/login")}
            className="w-full bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FaArrowRight />
            بازگشت به صفحه ورود
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
          >
            بازگشت به صفحه اصلی
          </button>

          <button
            onClick={() => router.refresh()}
            className="w-full text-stone-600 hover:text-stone-800 px-6 py-2 rounded-lg transition-colors text-sm"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-800" />
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
