// app/resources/rss.xml/route.ts
import { getAllPosts } from "../posts"; // relative to this file; adjust if you used a different path
import { NextResponse } from "next/server";

function toRfc822(dateStr: string) {
  // Convert ISO date to RFC-822 / RFC-2822 format used in pubDate
  const d = new Date(dateStr);
  return d.toUTCString();
}

export async function GET() {
  const siteUrl = "https://socialflynetworks.com";
  const blogUrl = `${siteUrl}/resources/blog`;
  const posts = getAllPosts();

  const itemsXml = posts
    .map((p) => {
      const link = `${blogUrl}/${encodeURIComponent(p.slug)}`;
      const pubDate = toRfc822(p.date);
      const description = (p.excerpt || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const imageUrl = p.ogImage ?? p.image ? `${siteUrl}${p.ogImage ?? p.image}` : "";

      // optional enclosure for an image (some feed readers can show it)
      const enclosure = imageUrl
        ? `<enclosure url="${imageUrl}" type="image/jpeg" />`
        : "";

      return `
        <item>
          <title><![CDATA[${p.title}]]></title>
          <link>${link}</link>
          <guid isPermaLink="true">${link}</guid>
          <pubDate>${pubDate}</pubDate>
          <description><![CDATA[${description}]]></description>
          ${enclosure}
        </item>
      `;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>SocialFly Networks — Blog</title>
      <link>${blogUrl}</link>
      <description>Insights, tutorials and stories from SocialFly Networks (Web, App & Marketing)</description>
      <language>en-IN</language>
      <lastBuildDate>${toRfc822(posts[0]?.date ?? new Date().toISOString())}</lastBuildDate>
      <atom:link href="${siteUrl}/resources/rss.xml" rel="self" type="application/rss+xml" />
      ${itemsXml}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, stale-while-revalidate=3600"
    }
  });
}
