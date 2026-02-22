import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema.server'

const sql = neon(process.env.VITE_DB_CONNECTION_STRING!)
export const db = drizzle(sql, { schema })
