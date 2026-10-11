# Socircle Network Website - Project Bible

## 1. Project Purpose and Business Identity

**Socircle Network** is an independent record label focused on artist development, music releases, promotion, and audiovisual work. The label creates space for distinct musical identities and helps connect new sounds with audiences.

**Current Artist:** Razka - An artist whose sound draws on Afrobeats with reggae and dancehall influences.

**Location:** Lagos & beyond (as indicated in the website copy)

**Brand Identity:**
- Independent music label
- Artist-focused approach
- Contemporary, premium, music-focused visual identity
- Distinctive sounds and cultural connection

## 2. Visual Direction and Color Palette

**Primary Colors:**
- Royal Blue (`#2354dc`)
- Sky Blue (`#62c8f4`)
- Black/Dark Ink (`#08090b`)
- White/Paper (`#f4f5f7`)

**Supporting Colors:**
- Panel/Dark Gray (`#111317`)
- Muted Gray (`#9ba1ac`)
- Line/Border (rgba(255,255,255,.12))

**Typography:**
- Display Font: Barlow Condensed (weights 500-900)
- Body Font: DM Sans (weights 400-700)

**Visual Style:**
- Dark editorial direction
- Contemporary and premium aesthetic
- Music and culture-focused
- Professional yet artistic

## 3. Website Objectives and Intended Audience

**Objectives:**
- Showcase Socircle Network's artist roster
- Present music releases and catalogue
- Share videos and audiovisual content
- Publish news and label updates
- Provide contact information for business enquiries
- Establish the label's online presence

**Intended Audience:**
- Music listeners and fans
- Industry professionals (bookings, media, partnerships)
- Potential collaborators
- Artists interested in the label

## 4. Existing Technology Stack

**Current Implementation (Static SPA):**
- **Frontend:** Plain HTML, CSS, JavaScript (no framework)
- **Architecture:** Single Page Application (SPA) with client-side routing
- **Styling:** Custom CSS with CSS variables
- **Local Development:** Simple Node.js HTTP server (`server.js`)
- **Content Management:** Browser localStorage (prototype only, not production-ready)
- **Database:** None (currently using localStorage)
- **Authentication:** None
- **Media Storage:** None (logo in `/public/` directory)
- **Email Delivery:** None (contact form opens email app only)
- **Build Process:** None (static files served directly)

**Dependencies:**
- Zero external dependencies (as per current implementation)
- Google Fonts (Barlow Condensed, DM Sans) loaded from CDN

## 5. Repository Structure

```
socircle-website/
├── .gitignore                 # Git ignore rules
├── .vercelignore              # Files to exclude from Vercel deployment
├── README.md                  # Project documentation
├── PROJECT_BIBLE.md           # This file - comprehensive project documentation
├── package.json               # Node.js package configuration
├── vercel.json                # Vercel deployment configuration
├── robots.txt                 # Search engine crawler directives
├── index.html                 # Main HTML entry point
├── app.js                     # Client-side JavaScript (routing, rendering, logic)
├── styles.css                 # Complete stylesheet
├── server.js                  # Local development server (not for production)
└── public/
    └── socircle-logo.png      # Logo asset (84KB)
```

## 6. Public Pages and Routes

**Implemented Routes:**
- `/` - Homepage with hero, featured release, artist spotlight, sections
- `/artists` - Artist roster listing
- `/artists/[slug]` - Individual artist profile
- `/music` - Music releases catalogue
- `/music/[slug]` - Individual release detail page
- `/videos` - Videos listing
- `/videos/[slug]` - Individual video detail page
- `/news` - News articles listing
- `/news/[slug]` - Individual news article
- `/about` - About the label page
- `/contact` - Contact form page
- `/privacy` - Privacy policy (placeholder)
- `/terms` - Terms of use (placeholder)
- `/admin` - Admin workspace (localStorage prototype, not production-ready)

