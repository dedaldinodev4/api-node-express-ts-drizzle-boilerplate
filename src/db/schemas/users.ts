import { 
  varchar, text, mysqlTable, boolean, serial, timestamp, unique
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

import { posts } from './posts';

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique().notNull(),
  created_at: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));


