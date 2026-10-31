import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from "../generated/prisma/index.js";

/*const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
 */
const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL_POOLED!,
});

export const prisma = new PrismaClient({ adapter });

// Re-export Prisma enums so all code imports from this singleton
// instead of directly from the generated client.
export { ProfileRole } from '../generated/prisma/index.js';
export { ActivityStatus } from '../generated/prisma/index.js';
export { Weekday } from '../generated/prisma/index.js';
