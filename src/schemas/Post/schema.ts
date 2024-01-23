import {
  pgTable,
  varchar, uuid, timestamp, text
} from 'drizzle-orm/pg-core';

import { users } from '../User/schema';

export const posts = pgTable('posts', {
  id: uuid('id').primaryKey(),
  title: varchar('title').notNull(),
  content: text('content'),
  authorId: uuid('authorId').references(() => users.id, {
    onDelete: 'cascade',
  }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at')
});


