# What's your photo worth?

A static website: no server code, no database and no tracking. The AI model (MobileNet v2) runs in the visitor's browser, so photos are never uploaded.

## Deploy (pick one)

- **Netlify:** drag this folder onto https://app.netlify.com/drop. The `_headers` file sets caching automatically.
- **Cloudflare Pages:** create a project, upload this folder (or connect a Git repo with this folder as the root). `_headers` is supported.
- **Vercel:** `npx vercel deploy --prod` from this folder.
- **Any web server (nginx, S3 + CloudFront, GitHub Pages):** upload the folder as is. Serve `.bin` files as `application/octet-stream`.

The site must be served over HTTPS for the mobile share sheet to work.

## Before launch

1. Replace `https://rahzabull.github.io/Know-your-worth/` in `index.html` (canonical link and the og/twitter tags) with the real URL. Share links use whatever URL the page is served from, so they need no change.
2. Check the social preview with https://www.opengraph.xyz once deployed.
3. Have legal review the pricing copy in the "How we calculate this?" sheet (prices are illustrative).

## What's inside

| Path | What it is |
| --- | --- |
| `index.html` | The whole app (HTML, CSS and JS in one file) |
| `assets/img/` | Figma art: room, gold frames, paddle arms, SOLD plaque, social image, icons |
| `assets/fonts/` | Inter Tight and Cinzel, self-hosted (no Google Fonts requests) |
| `assets/js/tf.min.js` | TensorFlow.js 4.22.0 |
| `model/` | MobileNet v2 (about 14 MB, cached for a year after first load) |

## Editing

Prices, bidders and roast lines live in the `CATS` list near the top of the script in `index.html`. The pricing tiers in the method sheet are plain HTML in the same file.
