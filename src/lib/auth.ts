import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

// Log di verifica per le variabili d'ambiente
// console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET);
// console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  //   indico la path del mio form per accedere ( senza usare quello default di next )
  pages: {
    signIn: "/accedi",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Inserisci la tua email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const utenteEsistente = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!utenteEsistente) {
          return null;
        }

        const passwordConfronto = await compare(
          credentials.password,
          utenteEsistente.password
        );
        if (!passwordConfronto) {
          return null;
        }
        return {
          // questo id fa il return di un numero per questo motivo ho messo le backtick
          id: `${utenteEsistente.id}`,
          username: utenteEsistente.username,
          email: utenteEsistente.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
// debug:true,
};
