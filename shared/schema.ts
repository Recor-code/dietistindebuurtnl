import { pgTable, serial, text, boolean, decimal, timestamp, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Cities table for Dutch and Belgian cities
export const cities = pgTable('cities', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  province: text('province').notNull(),
  country: text('country').notNull(), // NL or BE
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
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  email: text('email'),
  phone: text('phone'),
  website: text('website'),
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
  availabilityStatus: text('availability_status').default('available'), // available, busy, not_accepting
  
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Blog posts for SEO
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  metaDescription: text('meta_description'),
  cityId: integer('city_id').references(() => cities.id),
  province: text('province'),
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
  category: text('category'),
  order: integer('order').default(0),
  isPublished: boolean('is_published').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Chat conversations for AI assistant
export const chatConversations = pgTable('chat_conversations', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull(),
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

// Featured spots for premium placement on city pages
export const featuredSpots = pgTable('featured_spots', {
  id: serial('id').primaryKey(),
  coachId: integer('coach_id').notNull().references(() => coaches.id),
  cityId: integer('city_id').notNull().references(() => cities.id),
  position: integer('position').notNull(), // 1, 2, or 3 for the 3 featured spots
  
  // Payment information
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  stripeCustomerId: text('stripe_customer_id'),
  amountPaid: decimal('amount_paid', { precision: 10, scale: 2 }), // Amount in EUR
  currency: text('currency').default('EUR'),
  
  // Subscription period
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  isActive: boolean('is_active').default(true),
  
  // Meta
  notes: text('notes'), // Admin notes
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Relations for featured spots
export const featuredSpotsRelations = relations(featuredSpots, ({ one }) => ({
  coach: one(coaches, {
    fields: [featuredSpots.coachId],
    references: [coaches.id],
  }),
  city: one(cities, {
    fields: [featuredSpots.cityId],
    references: [cities.id],
  }),
}));

export const coachesRelationsExtended = relations(coaches, ({ one, many }) => ({
  city: one(cities, {
    fields: [coaches.cityId],
    references: [cities.id],
  }),
  featuredSpots: many(featuredSpots),
}));

export const citiesRelationsExtended = relations(cities, ({ many }) => ({
  coaches: many(coaches),
  blogPosts: many(blogPosts),
  featuredSpots: many(featuredSpots),
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
export type FeaturedSpot = typeof featuredSpots.$inferSelect;
export type InsertFeaturedSpot = typeof featuredSpots.$inferInsert;