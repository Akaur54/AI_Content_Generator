/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:lPQr4gUDjZ8B@ep-steep-fog-a1s7onh5.ap-southeast-1.aws.neon.tech/AI-Content?sslmode=require',
    }
  };