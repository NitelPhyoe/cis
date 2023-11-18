import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      //Todo: write logic to protect route

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
