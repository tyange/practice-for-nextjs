import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware triggered for:", request.url);
  const token = request.cookies.get("token");
  console.log("Token:", token);

  if (!token) {
    console.log("No token, redirecting to login");
    return NextResponse.redirect(new URL("/joinfree/login", request.url));
  }
  console.log("Token found, proceeding");
  return NextResponse.next();
}

export const config = {
  matcher: ["/my-wini"],
};
