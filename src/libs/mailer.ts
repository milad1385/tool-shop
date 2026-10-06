import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
  },
});

export const sendAnswer = async (email: string, message: string) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_USER,
    to: email,
    subject: "جواب پیام شما",
    html: `
      <div dir="rtl" style="font-family: Vazir, Tahoma, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px;">
        <h2 style="color: #e50914; text-align: center;">جواب پیغام شما : </h2>
         <p style="color: #000000; font-size: 16px;">${message}</p>
        <p style="color: #666; font-size: 14px;">اگر درخواست پیغامی نداده‌اید، این ایمیل را نادیده بگیرید.</p>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">لینک مستقیم: ${"tool-shop-xi.vercel.app"}</p>
         <div style="background: #fff; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
          <a href="tool-shop-xi.vercel.app" style="display: inline-block; background: #e50914; color: white; padding: 12px 30px; border-radius: 5px; text-decoration: none; font-weight: bold;">
           فروشگاه ترازو
          </a>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
