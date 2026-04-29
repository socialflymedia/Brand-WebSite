// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "../posts";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

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
    alternates: { canonical: `https://socialflynetworks.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage ?? post.image],
      locale: "en_IN",
      type: "article",
      url: `https://socialflynetworks.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author ?? "SocialFly Networks"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage ?? post.image],
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
              <Link href="/blog" className="text-orange-400 underline">Back to blog</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords?.join(", "),
    author: { "@type": "Person", name: post.author ?? "SocialFly Networks" },
    publisher: {
      "@type": "Organization",
      name: "SocialFly Networks",
      logo: {
        "@type": "ImageObject",
        url: "https://socialflynetworks.com/SFN_black_transparent_logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: [`https://socialflynetworks.com${post.ogImage ?? post.image}`],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://socialflynetworks.com/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="pt-28 pb-20 bg-black">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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

          <section className="mt-8 sfn-article">
            {post.body ? (
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            ) : (
              <p className="text-gray-300">{post.excerpt}</p>
            )}
          </section>

          {post.faqs?.length ? (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((f, i) => (
                  <details
                    key={i}
                    className="bg-gray-950 border border-gray-800 rounded-xl p-4 group"
                  >
                    <summary className="cursor-pointer text-white font-semibold marker:text-orange-400">
                      {f.q}
                    </summary>
                    <p className="text-gray-300 mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <footer className="mt-12">
            <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
              <h3 className="text-white font-semibold mb-3">Related posts</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="text-orange-400 hover:text-orange-300"
                  >
                    {r.title} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/20 rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Building agentic AI or a custom web product?
              </h3>
              <p className="text-gray-300 mb-4">
                SocialFly Networks is an agentic AI and web development company shipping
                production AI agents, SaaS platforms and mobile apps for clients worldwide.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg"
              >
                Book a free consultation →
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
