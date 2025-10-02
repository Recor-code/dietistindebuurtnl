# ADHD Coach in de Buurt

## Overview

ADHD Coach in de Buurt is a Dutch/Belgian web platform designed to help people find ADHD coaches and therapists in their local area. The application serves as a directory and matchmaking service for individuals seeking ADHD support, featuring location-based search, coach profiles, reviews, and an AI-powered chat assistant to help users understand their ADHD needs.

The platform targets Dutch and Belgian cities, providing localized information about ADHD coaches, therapists, and resources. It includes features like interactive maps, coach filtering, blog content, and an intelligent chat system that can analyze conversations to provide personalized ADHD guidance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router using React 19
- **Styling**: Tailwind CSS v4 with custom design system
- **TypeScript**: Full TypeScript implementation for type safety
- **Components**: Custom React components with Lucide React icons
- **SEO**: Built-in Next.js SEO optimization with dynamic sitemaps and robots.txt
- **Analytics**: Vercel Analytics integration for performance monitoring

### Backend Architecture
- **API Routes**: Next.js API routes for server-side functionality
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Design**: Centralized schema definition in `shared/schema.ts` with tables for cities, coaches, blog posts, and FAQ items
- **Real-time Features**: WebSocket support via `ws` package for potential real-time functionality

### Data Storage Solutions
- **Primary Database**: Supabase (PostgreSQL) as the main data store
- **Database Schema**: Relational design with cities, places (Google Maps data), coaches (legacy), blog posts, and FAQ items
- **Primary Data Source**: Places table contains all specialist listings with Google Maps integration
- **Migration Strategy**: Drizzle Kit for database migrations and schema management
- **Data Seeding**: Automated seeding system for Dutch and Belgian cities with specialist data from Google Maps

### Authentication and Authorization
- **Auth Provider**: Supabase Authentication for user management
- **Client Setup**: Separate client and server-side Supabase configurations
- **Security**: Environment-based API key management with service role keys for server operations

### AI Integration
- **Chat System**: OpenAI GPT-5 integration for ADHD coaching assistance available on homepage, FAQ, blog, and all city pages
- **Analysis Engine**: Conversation analysis to identify ADHD pain points and provide recommendations
- **Response Generation**: Context-aware responses for ADHD-related queries
- **Structured Output**: JSON-formatted analysis results for consistent data handling
- **City Page Integration**: ChatAssistant component positioned above the "ADHD Coaches op de kaart" section for easy access during coach discovery

## External Dependencies

### Core Services
- **Supabase**: Primary database and authentication provider
- **OpenAI API**: GPT-5 model for AI chat assistance and conversation analysis
- **Google Maps API**: Interactive maps for coach location visualization
- **Vercel**: Hosting platform with analytics integration

### Development Tools
- **Drizzle Kit**: Database schema management and migrations
- **Next.js**: React framework with server-side rendering and API routes
- **Tailwind CSS**: Utility-first CSS framework for styling

### Third-party Libraries
- **Form Handling**: React Hook Form with Zod validation schemas
- **Icons**: Lucide React for consistent iconography
- **WebSockets**: Native WebSocket support for real-time features
- **SEO**: Next-SEO for enhanced search engine optimization

### Geographic Data
- **City Database**: Pre-populated data for 100 largest Dutch cities and 50+ largest Flemish cities (Dutch-speaking Belgium only)
- **Location Services**: Google Maps integration for geographic visualization and search
- **Geolocation**: Latitude/longitude coordinate system for precise location matching

### Payment System (NEW)
- **Stripe Integration**: Secure payment processing for premium coach placements
- **Featured Spots**: Three-tier premium positioning system (€199/€149/€99 per month)
- **Payment Tracking**: Database integration for subscription management and payment history
- **Security**: Server-side validation and protected API endpoints

## Recent Changes

**October 2, 2025**: Completed full migration from coaches table to places table (Google Maps data):
- ✅ Updated specialist pages (`/specialist/[slug]`) to query exclusively from places table using slug column
- ✅ Updated city pages (`/stad/[slug]`) to query exclusively from places table using CITY column matching
- ✅ Implemented visible filter buttons (no dropdowns): Kindvriendelijk, Weekend beschikbaar, Hoogste beoordeling
- ✅ Configured default sorting by RESULT POSITION column (lower = more relevant/higher in Google results)
- ✅ Configured Hoogste beoordeling filter to sort by SCORE column (higher = better rating)
- ✅ Using correct filter column names: `kindvriendelijk_filter`, `weekend_beschikbaar_filter`, `basisverzekering_filter`, `studenten_filter`
- ✅ Email filtering: skips "n/a" values when displaying contact information
- ✅ Reviews properly linked via PLACE_ID matching between places and reviews tables
- ✅ All 415 cities now display specialists from Google Maps data

**Database Structure**:
- **places table**: Primary data source with columns: PLACE ID (varchar), NAME, CATEGORY, ADDRESS, CITY, PHONE, EMAIL, WEBSITE, URL, SCORE, RATINGS, OPENING HOURS, RESULT POSITION, filter columns, slug
- **Filter columns**: Values are 'yes' or 'no' strings
- **Sorting**: Default by RESULT POSITION (ascending), optional by SCORE (descending)
- **City matching**: Uses CITY column (city name) to match with cities.name

**September 29, 2025**: Successfully implemented Stripe-powered featured spots system for premium coach placements:
- ✅ Added `featured_spots` database schema with payment tracking, position management, and expiration dates
- ✅ Created Stripe API endpoints for payment processing (`create-payment-intent`, `confirm-featured-spot`)
- ✅ Built FeaturedSpots display component with premium styling and crown badges
- ✅ Developed FeaturedSpotPurchase component with Stripe Elements integration
- ✅ Integrated featured spots section into city pages (positioned above map section)
- ✅ Implemented tiered pricing: €199 (top), €149 (second), €99 (third) per month