**Routing Implementation:**
- Client-side routing using HTML5 History API
- Route matching in `app.js` `render()` function
- SPA navigation via `[data-link]` attributes
- All routes handled by single `index.html` entry point

## 7. Shared Components

**JavaScript Functions (in app.js):**
- `header()` - Navigation header with logo and links
- `footer()` - Footer with navigation and copyright
- `layout(body)` - Wraps content with header and footer
- `intro(kicker, title, desc)` - Page intro section component
- `artistCard(a)` - Artist card component
- `cards(items, type)` - Generic card grid component
- `home()` - Homepage content
- `artistPage(slug)` - Artist profile page
- `listing(p)` - Generic listing page (artists, music, videos, news)
- `about()` - About page
- `contact()` - Contact form page
- `staticPage(p)` - Static pages (privacy, terms)
- `admin()` - Admin workspace interface
- `detailPage(kind, slug)` - Detail pages for music, videos, news
- `render()` - Main render function that routes to appropriate page

**CSS Components (in styles.css):**
- `.shell` - Max-width container
- `.topbar` - Header navigation
- `.wordmark` - Logo and brand name
- `.navlinks` - Navigation links
- `.hero` - Hero section
- `.card` - Generic card component
- `.grid-cards` - Card grid layout
- `.section` - Section container
- `.button` - Button styles
- `.form` - Form styles
- `.admin` - Admin interface styles
- Responsive breakpoints at 1000px, 760px, 460px

## 8. Content Models

**Current Implementation (LocalStorage-based):**

**Artist Model:**
```javascript
{
  name: string,
  slug: string,
  alt: string (alternative name/alias),
  bio: string,
  status: 'Published' | 'Draft'
}
```

**Release Model:**
```javascript
{
  title: string,
  slug: string,
  artist: string,
  type: string,
  description: string,
  status: 'Published' | 'Draft'
}
```

**Video Model:**
```javascript
{
  title: string,
  slug: string,
  artist: string,
  type: string,
  status: 'Published' | 'Draft'
}
```

**News Model:**
```javascript
{
  title: string,
  slug: string,
  artist: string,
  type: string,
  status: 'Published' | 'Draft'
}
```

**Seed Data:**
- One artist: Razka (Niyone)
- Zero releases, videos, news articles

## 9. Database Architecture and Relationships

**Current State:** No database. Uses browser localStorage which is:
- Not shared across devices/users
- Not persistent across browser sessions
- Not suitable for production
- No server-side validation or security

**Required Database Schema (To Be Implemented):**

**Artists Collection:**
- `_id` (ObjectId)
- `name` (string, required)
- `slug` (string, unique, required)
- `alt` (string, optional)
- `bio` (string)
- `genres` (array of strings)
- `images` (array of image URLs)
- `socialLinks` (object: spotify, instagram, twitter, youtube)
- `status` (enum: 'Published', 'Draft')
- `createdAt` (Date)
- `updatedAt` (Date)

**Releases Collection:**
- `_id` (ObjectId)
- `title` (string, required)
- `slug` (string, unique, required)
- `artist` (reference to Artists or string)
- `type` (string: Single, EP, Album)
- `releaseDate` (Date)
- `artwork` (image URL)
- `description` (string)
- `tracklist` (array of objects: title, duration, featuredArtists)
- `streamingLinks` (object: spotify, appleMusic, youtube, soundcloud)
- `status` (enum: 'Published', 'Draft')
- `createdAt` (Date)
- `updatedAt` (Date)

**Videos Collection:**
- `_id` (ObjectId)
- `title` (string, required)
- `slug` (string, unique, required)
- `artist` (reference to Artists or string)
- `type` (string: Music Video, Behind the Scenes, Live Performance)
- `thumbnail` (image URL)
- `videoUrl` (string: YouTube, Vimeo, or hosted)
- `description` (string)
- `status` (enum: 'Published', 'Draft')
- `createdAt` (Date)
- `updatedAt` (Date)

