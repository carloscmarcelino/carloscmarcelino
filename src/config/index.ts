export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
export const AUTH_SECRET = process.env.AUTH_SECRET as string;
export const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID as string;
export const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET as string;
export const IS_CLIENT = typeof window !== 'undefined';
