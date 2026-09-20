import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { UserRoleEnums } from "./libs/types";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await auth();

  if (pathname.startsWith("/auth")) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/p-user")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/cart") || pathname.startsWith("/checkout")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/p-admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const roles = (session.user as any).roles || [];
    const isAdmin = roles.some((role: string) =>
      [UserRoleEnums.SUPER_ADMIN, UserRoleEnums.ADMIN].includes(
        role as UserRoleEnums,
      ),
    );

    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: [
    "/auth/:path*",
    "/p-user/:path*",
    "/p-admin/:path*",
    "/cart",
    "/checkout",
  ],
};
