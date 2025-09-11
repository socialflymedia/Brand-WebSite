// app/resources/blog/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Insights on Web, App & Marketing | SocialFly Networks",
  description: "Articles about web development, product design, marketing and building businesses in Mawana & Meerut.",
  alternates: { canonical: "https://socialflynetworks.com/resources/blog" },
  openGraph: { images: ["/resources/blog-og.jpg"], locale: "en_IN" },
  robots: { index: true, follow: true }
};

export default function BlogIndex() {
  const POSTS = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "SocialFly Networks Blog",
            url: "https://socialflynetworks.com/resources/blog",
            description: "Articles and insights on building, launching and growing digital products."
          })
        }}
      />
      <section className="pt-28 pb-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-300">Insights, tutorials and stories from our team. Subscribe to RSS for updates.</p>
            <div className="mt-6">
              <a href="/blog/rss.xml" className="text-orange-400 underline">RSS feed</a>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article key={p.slug} className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="relative h-40">
                  <Image src={p.image} alt={p.title} fill style={{ objectFit: "cover" }} placeholder="empty" />
                </div>
                <div className="p-5">
                  <time className="text-xs text-gray-400">{p.date}</time>
                  <h3 className="text-lg font-semibold text-white mt-2">{p.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{p.excerpt}</p>
                  <div className="mt-4">
                    <Link href={`/blog/${p.slug}`} className="text-orange-400 font-semibold">Read →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
