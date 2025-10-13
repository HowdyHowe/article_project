import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
    try {
        const token = req.cookies.get("accessToken")?.value;
        const role = req.cookies.get("role")?.value;
        const url = req.nextUrl.clone();

        console.log("Ini token: ", token);
        console.log("Ini role: ", role);

        if (!token || !role) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        // 1. Not logged in
        if (req.nextUrl.pathname === "/") {
            if (role === "USER"){
                console.log("Get User");
                url.pathname = "/dashboard";
                return NextResponse.redirect(url);
            }
            if (role === "ADMIN") {
                console.log("Get Admin");
                url.pathname = "/admin";
                return NextResponse.redirect(url);
            }
        }

        // 2. Admin access
        if (req.nextUrl.pathname.startsWith("/admin") && role !== "ADMIN") {
            console.log("Non admin trying to access admin special access route");
            url.pathname = "/dashboard";
            return NextResponse.redirect(url);
        }

        if (req.nextUrl.pathname.startsWith("/dashboard") && role !== "USER") {
            console.log("Non user trying to access user route");
            url.pathname = "/admin";
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    } catch (err: unknown) {
        console.log("get here not okay")

        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/", "/dashboard/:path*", "/admin/:path*"]
};