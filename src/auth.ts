import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "USER", // Default role for Google login
        }
      }
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Mock Database Users
        const { email, password } = credentials;
        
        if (email === "admin@bakeblissairoli.com" && password === "admin123") {
          return {
            id: "admin-1",
            name: "Store Admin",
            email: "admin@bakeblissairoli.com",
            role: "ADMIN",
          };
        }

        if (email === "user@test.com" && password === "user123") {
          return {
            id: "user-1",
            name: "Test User",
            email: "user@test.com",
            role: "USER",
          };
        }

        throw new Error("Invalid credentials");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
});
