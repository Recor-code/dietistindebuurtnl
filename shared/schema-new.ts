import { pgTable, serial, text, boolean, decimal, timestamp, integer, varchar } from 'drizzle-orm/pg-core';
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

// PLACES table (Google Maps data) - This will be our primary source
export const places = pgTable('places', {
  // Google Places data
  PLACE_ID: varchar('PLACE ID').primaryKey(), // Unique Google Place ID
  NAME: text('NAME').notNull(),
  slug: text('slug'), // We'll add this column for URL routing
  CATEGORY: text('CATEGORY'),
  STREET_ADDRESS: text('STREET ADDRESS'),
  ADDRESS: text('ADDRESS'),
  CITY: text('CITY'),
  REGION: text('REGION'),
  ZIP_CODE: text('ZIP CODE'),
  COUNTRY_NAME: text('COUNTRY NAME'),
  COUNTRY_CODE: text('COUNTRY CODE'),
  PHONE: text('PHONE'),
  EMAIL: text('EMAIL'),
  WEBSITE: text('WEBSITE'),
  FACEBOOK: text('FACEBOOK'),
  INSTAGRAM: text('INSTAGRAM'),
  URL: text('URL'),
  BOOKING_LINK: text('BOOKING LINK'),
  LAT: decimal('LAT', { precision: 10, scale: 8 }),
  LNG: decimal('LNG', { precision: 11, scale: 8 }),
  SCORE: text('SCORE'),
  RATINGS: text('RATINGS'),
  IS_TEMPORARILY_CLOSED: boolean('IS TEMPORARILY CLOSED'),
  OPENING_HOURS: text('OPENING HOURS'),
  MAIN_IMAGE_URL: text('MAIN IMAGE URL'),
  IMAGES_COUNT: integer('IMAGES COUNT'),
  CID: text('CID'),
  RESULT_POSITION: integer('RESULT POSITION'),
  INPUT_URL: text('INPUT URL'),
  
  // Additional fields we need from coaches table
  specialization: text('specialization'),
  description: text('description'),
  cityId: integer('city_id').references(() => cities.id),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  reviewCount: integer('review_count').default(0),
  isChildFriendly: boolean('is_child_friendly').default(false),
  weekendAvailable: boolean('weekend_available').default(false),
  onlineAvailable: boolean('online_available').default(false),
  inPersonAvailable: boolean('in_person_available').default(true),
  acceptsInsurance: boolean('accepts_insurance').default(false),
  availabilityStatus: text('availability_status').default('available'),
  
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Reviews table (Google Reviews data)
export const reviews = pgTable('reviews', {
  INTERNAL_REVIEW_ID: varchar('INTERNAL REVIEW ID').primaryKey(),
  PLACE_ID: varchar('PLACE ID').notNull().references(() => places.PLACE_ID),
  PLACE_NAME: text('PLACE NAME'),
  PLACE_ADDRESS: text('PLACE ADDRESS'),
  USER_NAME: text('USER NAME'),
  USER_LINK: text('USER LINK'),
  USER_INTERNAL_ID: text('USER INTERNAL ID'),
  USER_REVIEWS_COUNT: text('USER REVIEWS COUNT'),
  USER_IMAGE_URL: text('USER IMAGE URL'),
  IS_USER_LOCAL_GUIDE: boolean('IS USER LOCAL GUIDE'),
  RATING: integer('RATING'),
  TEXT: text('TEXT'),
  PUBLISHED_TIME: text('PUBLISHED TIME'),
  RELATIVE_PUBLISHED_TIME: text('RELATIVE PUBLISHED TIME'),
  OWNER_REPLY: text('OWNER REPLY'),
  OWNER_REPLY_PUBLISHED_TIME: text('OWNER REPLY PUBLISHED TIME'),
  OWNER_REPLY_RELATIVE_PUBLISHED_TIME: text('OWNER REPLY RELATIVE PUBLISHED TIME'),
  CID: text('CID'),
  RESULT_POSITION: integer('RESULT POSITION'),
  
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// LEGACY Coaches table - Will be kept for reference/backup but not used
export const coaches = pgTable('coaches', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull(),
  email: text('email'),
  phone: text('phone'),
  website: text('website'),
  specialization: text('specialization'),
  description: text('description'),
  address: text('address'),
  latitude: decimal('latitude', { precision: 10, scale: 8 }),
  longitude: decimal('longitude', { precision: 11, scale: 8 }),
  cityId: integer('city_id').references(() => cities.id),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  reviewCount: integer('review_count').default(0),
  isChildFriendly: boolean('is_child_friendly').default(false),
  weekendAvailable: boolean('weekend_available').default(false),
  onlineAvailable: boolean('online_available').default(false),
  inPersonAvailable: boolean('in_person_available').default(true),
  acceptsInsurance: boolean('accepts_insurance').default(false),
  availabilityStatus: text('availability_status').default('available'),
  placeId: text('place_id'), // Link to places table
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
  tags: text('tags'),
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
  messages: text('messages'),
  analysis: text('analysis'),
  painPoints: text('pain_points'),
  recommendations: text('recommendations'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Featured spots for premium placement on city pages - NOW LINKS TO PLACES
export const featuredSpots = pgTable('featured_spots', {
  id: serial('id').primaryKey(),
  placeId: varchar('place_id').notNull().references(() => places.PLACE_ID),
  cityId: integer('city_id').notNull().references(() => cities.id),
  position: integer('position').notNull(),
  
  // Payment information
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  stripeCustomerId: text('stripe_customer_id'),
  amountPaid: decimal('amount_paid', { precision: 10, scale: 2 }),
  currency: text('currency').default('EUR'),
  
  // Subscription period
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  isActive: boolean('is_active').default(true),
  
  // Meta
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Relations
export const citiesRelations = relations(cities, ({ many }) => ({
  places: many(places),
  coaches: many(coaches), // Keep for backward compatibility
  blogPosts: many(blogPosts),
  featuredSpots: many(featuredSpots),
}));

export const placesRelations = relations(places, ({ one, many }) => ({
  city: one(cities, {
    fields: [places.cityId],
    references: [cities.id],
  }),
  reviews: many(reviews),
  featuredSpots: many(featuredSpots),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  place: one(places, {
    fields: [reviews.PLACE_ID],
    references: [places.PLACE_ID],
  }),
}));

export const coachesRelations = relations(coaches, ({ one }) => ({
  city: one(cities, {
    fields: [coaches.cityId],
    references: [cities.id],
  }),
  place: one(places, {
    fields: [coaches.placeId],
    references: [places.PLACE_ID],
  }),
}));

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  city: one(cities, {
    fields: [blogPosts.cityId],
    references: [cities.id],
  }),
}));

export const featuredSpotsRelations = relations(featuredSpots, ({ one }) => ({
  place: one(places, {
    fields: [featuredSpots.placeId],
    references: [places.PLACE_ID],
  }),
  city: one(cities, {
    fields: [featuredSpots.cityId],
    references: [cities.id],
  }),
}));

// Type exports
export type City = typeof cities.$inferSelect;
export type InsertCity = typeof cities.$inferInsert;
export type Place = typeof places.$inferSelect;
export type InsertPlace = typeof places.$inferInsert;
export type Review = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;
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