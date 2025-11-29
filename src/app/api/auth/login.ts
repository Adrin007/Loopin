import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody || {};
        return NextResponse.json({
            message: "Login successful",
            data: {
                email,
                password
            }
        },
            { status: 200 }
        )
    }
    catch (err) {
        console.error("auth route error:", err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}