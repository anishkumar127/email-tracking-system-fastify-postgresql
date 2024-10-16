import { sql } from 'drizzle-orm';
import { index, pgTable } from 'drizzle-orm/pg-core';

const tickets = pgTable(
    'tickets',
    (t) => ({
        id: t.serial().primaryKey(),
        emailUniqueId: t.varchar({ length: 500 }).notNull(),
        email: t.varchar({ length: 300 }).notNull().default(''),
        userId: t.varchar({ length: 300 }).notNull(),
        isRead: t.boolean().default(false),
        readAt: t.text(),
        lastPingAt: t.text(),
        duration: t.integer().notNull().default(0),
        ipAddress: t.varchar({ length: 100 }),
        location: t.varchar({ length: 200 }),
        browser: t.varchar({ length: 100 }),
        deviceInfo: t.text(),
        system: t.varchar({ length: 200 }),
        createdAt: t.timestamp().default(sql`CURRENT_TIMESTAMP`),
        updatedAt: t.timestamp({ mode: 'date' }).defaultNow(),
    }),
    (table) => {
        return {
            emailUniqueIdIdx: index('email_unique_id_idx').on(table.emailUniqueId),
        };
    }
);
export default tickets;
