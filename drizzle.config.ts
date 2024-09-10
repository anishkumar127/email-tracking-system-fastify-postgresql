import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
    schema: './src/db/schema/index.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
});
