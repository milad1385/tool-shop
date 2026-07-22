import Title from "@/components/modules/main/Title";
import SendContactForm from "@/components/templates/contact/SendContactForm";
import React from "react";

function page() {
  return (
    <div className="mt-24 md:mt-48 flex items-center justify-center flex-col container">
      <Title
        title="پیغام خود را ارسال کنید"
        className="text-2xl md:!text-3xl mt-5"
      />
      <SendContactForm />
    </div>
  );
}

export default page;
