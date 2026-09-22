import { verifyPayment } from "@/libs/actions/order.action";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const trackId = searchParams.get("trackId");
  const success = searchParams.get("success");

  if (!trackId) {
    return NextResponse.json(
      { success: false, message: "شناسه پرداخت یافت نشد" },
      { status: 400 },
    );
  }

  if (success === "0") {
    return NextResponse.json({
      success: false,
      message: "پرداخت توسط شما لغو شد",
      data: { failed: true },
    });
  }

  const result = await verifyPayment(Number(trackId));
  return NextResponse.json(result);
}
