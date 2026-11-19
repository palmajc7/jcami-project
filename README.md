This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact form

The contact form ([src/components/ContactForm.tsx](src/components/ContactForm.tsx)) and the creative pool signup ([src/components/CreativePool.tsx](src/components/CreativePool.tsx)) are front-end only: submitting shows a success message and does not send anything anywhere.

## SEO and search verification

The site's canonical origin, metadata, structured data, sitemap, `robots.txt`,
and supplemental `llms.txt` are generated from
[`src/config/site.ts`](src/config/site.ts). Set these variables in the
production hosting environment:

```bash
NEXT_PUBLIC_SITE_URL=
GOOGLE_SITE_VERIFICATION=
BING_SITE_VERIFICATION=
```

`NEXT_PUBLIC_SITE_URL` must be the public HTTPS origin without a path. It is
required in production; without it, URLs fall back to `http://localhost:3000`. Google and Bing verification values are optional and
are emitted only when configured.

After deployment, verify `/robots.txt`, `/sitemap.xml`, and `/llms.txt`, then
submit `<your-domain>/sitemap.xml` in Google Search Console and Bing
Webmaster Tools. If a CDN or WAF is enabled, ensure it does not challenge or
block Googlebot, Bingbot, OAI-SearchBot, or PerplexityBot on public routes.

`llms.txt` is an experimental navigation aid. It supplements, but does not
replace, normal HTML crawlability, metadata, structured data, and the sitemap;
it does not guarantee ranking or citation by any search or answer engine.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
