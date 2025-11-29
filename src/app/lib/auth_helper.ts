import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';
import { serialize, parse } from 'cookie';

const JWT_SECRET: Secret = process.env.JWT_SECRET as Secret;
const COOKIE_NAME: string = process.env.COOKIE_NAME as string;
const isProd = process.env.NODE_ENV === "production";

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
}

export function signJWT(payload: object) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyJWT<T = any>(token: string): T {
    return jwt.verify(token, JWT_SECRET) as T;
}

export function setTokenCookie(token: string) {
    return serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24,
    })
}

export function clearTokenCookie() {
    return serialize(COOKIE_NAME, "", {
        httpOnly: true,
        secure: isProd,
        sameSite: "lax",
        path: "/",
        maxAge: -1,
    })
}

export function parseTokenFromCookie(cookieHeader: string | null) {
    if (!cookieHeader) return null;
    const parsed = parse(cookieHeader);
    return parsed[COOKIE_NAME] ?? null;
}