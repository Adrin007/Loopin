import { NextResponse } from 'next/server';
import { parseTokenFromCookie, verifyJWT } from '@/app/lib/auth_helper';

export async function GET(req: Request) {
    const cookieHeader = req.headers.get('cookie');
    const token = parseTokenFromCookie(cookieHeader);
    if (!token) {
        return NextResponse.json({ loggedIn: false }, { status: 200 });
    }
    try {
        verifyJWT(token); 
        return NextResponse.json({ loggedIn: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ loggedIn: false }, { status: 200 });
    }
}