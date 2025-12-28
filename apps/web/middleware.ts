import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname.startsWith("/dashboard")) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
