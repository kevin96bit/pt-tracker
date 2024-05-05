import { SessionOptions } from "iron-session";

export interface SessionData {
  email?: string;

  isLoggedIn: boolean;

}

export const defaultSession:SessionData = {
    isLoggedIn:false
}

export const sessionOptions: SessionOptions = {
  password: "kevinPtTracker",
  cookieName: "kevin-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
// test