**News Collection:**
- `_id` (ObjectId)
- `title` (string, required)
- `slug` (string, unique, required)
- `content` (string: markdown or HTML)
- `excerpt` (string)
- `featuredImage` (image URL)
- `relatedArtists` (array of references to Artists)
- `relatedReleases` (array of references to Releases)
- `publishedAt` (Date)
- `status` (enum: 'Published', 'Draft')
- `createdAt` (Date)
- `updatedAt` (Date)

**Media Collection:**
- `_id` (ObjectId)
- `filename` (string)
- `originalName` (string)
- `mimeType` (string)
- `size` (number)
- `url` (string)
- `altText` (string)
- `uploadedBy` (reference to AdminUsers)
- `createdAt` (Date)

**ContactEnquiries Collection:**
- `_id` (ObjectId)
- `name` (string, required)
- `email` (string, required)
- `category` (string: General, Artist Management, Bookings, Press, Partnership, Collaboration)
- `message` (string, required)
- `status` (enum: 'New', 'Read', 'Responded')
- `createdAt` (Date)

**AdminUsers Collection:**
- `_id` (ObjectId)
- `email` (string, unique, required)
- `passwordHash` (string, required)
- `name` (string)
- `role` (enum: 'Admin', 'Editor')
- `createdAt` (Date)
- `lastLogin` (Date)

**SiteSettings Collection:**
- `_id` (ObjectId)
- `key` (string, unique)
- `value` (any type)
- `updatedAt` (Date)

**Relationships:**
- Releases → Artists (many-to-one)
- Videos → Artists (many-to-one)
- News → Artists (many-to-many)
- News → Releases (many-to-many)
- Media → AdminUsers (many-to-one)
- All content has status field for draft/published workflow

## 10. Authentication and Authorization

**Current State:** None. Admin workspace is publicly accessible with no authentication.

**Required Implementation:**
- Authentication system for admin users
- Session management
- Password hashing (bcrypt)
- JWT or session-based authentication
- Authorization checks on all admin operations
- No public registration (admin accounts created manually)
- Login/logout functionality
- Password reset flow (optional)

**Protected Operations:**
- Create, edit, delete artists
- Create, edit, delete releases
- Create, edit, delete videos
- Create, edit, delete news
- Upload and manage media
- View contact enquiries
- Modify site settings

## 11. Media Storage and Uploads

**Current State:** None. Logo is a static file in `/public/` directory.

**Required Implementation:**
- Cloud-based object storage (Cloudinary, AWS S3, or Vercel Blob)
- Image upload functionality in admin
- Image compression and optimization
- Alt text management
- Asset metadata storage
- File type validation
- File size limits
- Upload progress indicators
- Reusable media picker component
- Asset deletion

**Supported Formats:**
- Images: JPEG, PNG, WebP
- Maximum size: 5MB per file

## 12. Contact Form Processing

**Current State:** Browser-only validation. Form prepares message for user's email app but does not send or store submissions.

**Required Implementation:**
- Server-side validation
- Email delivery via service (SendGrid, Mailgun, Resend, or similar)
- Submission storage in database
- Spam protection (reCAPTCHA or rate limiting)
- Rate limiting to prevent abuse
- Success/error states
- Admin notification of new enquiries
- Enquiry management in admin

**Form Fields:**
- Name (required)
- Email (required, validated)
- Enquiry category (select: General, Artist Management, Bookings, Press, Partnership, Collaboration)
- Message (required, min 10 characters)

## 13. Environment Variables

**Required Environment Variables:**

**Database:**
- `MONGODB_URI` - MongoDB connection string

**Authentication:**
- `JWT_SECRET` - Secret for JWT token signing
- `SESSION_SECRET` - Secret for session management (if using sessions)

**Email Service:**
- `EMAIL_SERVICE_API_KEY` - API key for email provider
- `EMAIL_FROM_ADDRESS` - Default from address
- `EMAIL_TO_ADDRESS` - Default recipient for contact form

**Media Storage:**
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- Or AWS S3 credentials if using S3

