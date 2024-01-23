import { 
  pgTable, 
  varchar, uuid, timestamp 
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { posts } from '../Post/schema';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email').unique().notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at')
});