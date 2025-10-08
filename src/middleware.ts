
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    try {
        const token = req.cookies.get("accessToken")
        const role = req.cookies.get("role");

        if (!token || !role) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    } catch (err: unknown) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"]
};