import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import dbConnect from '../../../utils/helpers/dbHelpers';
const User = require('../../../models/user');

export default NextAuth({
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ token }) {
      return token;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        await dbConnect();

        const userData = await User.findByCredentials(
          credentials.username,
          credentials.password
        );
        return { user: userData };
      },
    }),
  ],
  secret: process.env.SECRET,
});
