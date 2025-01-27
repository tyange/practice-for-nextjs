import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { SessionPayload } from "@/types/session.types";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(encodedKey);
}

export async function decrypt(session: string) {
  const { payload } = await jwtVerify(session, encodedKey);
  return payload;
}
