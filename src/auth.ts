import { UserRoleEnums } from "@/libs/types";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { createGoogleUser, authorizeCredentials } from "./utils/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        identifier: { label: "Identifier", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          return null;
        }

        try {
          const user = await authorizeCredentials({
            identifier: credentials.identifier as string,
            password: credentials.password as string,
          });

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === "google") {
          const existingUser = await createGoogleUser({
            email: user.email?.toLowerCase().trim() || "",
            name: user.name,
            image: user.image,
            providerId: profile?.sub,
          });

          if (existingUser.status === "banned") {
            return false;
          }

          user.id = existingUser._id.toString();
          user.roles = existingUser.roles.map((r: any) => r.toString());
          user.fullname = existingUser.fullname?.toString() || "";
          user.username = existingUser.username?.toString() || "";
          user.phone = existingUser.phone?.toString() || "";
        }

        return true;
      } catch (error) {
        return false;
      }
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.roles = user.roles || [UserRoleEnums.USER];
        token.fullname = user.fullname;
        token.username = user.username;
        token.provider = account?.provider;
        token.phone = user.phone;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as string[];
        session.user.fullname = token.fullname;
        session.user.username = token.username;
        session.user.phone = token.phone;
      }
      return session;
    },
  },
});
