import { 
  varchar, text, mysqlTable, boolean, serial, timestamp
   
} from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';

import { users } from './users';


export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 256 }).notNull(),
  content: text('content'),
  published: boolean('published').default(false),
  authorId: serial('authorId').references(() => users.id).notNull(),
  created_at: timestamp('created_at').defaultNow()
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));


