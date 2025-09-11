// app/resources/changelog/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Changelog — Product Releases & Notes | SocialFly Networks",
  description: "Product updates, new features and release notes from SocialFly Networks and our products.",
  alternates: { canonical: "https://socialflynetworks.com/resources/changelog" },
  openGraph: { images: ["/resources/changelog-og.jpg"], locale: "en_IN" },
  robots: { index: true, follow: true }
};

const RELEASES = [
  { version: "v1.4.0", date: "2025-08-15", notes: ["Performance improvements", "New payment gateway support"] },
  { version: "v1.3.2", date: "2025-06-10", notes: ["Bug fixes", "Minor UX polish"] },
  { version: "v1.2.0", date: "2025-03-02", notes: ["Introduced headless commerce flows", "New admin dashboard"] }
];

export default function ChangelogPage() {
  return (
    <section className="pt-28 pb-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-gray-300">Track product releases, fixes and improvements.</p>
        </div>

        <div className="mt-10 space-y-6 max-w-3xl mx-auto">
          {RELEASES.map((r) => (
            <article key={r.version} className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{r.version}</h3>
                <time className="text-sm text-gray-400">{r.date}</time>
              </div>
              <ul className="mt-3 text-gray-300 list-disc list-inside">
                {r.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
