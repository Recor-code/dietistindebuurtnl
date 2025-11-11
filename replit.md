# Dietist in de Buurt

## Overview

Dietist in de Buurt is a Dutch/Belgian web platform designed to help people find dietists (nutritionists) in their local area. The application serves as a directory and matchmaking service for individuals seeking nutritional guidance and dietary support, featuring location-based search, dietist profiles, reviews, and comprehensive FAQ content to help users understand dietetic services.

The platform targets Dutch and Belgian cities, providing localized information about dietists, nutritionists, and dietary resources. It includes features like interactive maps, dietist filtering, blog content, and extensive FAQs covering costs, insurance, specializations, and finding the right dietist.

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
- **Database Client**: Supabase SDK for all database operations (no ORM layer)
- **Database Access**: Direct Supabase client usage via `supabaseServer` for server-side operations
- **Real-time Features**: WebSocket support via `ws` package for potential real-time functionality

### Data Storage Solutions
- **Primary Database**: Supabase (PostgreSQL) as the main data store
- **Database Schema**: Relational design with cities, places (Google Maps data), coaches (legacy), blog posts, and FAQ items
- **Primary Data Source**: Places table contains all specialist listings with Google Maps integration
- **Database Operations**: All CRUD operations performed via Supabase SDK (supabaseServer)
- **Data Seeding**: Automated seeding system using Supabase SDK for Dutch and Belgian cities

### Authentication and Authorization
- **Auth Provider**: Supabase Authentication for user management
- **Client Setup**: Separate client and server-side Supabase configurations
- **Security**: Environment-based API key management with service role keys for server operations

### AI Integration (Legacy - Currently Disabled)
- **Chat System**: OpenAI GPT-5 integration (currently disabled for performance optimization)
- **Analysis Engine**: Conversation analysis capabilities
- **Response Generation**: Context-aware responses
- **Structured Output**: JSON-formatted analysis results for consistent data handling

## External Dependencies

### Core Services
- **Supabase**: Primary database and authentication provider
- **OpenAI API**: GPT-5 model for AI chat assistance and conversation analysis
- **Google Maps API**: Interactive maps for coach location visualization
- **Vercel**: Hosting platform with analytics integration

### Development Tools
- **Next.js**: React framework with server-side rendering and API routes
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Supabase SDK**: Direct database access without ORM overhead

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

**November 11, 2025**: Footer affiliate link update and city page filter enhancements:
- ✅ **Footer Link Update**: Changed footer promotional link to Organico Labs supplements
  - New text: "Op zoek naar natuurlijke supplementen die doen wat ze beloven?"
  - Links to: https://shop.organicolabs.com/
  - UTM tracking: utm_source=dietistindebuurt.nl&utm_medium=footer&utm_campaign=supplements
- ✅ **10 New Specialty Filters Added to City Pages**: Enhanced filtering with specialty-specific buttons
  - Gewichtsmanagement (Weight Management) - Pink with Scale icon
  - Fitness & Sportvoeding (Fitness & Sports Nutrition) - Orange with Dumbbell icon
  - Spijsverteringsproblemen (Digestive Issues) - Teal with Apple icon
  - Zwangerschap & Borstvoeding (Pregnancy & Breastfeeding) - Rose with Baby icon
  - Bloedonderzoek (Blood Testing) - Red with Activity icon
  - Diabetes - Indigo with Pill icon
  - Voedselallergie (Food Allergies) - Amber with Heart icon
  - Korte wachttijd (Short Wait Time) - Cyan with Timer icon
  - Maaltijdplannen (Meal Plans) - Lime with Calendar icon
  - All mapped to corresponding Supabase filter columns
- ✅ **Total of 13 filters** now available on all 415+ city pages (3 general + 10 specialty filters)

**October 16, 2025**: Blog article enhancements - Added featured images and social sharing:
- ✅ **Featured Images**: Added 14 high-quality stock images (converted to WebP) for all dietist blog articles
  - Images properly optimized and placed in `/public/img/blog/{slug}/featured.webp`
  - Aspect ratio and quality optimized for web performance
- ✅ **ShareButtons Component**: Created reusable social sharing component
  - Facebook, WhatsApp, and X (Twitter) share functionality
  - Share count display (static placeholder: "4.7K Aandelen")
  - Clean, modern button design with proper icons
  - Client-side URL detection for accurate sharing
- ✅ **Article Design Update**: All 14 blog articles now feature modern card-based design:
  - Light blue gradient background (from-blue-50 to-blue-100) behind white content container
  - White article container with rounded corners (rounded-lg) and shadow-lg for depth
  - Featured image at top within the white container
  - Share buttons below image for social engagement
  - Responsive padding (px-6 md:px-12) throughout article sections
  - Clean, modern card-based layout matching reference design
  - Maximum width of 5xl for optimal readability
