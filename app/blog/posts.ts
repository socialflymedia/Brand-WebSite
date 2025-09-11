// app/resources/blog/posts.ts
export type BlogPost = {
  id: string;       // internal id (can be numeric string)
  slug: string;     // used in URL: /resources/blog/<slug>
  title: string;
  excerpt: string;
  date: string;     // ISO date string
  author?: string;
  keywords?: string[];
  image: string;    // hero image path under /public
  ogImage?: string; // optional OG image path
  content?: string; // optional short HTML/MD excerpt or summary - keep full content in a CMS or MDX later
};

export const POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "nextjs-seo-2025",
    title: "Next.js SEO in 2025 — Practical Checklist",
    excerpt: "Pragmatic Next.js SEO checklist: LCP, SSR/ISR, structured data, sitemaps and image best-practices.",
    date: "2025-07-12",
    author: "SocialFly Networks",
    keywords: ["next.js seo checklist", "lcp nextjs", "nextjs seo 2025"],
    image: "/blog/nextjs-seo.jpg",
    ogImage: "/blog/nextjs-seo-og.jpg",
  },
  {
    id: "2",
    slug: "gyansathi-case-study",
    title: "Gyansathi Case Study — Education Portal Revamp",
    excerpt: "How we rebuilt Gyansathi: architecture, performance improvements and SEO outcomes.",
    date: "2025-06-15",
    author: "SocialFly Networks",
    keywords: ["gyansathi case study", "education portal"],
    image: "/blog/gyan-sathi.png",
    ogImage: "/blog/gyansathi-og.jpg",
  },
  {
    id: "3",
    slug: "pwa-performance",
    title: "PWA Performance Patterns — Make Apps Feel Instant",
    excerpt: "Service worker patterns, App Shell and caching strategies that actually help retention.",
    date: "2025-05-01",
    author: "SocialFly Networks",
    keywords: ["pwa performance", "service worker caching"],
    image: "/blog/pwa.jpeg",
    ogImage: "/blog/pwa-performance-og.jpg",
  },
  {
    id: "4",
    slug: "marketing-local-business",
    title: "Local Marketing for Mawana Businesses — Practical Checklist",
    excerpt: "Google Business, local citations and simple ad playbooks tailored for Mawana & Meerut.",
    date: "2025-02-20",
    author: "SocialFly Networks",
    keywords: ["local marketing mawana", "google business setup"],
    image: "/blog/marketing.png",
    ogImage: "/blog/local-marketing-og.jpg",
  },
  {
    id: "5",
    slug: "ai-web-dev-tools",
    title: "AI Tools That Cut Web Development Time by 50%",
    excerpt: "Curated AI tools & workflows that speed up design handoff, scaffolding, testing and reviews.",
    date: "2025-08-04",
    author: "SocialFly Networks",
    keywords: ["ai web development tools", "ai developer tools 2025"],
    image: "/blog/ai-2025.png",
    ogImage: "/blog/ai-tools-og.jpg",
  },
];

export function getAllPosts() {
  // keep sorted by date desc
  return POSTS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
