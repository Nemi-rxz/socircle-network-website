# Socircle Network website

An initial responsive website for Socircle Network. It uses the supplied label logo and a dark editorial direction based on the supplied visual reference.

## Run locally

Requires Node.js. From this directory, run `npm start` and open `http://localhost:3000`.

## Deploy to Vercel

This site is configured for Vercel deployment:

1. Push this repository to GitHub
2. Import the project in Vercel (https://vercel.com/new)
3. Vercel will automatically detect the static configuration and deploy
4. The `vercel.json` file handles SPA routing to ensure client-side navigation works correctly

## Current scope

- Public pages: home, artists and artist profiles, music and release detail pages, videos, news, about, contact, privacy and terms.
- Razka is the only seeded artist. Artist bio and genre information come from the supplied brief. No release, video, news, streaming, social or contact details have been fabricated.
- The admin workspace at `/admin` is a browser-local prototype. Its data uses localStorage and is visible only in that browser profile. It has no authentication, shared database, persistent media upload, or production publishing workflow; do not expose it as a production CMS.
- The contact form validates in the browser and prepares a message for the visitor's email app. It does not send or store submissions.
- Privacy and terms pages are launch placeholders and need approved policy text before publication.

## Production integrations still needed

Before launch, connect administrator authentication and authorization, a persistent database, object storage for media, an email/contact workflow, official streaming and social URLs, verified content, and approved policy copy. Add server-side validation, rate limiting, spam protection, backups, and deployment configuration with the chosen provider.

The implementation is deliberately dependency-free at this stage. The server in `server.js` is a local preview server, not a production deployment server.
