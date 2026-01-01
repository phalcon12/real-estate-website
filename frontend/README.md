# RAB Homes Ng Ltd — Frontend

This is a Vite + React prototype for a premium real estate website focused on RAB Homes Ng Ltd.

## Install & Run

1. npm install
2. npm run dev

Site includes:
- Home page with hero and featured properties
- Properties listing and detail pages (5 sample premium properties)
- Team and contact sections
- Luxury-themed styling (gold/white/grey), responsive layouts, subtle animations

Premium features implemented:
- High-end Property Cards with images, location, price (USD + NGN), short descriptions and hover effects
- Homepage Featured Properties section (3-4 ultra-luxury properties) with subtle scroll animations
- Property detail pages with image gallery, property description, key features, and CTAs
- Google Fonts (Playfair Display for headings, Poppins for body), responsive layout and accessibility improvements

Performance & SEO:
- Optimized image usage with Unsplash placeholders (lazy-loaded)
- Meta tags and Open Graph for improved sharing

Next steps:
- Replace placeholder images and sample data with real listings
- Hook the contact form to a backend or service (e.g., Formspree, Netlify Forms)
- The site includes a ConvAI chat widget integrated with the provided agent ID. The widget is embedded as a floating assistant and is supplied with a snapshot of site content at `/assistant-context.json` so the agent can answer questions about listings, team, and contact information.

Security & privacy note:
- The assistant context published at `/assistant-context.json` contains non-sensitive site content (property descriptions, team bios, contact info). Do NOT store secrets or personal data in that file. If you'd like assistance limiting or filtering what the agent can access, I can add fine-grained controls or a server-side endpoint that requires authentication.

Deployment:
- npm install
- npm run build
- Serve the `dist/` directory with any static hosting (Vercel, Netlify, S3 + CloudFront, etc.)

If you'd like, I can also add a small CI configuration for automatic deploys to Vercel/Netlify.