**Application:**
- `NODE_ENV` - Environment (development, production)
- `BASE_URL` - Base URL for the application

## 14. Local Development Instructions

**Prerequisites:**
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Email service account
- Media storage account (Cloudinary or similar)

**Setup:**
1. Clone repository
2. Run `npm install` (after adding dependencies)
3. Copy `.env.example` to `.env`
4. Configure environment variables in `.env`
5. Start MongoDB (if using local instance)
6. Run `npm run dev` to start development server
7. Open `http://localhost:3000`

**Current Development (Without Backend):**
- Run `npm start` to start simple HTTP server
- Open `http://localhost:3000`
- Admin workspace at `/admin` uses localStorage (not production-ready)

## 15. Testing Procedures

**Current State:** No tests implemented.

**Required Testing:**
- Unit tests for utility functions
- Integration tests for API endpoints
- End-to-end tests for critical user flows
- Test coverage goal: 70%+

**Test Categories:**
- Routing tests
- Authentication tests
- CRUD operations tests
- Form validation tests
- Email delivery tests
- Media upload tests
- Responsive design tests
- Accessibility tests
- Performance tests

## 16. Vercel Deployment Instructions

**Current Vercel Configuration:**
- `vercel.json` uses rewrites for SPA routing
- `.vercelignore` excludes `server.js` (local dev server only)
- No build command (static files)
- Output directory: root (implicit)

**Critical Issue:**
- Asset paths reference `/public/socircle-logo.png`
- This will not work in Vercel static deployment
- Files in `/public/` should be served from root or restructure directory

**Required Fix:**
Either:
1. Move all public assets to repository root, OR
2. Configure Vercel to serve from `public/` directory, OR
3. Update all asset paths to remove `/public/` prefix

**Deployment Steps (After Fix):**
1. Push changes to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

**For Full-Stack Implementation:**
- Configure Vercel for Next.js or Express.js
- Add build command
- Configure output directory
- Set up environment variables in Vercel dashboard

## 17. Current Implementation Status

**✅ Fully Implemented:**
- Static HTML/CSS/JavaScript SPA architecture
- Client-side routing for all public pages
- Homepage with hero, sections, artist spotlight
- Artist listing and profile pages
- Music, videos, news listing pages
- Detail pages for releases, videos, news
- About page
- Contact form (browser validation only)
- Privacy and terms placeholder pages
- Admin workspace UI (localStorage prototype)
- Responsive design (desktop, tablet, mobile)
- Dark editorial visual design
- Brand color palette
- Typography (Barlow Condensed, DM Sans)
- Basic SEO meta tags
- Robots.txt

**⚠️ Partially Implemented (Prototype Only):**
- Content management (localStorage, not production-ready)
- Admin interface (no authentication, no persistence)

**❌ Not Implemented:**
- Database (no persistent storage)
- Authentication and authorization
- Server-side validation
- Media upload and storage
- Email delivery for contact form
- Persistent CMS
- XML sitemap
- Open Graph metadata
- Structured data (schema.org)
- Proper error handling
- Rate limiting
- Spam protection
- Official streaming/social links
- Real artist images, release artwork, video thumbnails
- News article content
- Approved privacy policy text
- Approved terms of use text
- Testing suite
- Build process

## 18. Known Limitations

**Critical Limitations:**
1. **No Persistence:** All content management uses localStorage - data is lost when browser is cleared and not shared across devices
2. **No Security:** Admin workspace has no authentication - anyone can access and modify content
3. **No Database:** No server-side data storage - cannot persist content across sessions
4. **No Email Delivery:** Contact form does not actually send emails
5. **Asset Path Issue:** `/public/` prefix in asset paths will break in Vercel static deployment
6. **No Media Management:** Cannot upload or manage images/videos
7. **Placeholder Content:** Privacy and terms pages contain placeholder text only

