import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Next Movies',
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials;
        if (email === '6o3f1@example.com' && password === 'password') {
          return {
            id: '1',
            name: 'Next Movies',
            email: '6o3f1@example.com',
          }
        } else {
          return null
        }
      },
    })
  ],
  pages: {
    signIn: '/auth/signin'
  },
  secret: process.env.NEXTAUTH_SECRET
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };