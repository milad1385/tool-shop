import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken");
  console.log(accessToken);

  if (pathname.startsWith("/auth")) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/p-user")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/auth/:path*", "/p-user/:path*"],
};
