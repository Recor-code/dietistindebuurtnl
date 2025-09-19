import { pgTable, serial, text, boolean, decimal, timestamp, integer, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Cities table for Dutch and Belgian cities
export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  province: varchar('province', { length: 100 }).notNull(),
  country: varchar('country', { length: 2 }).notNull(), // NL or BE
  population: integer('population'),
  latitude: decimal('latitude', { precision: 10, scale: 8 }),
  longitude: decimal('longitude', { precision: 11, scale: 8 }),
  adhdStats: text('adhd_stats'), // JSON string with ADHD statistics
  tldr: text('tldr'), // TL;DR summary for the city
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// ADHD Coaches and Therapists
export const coaches = pgTable('coaches', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 200 }).notNull(),
  slug: varchar('slug', { length: 200 }).notNull(),
  email: varchar('email', { length: 200 }),
  phone: varchar('phone', { length: 50 }),
  website: varchar('website', { length: 300 }),
  specialization: text('specialization'), // ADHD Coach, Gedragstherapeut, etc.
  description: text('description'),
  address: text('address'),
  latitude: decimal('latitude', { precision: 10, scale: 8 }),
  longitude: decimal('longitude', { precision: 11, scale: 8 }),
  cityId: integer('city_id').references(() => cities.id),
  
  // Filters
  rating: decimal('rating', { precision: 3, scale: 2 }), // 0.00 to 5.00
  reviewCount: integer('review_count').default(0),
  isChildFriendly: boolean('is_child_friendly').default(false),
  weekendAvailable: boolean('weekend_available').default(false),
  onlineAvailable: boolean('online_available').default(false),
  inPersonAvailable: boolean('in_person_available').default(true),
  acceptsInsurance: boolean('accepts_insurance').default(false),
  
  // Availability
  availabilityStatus: varchar('availability_status', { length: 50 }).default('available'), // available, busy, not_accepting
  
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Blog posts for SEO
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 300 }).notNull(),
  slug: varchar('slug', { length: 300 }).notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  metaDescription: varchar('meta_description', { length: 160 }),
  cityId: integer('city_id').references(() => cities.id),
  province: varchar('province', { length: 100 }),
  tags: text('tags'), // JSON array of tags
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// FAQ items
export const faqItems = pgTable('faq_items', {
  id: serial('id').primaryKey(),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  category: varchar('category', { length: 100 }),
  order: integer('order').default(0),
  isPublished: boolean('is_published').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Chat conversations for AI assistant
export const chatConversations = pgTable('chat_conversations', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 100 }).notNull(),
  messages: text('messages'), // JSON array of messages
  analysis: text('analysis'), // Final AI analysis
  painPoints: text('pain_points'), // JSON array of identified pain points
  recommendations: text('recommendations'), // JSON array of recommendations
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Relations
export const citiesRelations = relations(cities, ({ many }) => ({
  coaches: many(coaches),
  blogPosts: many(blogPosts),
}));

export const coachesRelations = relations(coaches, ({ one }) => ({
  city: one(cities, {
    fields: [coaches.cityId],
    references: [cities.id],
  }),
}));

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  city: one(cities, {
    fields: [blogPosts.cityId],
    references: [cities.id],
  }),
}));

// Type exports
export type City = typeof cities.$inferSelect;
export type InsertCity = typeof cities.$inferInsert;
export type Coach = typeof coaches.$inferSelect;
export type InsertCoach = typeof coaches.$inferInsert;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;
export type FaqItem = typeof faqItems.$inferSelect;
export type InsertFaqItem = typeof faqItems.$inferInsert;
export type ChatConversation = typeof chatConversations.$inferSelect;
export type InsertChatConversation = typeof chatConversations.$inferInsert;