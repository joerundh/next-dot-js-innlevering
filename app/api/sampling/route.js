import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;

    return NextResponse.json({
        dist: searchParams.get("dist")
    })
}