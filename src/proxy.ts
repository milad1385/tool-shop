import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { IVerifyUser, UserRoleEnums } from "./libs/types";
import { verifyToken } from "./utils/helper";
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken");

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

  if (pathname.startsWith("/p-admin")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const user = verifyToken(accessToken.value);

    const isAdmin = user.roles.some((role) =>
      [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(role),
    );
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/auth/:path*", "/p-user/:path*", "/p-admin/:path*"],
};
