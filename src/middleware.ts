import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    const token = req.cookies.get("accessToken")?.value;

    if (!token) {
        const nextRes = NextResponse.redirect(new URL("/login", req.url));

        nextRes.cookies.delete("accessToken");
        nextRes.cookies.delete("role");
        return nextRes;
    }

    try {
        const res = await axios.get("https://test-fe.mysellerpintar.com/login/auth/profile", {
            headers: {Authorization: `Bearer ${token}`}
        })

        if (res.status === 401) {
            const nextRes = NextResponse.redirect(new URL("/login", req.url));

            nextRes.cookies.delete("accessToken");
            nextRes.cookies.delete("role");
            return nextRes;
        }
    } catch (err) {
        const nextRes = NextResponse.redirect(new URL("/login", req.url));

        console.error("Middleware Error: ", err);
        nextRes.cookies.delete("accessToken");
        nextRes.cookies.delete("role");
        return nextRes;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"]
};