import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;

  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute) {
    if (!isLoggedIn || role !== "ADMIN") {
      // Redirect unauthenticated or non-admin users to the homepage
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
