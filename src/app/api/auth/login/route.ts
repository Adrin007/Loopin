"use server";
import { hashPassword,comparePassword, signJWT, setTokenCookie } from "@/app/lib/auth_helper";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const HASHED_TEST_PASSWORD = await hashPassword("chinnu123"); 
    const testUser = {
        userId:"12345",
        email:"adrin@gmail.com",
        password: HASHED_TEST_PASSWORD
    }
    
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody || {};

        if(!email || !password){
            console.log("Missing email or password");
            return NextResponse.json({
                message: "Missing email or password",
            },{ status: 401 })
        }

        const isPasswordValid = await comparePassword(password, testUser.password);
        
        if(!isPasswordValid || email !== testUser.email){
            console.log("Invalid email or password");
            return NextResponse.json({
                message: "Invalid email or password",
            },{ status: 401 })
        }

        const token = signJWT({userId: testUser.userId, email: testUser.email});
        const res = NextResponse.json({ message: "ok", userId: testUser.userId }, { status: 200 });
        res.headers.set("Set-Cookie",setTokenCookie(token));
        return res;
    }
    catch (err) {
        console.error("auth route error:", err);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}