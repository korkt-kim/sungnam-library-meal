import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './app/db/schema.server.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.VITE_DB_CONNECTION_STRING!,
  },
})
