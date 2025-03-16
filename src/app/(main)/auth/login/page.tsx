import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <section className="h-screen px-4 flex items-center">
        <div className="container mx-auto max-w-screen-lg">
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 p-8 md:p-4 lg:p-20 lg:pb-0"></div>
              <div className="hidden md:block">
                <Image
                  className="bg-cover max-w-[413px]"
                  src="/images/auth/login.jpg"
                  alt="login image page :)"
                  width={1920}
                  height={1080}
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
