import Link from "next/link";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <Image
              src="./SFN_black_transparent_logo.png"
              alt="SocialFly Networks"
              className="h-24 w-auto dark:hidden"
              width={150}
              height={300}
              priority
              />
              <Image
              src="./SFN_white_transparent_logo.png"
              alt="SocialFly Networks"
              className="h-24 w-auto hidden dark:block"
              width={150}
              height={300}
              priority
              />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Empower your business with AI-driven SaaS and analytics solutions.
            </p>
          </div>

            <div className="md:col-span-1 md:col-start-4 text-right">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
              <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              >
              Home
              </Link>
              </li>
              <li>
              <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors"
              >
              Services
              </Link>
              </li>
              <li>
              <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              >
              About
              </Link>
              </li>
              <li>
              <Link
              href="/products"
              className="text-muted-foreground hover:text-foreground transition-colors"
              >
              Products
              </Link>
              </li>
              <li>
              <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              >
              Contact
              </Link>
              </li>
            </ul>
            </div>

          <div className="md:col-span-4 mt-4">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-medium">Contact</h3>
    <span className="text-lg font-medium">Follow us</span>
  </div>
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground flex-wrap">
    {/* Email and Phone */}
    <div className="flex flex-col md:flex-row items-center gap-4">
      <a href="mailto:socialflymedia2024@gmail.com" className="hover:text-foreground transition-colors">
        Email: socialflymedia2024@gmail.com
      </a>
      <a href="tel:+918126040011" className="hover:text-foreground transition-colors">
        Phone: +91 8126040011
      </a>
      <a href="tel:+918171254458" className="hover:text-foreground transition-colors">
        Phone: +91 8171254458
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="flex space-x-4"></div>
      <a
        href="https://www.linkedin.com/company/social-flymedia/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a
        href="https://www.instagram.com/socialflymediaa"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  </div>
</div>
        </div>



        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SocialFly Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}