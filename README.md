# Socircle Network Website

An initial responsive website for Socircle Network. It uses the supplied label logo and a dark editorial direction based on the supplied visual reference.

## Project Documentation

For comprehensive project documentation including architecture, content models, deployment requirements, and outstanding tasks, see [PROJECT_BIBLE.md](PROJECT_BIBLE.md).

## Run Locally

Requires Node.js. From this directory, run `npm start` and open `http://localhost:3000`.

The `server.js` file is a simple HTTP server for local development only. It is not intended for production deployment.

## Deploy to Vercel

This site is configured for Vercel static deployment:

1. Push this repository to GitHub
2. Import the project in Vercel (https://vercel.com/new)
3. Vercel will automatically detect the static configuration and deploy
4. The `vercel.json` file handles SPA routing to ensure client-side navigation works correctly
5. Security headers are configured for production

**Note:** This is a static SPA deployment. For production features (persistent CMS, authentication, email delivery, media uploads), additional backend implementation is required. See PROJECT_BIBLE.md for details.

## Current Scope

### Implemented
- **Public pages:** home, artists and artist profiles, music and release detail pages, videos, news, about, contact, privacy and terms
- **Client-side routing:** SPA navigation using HTML5 History API
- **Responsive design:** Desktop, tablet, and mobile layouts
- **Dark editorial theme:** Premium, music-focused visual identity
- **Brand colors:** Royal blue, sky blue, black, white
- **Typography:** Barlow Condensed (display), DM Sans (body)
- **Admin workspace UI:** Browser-local prototype at `/admin`

### Prototype Features (Not Production-Ready)
- **Content management:** Uses localStorage (not shared, not persistent)
- **Admin interface:** No authentication, no server-side validation
- **Contact form:** Browser validation only, opens email app (no actual delivery)

### Not Yet Implemented
- Persistent database
- Authentication and authorization
- Server-side validation
- Media upload and storage
- Email delivery for contact form
- Actual releases, videos, news content
- Artist images, release artwork
- Streaming/social links
- Approved privacy policy text
- Approved terms of use text
- XML sitemap
- Open Graph metadata
- Structured data

## Production Requirements

Before production launch, the following must be implemented:

1. **Backend Infrastructure**
   - Persistent database (MongoDB recommended)
   - Authentication system
   - API layer for content management
   - Server-side validation

2. **Content Management**
   - Replace localStorage with proper CMS
   - Secure admin authentication
   - Media upload and storage (Cloudinary or similar)
   - Content publishing workflow

3. **Contact Form**
   - Email delivery integration (SendGrid, Mailgun, Resend)
   - Submission storage in database
   - Spam protection and rate limiting

4. **Legal Pages**
   - Approved privacy policy text
   - Approved terms of use text
   - Business details (address, registration)

5. **SEO and Performance**
   - XML sitemap
   - Open Graph metadata
   - Structured data
   - Image optimization

See [PROJECT_BIBLE.md](PROJECT_BIBLE.md) for complete requirements, architecture decisions, and implementation roadmap.

## Technology Stack

**Current (Static Prototype):**
- Plain HTML, CSS, JavaScript (no framework)
- Client-side routing
- Browser localStorage (prototype only)
- Simple Node.js HTTP server (local dev only)

**Recommended for Production:**
- Next.js with API routes (for Vercel)
- MongoDB (database)
- Cloudinary (media storage)
- SendGrid/Mailgun (email delivery)
- JWT authentication

## Development Notes

- The implementation is deliberately dependency-free at this stage
- `server.js` is a local preview server, not a production deployment server
- Asset paths are configured for Vercel static deployment (no `/public/` prefix)
- All changes preserve the existing visual direction and working functionality
