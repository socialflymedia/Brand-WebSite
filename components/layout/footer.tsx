import Link from "next/link";
import { cn } from "@/lib/utils";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text">
              SocialFly Networks
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Empower your business with AI-driven SaaS and analytics solutions.
            </p>
          </div>

          <div>
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

          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-muted-foreground">
                Email: socialflynetworks@gmail.com
              </li>
              <li className="text-muted-foreground">
                Phone: +91 8126040011, +91 8171254458
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/company/social-flymedia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/socialflynetworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
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