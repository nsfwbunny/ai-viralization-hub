import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials: any) {
        if (credentials?.email === "test@test.com" && credentials?.password === "test") {
          return { id: "1", email: "test@test.com", name: "Test" };
        }
        return null;
      }
    })
  ],
  pages: { signIn: "/auth/login" }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