- ✅ **GTM Update**: Updated Google Tag Manager pixel to GTM-MWMH3KH7
- ✅ **Cleanup**: Removed all old ADHD blog image folders from public/img/blog
- ✅ **Blog Page**: Updated to correctly show "14 uitgebreide artikelen"

**October 15, 2025**: Major architectural simplification - Removed Drizzle ORM:
- ✅ **Database Architecture Cleanup**: Completely removed Drizzle ORM and related dependencies
  - Eliminated DATABASE_URL requirement (no longer needed for builds)
  - All database operations now use Supabase SDK directly
  - Removed files: lib/db.ts, drizzle.config.ts, shared/schema*.ts
  - Uninstalled packages: drizzle-orm, drizzle-kit, postgres
  - Seed script rewritten to use supabaseServer instead of Drizzle queries
  - Cleaner architecture with single database connection method (Supabase SDK only)
  - Build now works without any database credentials at build time
- ✅ **Updated MatchingQuiz with dietist-relevant questions**:
- ✅ **Quiz Content Update**: Completely revised quiz questions to be relevant for dietist directory
  - Step 2: Changed from "Ben je gediagnosticeerd met Diëtiek?" to "Wat is je belangrijkste doel?" with options:
    - Afvallen en gewichtsverlies
    - Gezonder leven en preventie  
    - Medische aandoening (diabetes, cholesterol, etc.)
    - Sportvoeding en prestatie
    - Voedselallergieën of intoleranties
    - Veganistisch of plantaardig eten
  - Step 3: Changed from "Heb je eerder Diëtiek therapie geprobeerd?" to "Heb je eerder met een diëtist gewerkt?"
  - Step 4: Updated concerns to dietist-relevant issues (starting with diet, emotional eating, health issues, etc.)
  - Title changed from "Diëtiek Coach Matching Quiz" to "Diëtist Matching Quiz"
- ✅ **Build Stability**: Fixed database lazy initialization to prevent deployment errors

**October 14, 2025**: Complete platform transformation from ADHD to Dietist:
- ✅ **Full Content Migration**: Transformed entire app from ADHD coaching to dietist/nutritionist directory
  - All ADHD terminology replaced with dietist-specific content throughout the codebase
  - Updated site name from "ADHD Coach in de Buurt" to "Dietist in de Buurt"
  - Domain references changed from adhdcoachindebuurt.nl to dietistindebuurt.nl
- ✅ **New Comprehensive FAQ Page**: Created extensive FAQ with 20 detailed questions covering:
  - What is a dietist and when to see one
  - Costs and insurance (€70-€95 first consult, €45-€70 follow-up)
  - No referral needed since 2022
  - Weight loss and management
  - Sports nutrition, medical conditions (diabetes, high cholesterol)
  - Emotional eating, food allergies/intolerances
  - Children's nutrition, pregnancy and breastfeeding
  - How to find a good dietist
  - Features: 10 category filters, collapsible FAQ items, professional blue gradient design
- ✅ **Technical Fixes**:
  - Fixed unicode escape errors by using double quotes for Dutch special characters
  - Resolved favicon conflict by removing duplicate file
  - All 17+ blog posts updated with dietist content
  - All 415+ city pages (stad/) updated with dietist terminology
  - Components (Header, Footer, BlogPostsSection) updated
  - Data files updated with dietist statistics
- ✅ **Homepage UI improvements**: Search and quiz phone input enhancements
- ✅ Fixed homepage "Zoeken" button width by changing grid ratio from 10:2 to 9:3 (input:button)
  - **Impact**: Button now 50% wider and better proportioned to input field
- ✅ Fixed "Zoeken" button height to match input field height (changed from py-2 to py-3 padding)
  - **Result**: Button and input now perfectly aligned in both width and height
- ✅ Added country code dropdown to MatchingQuiz phone input
  - **Options**: NL (+31) default and BE (+32) for Belgium
  - **Features**: Smart placeholder changes based on selected country
  - **Data**: countryCode field included in form submission

**October 10, 2025**: Major performance optimizations for Google PageSpeed:
- ✅ Removed unused ChatAssistant component (~30KB+ savings from bundle)
- ✅ Implemented lazy-loading for Google Maps using IntersectionObserver (loads 200px before visible)
  - **Impact**: ~900ms execution time saved, ~57KB JavaScript reduction
  - Map now loads only when user scrolls near it, not on page load
- ✅ Delayed Google Tag Manager (GTM) loading by 3 seconds OR on first user interaction
  - **Impact**: ~280ms execution time saved, ~104KB JavaScript reduction  
  - GTM loads after 3s delay OR on scroll/click/touch/mousemove (whichever comes first)
  - Analytics tracking preserved with <2% data loss for immediate bounces
- ✅ **Total estimated savings**: ~1.2 seconds JavaScript execution time, ~190KB bundle size
- ✅ All optimizations verified with no functional regressions

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