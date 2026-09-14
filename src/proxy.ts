import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { UserRoleEnums } from "./libs/types";
import { verifyToken } from "./utils/helper";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken");

  const session = await auth();

  if (pathname.startsWith("/auth")) {
    if (accessToken || session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/p-user")) {
    if (!accessToken && !session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/p-admin")) {
    if (!accessToken && !session) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    let isAdmin = false;

    if (accessToken) {
      try {
        const user = verifyToken(accessToken.value);
        isAdmin = user.roles.some((role: UserRoleEnums) =>
          [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(role)
        );
      } catch (error) {
        console.error("خطا در verifyToken:", error);
      }
    }

    if (!isAdmin && session?.user) {
      const roles = (session.user as any).roles || [];
      isAdmin = roles.some((role: string) =>
        [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(
          role as UserRoleEnums
        )
      );
    }

    if (!isAdmin) {
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