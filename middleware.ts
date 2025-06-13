import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard"], // Specify the routes the middleware applies to
};

// only check the existence of a session cookie to handle redirection 
// - avoid blocking requests by making API/db calls

// checking if there is a session and cookies from current user 
// - if not then dashboard is forbidden for all users