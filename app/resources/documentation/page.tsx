// app/resources/documentation/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation — APIs & Setup | SocialFly Networks",
  description: "Technical documentation, integration guides and API references for SocialFly platforms.",
  alternates: { canonical: "https://socialflynetworks.com/resources/documentation" },
  openGraph: { images: ["/resources/docs-og.jpg"], locale: "en_IN" },
  robots: { index: true, follow: true }
};

const TOPICS = [
  { slug: "api-auth", title: "API Authentication", desc: "How to get API keys and authenticate calls." },
  { slug: "webhooks", title: "Webhooks", desc: "Subscribe to real-time events and process them reliably." },
  { slug: "sdk-setup", title: "SDK Setup", desc: "Client SDKs and quickstart for Node and browser." }
];

export default function DocsPage() {
  return (
    <section className="pt-28 pb-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-gray-300">Integration guides, API references and developer resources.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TOPICS.map((t) => (
            <article key={t.slug} className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">{t.title}</h3>
              <p className="text-gray-400 mt-2">{t.desc}</p>
              <div className="mt-4">
                <Link href={`/resources/documentation/${t.slug}`} className="text-orange-400 font-semibold">Open →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