**Functional Limitations:**
- No real streaming links for releases
- No social media links
- No actual news articles
- No artist images beyond logo
- No release artwork
- No video content
- Admin changes only visible in current browser
- Contact form submissions are not stored

**Technical Limitations:**
- No server-side rendering (SEO limited)
- No API layer
- No backend validation
- No error boundary handling
- No analytics integration
- No performance monitoring

## 19. Outstanding Tasks

**High Priority (Blocking Production):**
1. Fix asset paths for Vercel deployment
2. Implement persistent database
3. Implement authentication and authorization
4. Replace localStorage CMS with proper backend
5. Implement contact form email delivery
6. Add approved privacy policy text
7. Add approved terms of use text

**Medium Priority (Feature Complete):**
8. Implement media upload and storage
9. Add XML sitemap
10. Add Open Graph metadata
11. Add structured data
12. Implement rate limiting
13. Add spam protection
14. Create real content (releases, videos, news)
15. Add artist images
16. Add streaming/social links

**Low Priority (Enhancement):**
17. Add testing suite
18. Implement analytics
19. Add performance monitoring
20. Optimize images and assets
21. Add error tracking
22. Implement password reset flow
23. Add content versioning
24. Add content scheduling

## 20. Future Development Priorities

**Phase 1 - Production Readiness:**
- Fix Vercel deployment configuration
- Implement database (MongoDB)
- Implement authentication
- Replace localStorage CMS with proper backend
- Implement email delivery
- Add legal policy pages

**Phase 2 - Content Complete:**
- Implement media library
- Add real artist images
- Add release artwork
- Create actual releases
- Add video content
- Publish news articles
- Add streaming/social links

**Phase 3 - Enhancement:**
- SEO optimization (sitemap, structured data)
- Performance optimization
- Testing suite
- Analytics integration
- Advanced CMS features
- Content scheduling
- Multi-language support

**Phase 4 - Growth:**
- Artist discovery features
- Music player integration
- Newsletter subscription
- Events/tour dates
- Merchandise store
- Fan community features

## 21. Business Details Required for Launch

**Legal and Compliance:**
- Official company name and registration details
- Physical business address
- Privacy representative contact
- Data processing practices documentation
- Cookie policy
- Approved privacy policy text
- Approved terms of use text
- Copyright and licensing details

**Business Operations:**
- Official email addresses
- Phone number (optional)
- Social media accounts and handles
- Streaming platform links (Spotify, Apple Music, etc.)
- Business banking details (for payments)
- Tax identification information

**Content and Branding:**
- Artist images and photography
- Release artwork
- Video content
- Press kit materials
- Brand guidelines
- Logo variations (if needed)

**Technical and Infrastructure:**
- Domain name configuration
- SSL certificate (handled by Vercel)
- Email service account
- Media storage account
- Database hosting
- Backup strategy
- Monitoring and alerting

## 22. Architecture Decision Notes

**Why Current Static SPA Architecture:**
- Deliberately dependency-free at this stage
- Simple, fast, easy to understand
- No build process required
- Good for prototype/preview phase
- Demonstrates visual direction and UX

**Why Migration Required for Production:**
- Static architecture cannot support:
  - Persistent content management
  - Secure authentication
  - Server-side operations (email, database)
  - Media uploads
  - Protected admin operations

**Recommended Migration Path:**
- Option 1: Next.js with API routes (recommended for Vercel)
- Option 2: Express.js backend with MongoDB
- Option 3: Keep frontend static, add backend API separately

**Migration Considerations:**
- Preserve existing visual design
- Preserve client-side routing (or migrate to Next.js routing)
- Preserve content structure
- Maintain SEO where possible
- Minimize disruption to existing work

## 23. Security Considerations

**Current Security Issues:**
- Admin workspace publicly accessible
- No authentication
- No server-side validation
- No rate limiting
- No input sanitization beyond basic HTML escaping
- No CSRF protection
- No CORS configuration
- Secrets would be exposed if added to client-side code

