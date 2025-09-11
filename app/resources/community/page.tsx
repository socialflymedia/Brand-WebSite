// app/resources/community/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community — Meetups, Events & Collaboration | SocialFly Networks",
  description: "Join our community — meetups, workshops and collaboration channels for builders in Mawana and Meerut.",
  alternates: { canonical: "https://socialflynetworks.com/resources/community" },
  openGraph: { images: ["/resources/community-og.jpg"], locale: "en_IN" },
  robots: { index: true, follow: true }
};

export default function CommunityPage() {
  return (
    <section className="pt-28 pb-12 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Community</h1>
          <p className="text-gray-300">Events, workshops and ways to collaborate locally in Mawana / Meerut and online.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Upcoming Meetup — Mawana Builders</h3>
            <p className="text-gray-400 mt-2">Monthly meetup: talks, show-and-tell and office hours with our team.</p>
            <div className="mt-4 text-sm text-gray-300">
              <div>📅 Next: Sep 26, 2025</div>
              <div>📍 Venue: SocialFly Studio — Mawana Road, Meerut</div>
            </div>
            <div className="mt-6">
              <a href="/contact" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">Request a seat</a>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Join our online channels</h3>
            <p className="text-gray-400 mt-2">Slack & Discord for product discussions, AMAs and quick help.</p>
            <div className="mt-4 space-y-2">
              <a className="block text-orange-400" href="#">Slack (invite link)</a>
              <a className="block text-orange-400" href="#">Discord (invite link)</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Want a private workshop for your team? <Link href="/contact" className="underline text-orange-400">Contact us</Link>.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
