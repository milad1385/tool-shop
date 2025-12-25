import AuthForm from "@/components/templates/seller-introduction/AuthForm";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen px-3">
      <div className="w-full lg:w-[800px]  px-8 py-7 border border-gray-300 rounded-lg bg-gray-50">
        <Image
          alt="image"
          src={"/images/logo.png"}
          width={1920}
          height={1080}
          className="w-[140px] block lg:hidden mt-5 mb-10 mx-auto"
        />
        <h2 className="text-lg font-bold">ورود یا ثبت نام</h2>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="w-full">
            <div className="mt-6 space-y-3">
              <h4>سلام خوش آمدید !</h4>
              <p className="text-sm text-zinc-700">
                برای فروش در ترازو آماده اید ؟
              </p>
              <p className="text-sm text-zinc-700">
                شماره تلفن یا ایمیل خود را وارد کنید :{" "}
              </p>
            </div>
            <AuthForm />
          </div>
          <div className="w-full hidden lg:flex flex-col gap-y-16 items-center justify-center">
            <Image
              alt="image"
              src={"/images/logo.png"}
              width={1920}
              height={1080}
              className="w-[140px]"
            />
            <div className="flex items-center gap-x-2">
              <Image
                alt="image"
                src={"/images/ca-1.png"}
                width={1920}
                height={1080}
                className="w-[70px]"
              />
              <Image
                alt="image"
                src={"/images/ca-2.png"}
                width={1920}
                height={1080}
                className="w-[70px]"
              />
              <Image
                alt="image"
                src={"/images/ca-3.png"}
                width={1920}
                height={1080}
                className="w-[70px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-2 lg:relative flex items-center justify-center gap-x-4 text-sm lg:text-base mt-12">
        <Link href="/" className="text-zinc-700">
          راهنمای ثبت نام
        </Link>
        <div className="w-[1.5px] h-[30px] lg:h-[45px] bg-gray-300"></div>
        <Link href="/" className="text-zinc-700">
          تماس با پشتیبانی
        </Link>
      </div>
    </div>
  );
}

export default page;
