import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '~/db/db.server'
import * as schema from '~/db/schema.server'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schema,
  }),
  baseURL: process.env.VITE_BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.VITE_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.VITE_GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.VITE_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.VITE_GITHUB_CLIENT_SECRET as string,
    },
  },
})