**Required Security Measures:**
- Implement authentication (JWT or sessions)
- Server-side validation for all inputs
- Rate limiting on API endpoints
- CSRF protection
- CORS configuration
- Environment variables for secrets
- SQL injection prevention (if using SQL)
- NoSQL injection prevention (if using MongoDB)
- XSS prevention
- Secure file upload validation
- HTTPS only (enforced)
- Security headers (CSP, HSTS, etc.)
- Regular dependency updates
- Security audits

## 24. Performance Considerations

**Current Performance:**
- No build step = fast development
- Minimal JavaScript (20KB)
- CSS (19KB)
- Single logo image (84KB)
- No lazy loading
- No image optimization
- No caching strategy

**Optimization Opportunities:**
- Image compression and WebP format
- Lazy loading for images
- Critical CSS inlining
- JavaScript code splitting
- CDN for static assets
- Browser caching headers
- Gzip/Brotli compression
- Preload critical fonts
- Reduce CSS size
- Minify JavaScript and CSS

## 25. Accessibility Considerations

**Current Accessibility:**
- Semantic HTML structure present
- ARIA labels on some interactive elements
- Focus states not clearly visible
- Color contrast needs verification
- Alt text present for logo
- Keyboard navigation works for routing

**Required Improvements:**
- Ensure all interactive elements have visible focus states
- Verify color contrast ratios (WCAG AA)
- Add skip navigation link
- Improve form labels and error messages
- Add landmark regions
- Ensure all images have descriptive alt text
- Add ARIA landmarks
- Test with screen readers
- Keyboard-only navigation testing
- Mobile accessibility testing

## 26. SEO Considerations

**Current SEO:**
- Basic meta description
- Dynamic page titles
- Robots meta tag (admin pages noindex)
- Robots.txt with admin disallow
- No XML sitemap
- No Open Graph tags
- No structured data
- No canonical URLs
- Client-side rendering (less ideal for SEO)

**Required SEO Improvements:**
- XML sitemap generation
- Open Graph metadata for social sharing
- Twitter Card metadata
- Structured data (Organization, MusicRecording, etc.)
- Canonical URLs
- Meta descriptions for all pages
- Alt text for all images
- Server-side rendering or static generation
- Page speed optimization
- Mobile-friendly verification
- HTTPS (already handled by Vercel)

## 27. Backup and Recovery Strategy

**Required:**
- Database backups (daily, with retention)
- Media storage backups
- Code repository (Git)
- Environment variables documentation
- Disaster recovery plan
- Backup testing procedures

**To Be Implemented:**
- Automated MongoDB backups
- Media storage versioning
- Backup monitoring
- Recovery procedures documentation

## 28. Monitoring and Maintenance

**Required Monitoring:**
- Uptime monitoring
- Error tracking
- Performance monitoring
- Database performance
- API response times
- Security alerts
- Dependency updates

**Required Maintenance:**
- Regular dependency updates
- Security patching
- Content updates
- Backup verification
- SSL certificate renewal (automatic with Vercel)
- Domain renewal
- Service account maintenance

## 29. Third-Party Services Required

**Essential for Production:**
- Database hosting (MongoDB Atlas recommended)
- Email service (SendGrid, Mailgun, Resend, or similar)
- Media storage (Cloudinary, AWS S3, or Vercel Blob)
- Domain registrar (if custom domain)
- Vercel (deployment platform)

**Optional for Enhancement:**
- Analytics (Google Analytics, Plausible)
- Error tracking (Sentry)
- Performance monitoring (Vercel Analytics)
- CDN (Vercel provides)
- Image optimization (Cloudinary provides)

## 30. Deployment Environments

**Current:**
- Local development only

**Required:**
- Development environment (staging)
- Production environment

**Environment Configuration:**
- Separate databases for dev/prod
- Separate media storage buckets
- Different API keys
- Domain separation
- Environment-specific settings

---

**Document Version:** 1.0
**Last Updated:** 2026-10-11
**Status:** Comprehensive audit complete. Implementation pending.
