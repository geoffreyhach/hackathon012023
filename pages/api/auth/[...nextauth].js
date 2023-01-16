import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../api/lib/mongodb";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        async session({ session, token, user }) {
            session.user.isAdmin = user.isAdmin;
            session.user.id = user.id;
            return session;
        },
        secret: process.env.NEXTAUTH_SECRET,
    },
};
export default NextAuth(authOptions);
