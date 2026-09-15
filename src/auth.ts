import { UserRoleEnums } from "@/libs/types";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGoogleUser } from "./utils/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
      }
      return token;
    },

    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as string[];
        (session.user as any).fullname = token.fullname;
        (session.user as any).username = token.username;
      }
      return session;
    },
  },
});
