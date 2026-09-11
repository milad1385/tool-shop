import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { UserRoleEnums } from "./libs/types";
import { verifyToken } from "./utils/helper";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken");

  if (pathname.startsWith("/auth")) {
    const session = await auth();
    if (accessToken || session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }


  if (pathname.startsWith("/p-user")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/p-admin")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      const user = verifyToken(accessToken.value);
      const isAdmin = user.roles.some((role: UserRoleEnums) =>
        [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(role)
      );

      if (!isAdmin) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: ["/auth/:path*", "/p-user/:path*", "/p-admin/:path*"],
};