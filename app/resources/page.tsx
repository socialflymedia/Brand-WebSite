// app/resources/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, FileText, Layers, Scroll, Archive, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources — Case Studies, Guides, Docs & Blog | SocialFly Networks",
  description: "Resources from SocialFly Networks — case studies, how-to guides, documentation, changelog, blog and community resources to help you build, market and scale digital products.",
  keywords: ["resources", "case studies", "guides", "docs", "blog", "digital marketing Mawana", "web development Meerut"],
  alternates: { canonical: "https://socialflynetworks.com/resources" },
  openGraph: {
    title: "Resources • SocialFly Networks",
    description: "Case studies, guides, documentation and blog from our team in Mawana & Meerut.",
    images: ["/resources/resources-og.jpg"],
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function ResourcesIndex() {
  const tiles = [
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      desc: "Real outcomes from our clients — architecture, approach, and measurable results.",
      icon: BookOpen,
      image: "/resources/case-studies-hero.jpg",
    },
    {
      title: "Guides",
      href: "/resources/guides",
      desc: "Practical step-by-step guides on web, app, marketing and product topics.",
      icon: FileText,
      image: "/resources/guides-hero.jpg",
    },
    {
      title: "Documentation",
      href: "/resources/documentation",
      desc: "Technical docs, API references and setup instructions for our platforms and libraries.",
      icon: Layers,
      image: "/resources/docs-hero.jpg",
    },
    {
      title: "Changelog",
      href: "/resources/changelog",
      desc: "Release notes, upgrades and platform changes from SocialFly & our products.",
      icon: Archive,
      image: "/resources/changelog-hero.jpg",
    },
    {
      title: "Blog",
      href: "/resources/blog",
      desc: "Thought leadership, tutorials and stories about building and growing digital products.",
      icon: Scroll,
      image: "/resources/blog-hero.jpg",
    },
    {
      title: "Community",
      href: "/resources/community",
      desc: "Events, meetups and ways to collaborate with the SocialFly community.",
      icon: Users,
      image: "/resources/community-hero.jpg",
    },
  ];

  return (
    <>
      <section className="pt-28 pb-12 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Case studies, guides, documentation and articles — practical materials to help you ship faster and scale smarter.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold">
                Request a Custom Guide
              </Link>
              <a href="/resources/rss.xml" className="px-6 py-3 border border-orange-500/20 text-orange-400 rounded-lg">Subscribe RSS</a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiles.map((t) => (
              <Link key={t.href} href={t.href} className="group block rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-black/75 to-black/85 hover:shadow-2xl transition">
                <div className="relative h-40 bg-gray-900">
                  <Image src={t.image} alt={t.title} fill style={{ objectFit: "cover", objectPosition: "50% 35%" }} placeholder="empty" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                      <t.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{t.desc}</p>
                  <div className="mt-4 text-sm text-orange-400 font-medium">Explore <span aria-hidden>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
