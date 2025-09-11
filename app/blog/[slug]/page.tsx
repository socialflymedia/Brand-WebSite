// app/resources/blog/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../posts";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post not found — SocialFly Networks",
      description: "Post not found",
      robots: { index: false, follow: false }
    };
  }

  return {
    title: `${post.title} | SocialFly Networks`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://socialflynetworks.com/resources/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage ?? post.image],
      locale: "en_IN",
      type: "article"
    },
    robots: { index: true, follow: true }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <section className="pt-28 pb-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">Post not found</h1>
            <p className="text-gray-300 mt-2">We couldn&apos;t locate the article you requested.</p>
            <div className="mt-6">
              <Link href="/resources/blog" className="text-orange-400 underline">Back to blog</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author ?? "SocialFly Networks" },
    publisher: { "@type": "Organization", name: "SocialFly Networks", logo: { "@type": "ImageObject", url: "https://socialflynetworks.com/SFN_black_transparent_logo.png" } },
    datePublished: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://socialflynetworks.com/resources/blog/${post.slug}` }
  };

  // For simplicity we render an excerpt-based article — replace with MD/MDX or CMS when desired
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="pt-28 pb-20 bg-black">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-invert">
          <header>
            <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-900">
              <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} placeholder="empty" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <h1 className="mt-6 text-4xl font-bold text-white">{post.title}</h1>
            <p className="text-gray-300 mt-2">{post.excerpt}</p>
            <div className="mt-3 text-sm text-gray-400 flex items-center gap-3">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </header>

          <section className="mt-6">
            {/* Replace this with MD/MDX rendering or CMS-driven HTML in future */}
            <p className="text-gray-300">{post.excerpt}</p>
            <p className="text-gray-300 mt-4">(Full article content can be added here — replace `posts.ts` content with MD/MDX or fetch from CMS to render full body.)</p>
          </section>

          <footer className="mt-10">
            <div className="bg-gray-900 p-4 rounded border border-gray-800">
              <h3 className="text-white">Related posts</h3>
              <div className="mt-3 flex gap-4">
                {getAllPosts().filter(p => p.slug !== post.slug).slice(0,3).map(r => (
                  <Link key={r.slug} href={`/resources/blog/${r.slug}`} className="text-orange-400">{r.title} →</Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
