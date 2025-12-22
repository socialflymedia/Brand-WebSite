"use client";

import React, { useEffect, useState, useCallback, memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Globe,
  Code,
  Megaphone,
  Palette,
  Sparkles,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// ============================================================================
// TYPES
// ============================================================================
interface NavItem {
  title: string;
  href: string;
  desc?: string;
  icon?: React.ReactNode;
  badge?: string;
  external?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
  featured?: boolean;
}

// ============================================================================
// CONSTANTS
// ============================================================================
const SCROLL_THRESHOLD = 50; // Pixels to scroll before navbar becomes solid
const MOBILE_BREAKPOINT = 768;

// Service Icons - Memoized
const SERVICE_ICONS = {
  web: <Globe className="w-4 h-4" />,
  app: <Code className="w-4 h-4" />,
  marketing: <Megaphone className="w-4 h-4" />,
  design: <Palette className="w-4 h-4" />,
} as const;

// Navigation Data
const NAVIGATION_DATA: NavSection[] = [
  {
    title: "Services",
    featured: true,
    items: [
      {
        title: "Web Development",
        href: "/services/web-development",
        desc: "Modern, fast, and scalable web solutions",
        icon: SERVICE_ICONS.web,
      },
      {
        title: "App Development",
        href: "/services/app-development",
        desc: "Native and cross-platform mobile apps",
        icon: SERVICE_ICONS.app,
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        desc: "Data-driven growth strategies",
        icon: SERVICE_ICONS.marketing,
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        desc: "Beautiful, intuitive user experiences",
        icon: SERVICE_ICONS.design,
        badge: "Popular",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        title: "EduFly ERP",
        href: "https://www.edufly.cloud",
        desc: "Complete education management system",
        badge: "New",
        external: true,
      },
      {
        title: "MilkFly",
        href: "https://milk-track.vercel.app",
        desc: "Streamline your milk management",
        external: true,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Guides", href: "/resources/guides" },
      { title: "Documentation", href: "/resources/documentation" },
      { title: "Changelog", href: "/resources/changelog", badge: "Updated" },
      { title: "Community", href: "/resources/community" },
    ],
  },
];

const QUICK_LINKS: NavItem[] = [
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

/**
 * Hook to detect if user has scrolled past a threshold
 * Uses requestAnimationFrame for performance
 */
const useScrolled = (threshold: number = SCROLL_THRESHOLD): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
};

/**
 * Hook for responsive media queries
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Logo Component - Memoized for performance
 */
const Logo = memo(({ scrolled }: { scrolled: boolean }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
      aria-label="SocialFly Networks - Go to homepage"
    >
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
        {!imageError ? (
          <Image
            src="/icon.png"
            alt="SocialFly Networks Logo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 36px, (max-width: 1024px) 40px, 44px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        )}
      </div>

      <div className="hidden sm:flex flex-col justify-center">
        <span
          className={cn(
            "text-sm lg:text-base font-bold leading-tight transition-colors duration-300",
            scrolled
              ? "text-gray-900 dark:text-white"
              : "text-white dark:text-white"
          )}
        >
          SocialFly Networks
        </span>
        <span
          className={cn(
            "text-[10px] lg:text-xs font-medium leading-tight transition-colors duration-300",
            scrolled
              ? "text-gray-600 dark:text-gray-400"
              : "text-white/80 dark:text-gray-300"
          )}
        >
          Digital Excellence
        </span>
      </div>
    </Link>
  );
});
Logo.displayName = "Logo";

/**
 * Navigation Dropdown Component
 */
const NavigationDropdown = memo<{
  section: NavSection;
  isActive: boolean;
  scrolled: boolean;
}>(({ section, isActive, scrolled }) => {
  const columnCount = section.items.length > 4 ? 2 : 1;
  const dropdownWidth = columnCount === 2 ? "w-[640px]" : "w-[380px]";

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "h-9 px-3 text-sm font-medium rounded-lg transition-all duration-300",
          "hover:bg-white/10 dark:hover:bg-gray-800",
          "data-[state=open]:bg-white/20 dark:data-[state=open]:bg-gray-800",
          scrolled
            ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100"
            : "text-white/90 hover:text-white",
          isActive && "text-orange-500 dark:text-orange-400"
        )}
      >
        {section.title}
      </NavigationMenuTrigger>

      <NavigationMenuContent className={cn("min-w-[320px]", dropdownWidth)}>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div
            className={cn(
              "grid gap-2",
              columnCount === 2 ? "grid-cols-2" : "grid-cols-1"
            )}
          >
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start gap-3">
                  {item.icon && (
                    <div className="mt-0.5 p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                      {item.icon}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.desc && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
});
NavigationDropdown.displayName = "NavigationDropdown";

/**
 * Desktop Navigation Component
 */
const DesktopNavigation = memo<{ pathname: string; scrolled: boolean }>(
  ({ pathname, scrolled }) => {
    const navItems = useMemo(
      () => (
        <>
          {NAVIGATION_DATA.map((section) => {
            const isActive = section.items.some((item) =>
              pathname.startsWith(item.href)
            );
            return (
              <NavigationDropdown
                key={section.title}
                section={section}
                isActive={isActive}
                scrolled={scrolled}
              />
            );
          })}
          {QUICK_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex items-center h-9 px-3 text-sm font-medium rounded-lg transition-all duration-300",
                    scrolled
                      ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                    isActive &&
                      "text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
                  )}
                >
                  {link.title}
                </Link>
              </NavigationMenuItem>
            );
          })}
        </>
      ),
      [pathname, scrolled]
    );

    return (
      <nav
        className="hidden md:flex items-center justify-center flex-1"
        role="navigation"
        aria-label="Main navigation"
      >
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1">
            {navItems}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    );
  }
);
DesktopNavigation.displayName = "DesktopNavigation";

/**
 * Mobile Navigation Component
 */
const MobileNavigation = memo<{
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}>(({ isOpen, pathname, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between z-10">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="p-4 space-y-6">
              {/* Phone CTA - Mobile Only */}
              <a
                href="tel:+919411978307"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91-9411978307</span>
              </a>

              {/* Services Accordion */}
              <Accordion type="single" collapsible className="space-y-2">
                {NAVIGATION_DATA.map((section) => (
                  <AccordionItem
                    key={section.title}
                    value={section.title}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-3 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="space-y-1 px-2 pb-3">
                        {section.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              onClick={onClose}
                              className={cn(
                                "block p-2.5 rounded-lg text-sm transition-colors",
                                "hover:bg-gray-100 dark:hover:bg-gray-800",
                                isActive &&
                                  "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{item.title}</span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              {item.desc && (
                                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                  {item.desc}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* Quick Links */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2">
                  Quick Links
                </p>
                {QUICK_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block p-3 rounded-lg text-sm font-medium transition-colors",
                        "hover:bg-gray-100 dark:hover:bg-gray-800",
                        isActive &&
                          "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                  size="lg"
                  asChild
                >
                  <Link href="/contact" onClick={onClose}>
                    <span className="flex items-center justify-center gap-2">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
                <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Free consultation • No obligation
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
MobileNavigation.displayName = "MobileNavigation";

// ============================================================================
// MAIN HEADER COMPONENT
// ============================================================================
export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

  // Check if we're on homepage (for transparent header behavior)
  const isHomePage = pathname === "/";

  const handleCloseMenu = useCallback(() => setIsOpen(false), []);
  const handleToggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close menu on route change
  useEffect(() => {
    handleCloseMenu();
  }, [pathname, handleCloseMenu]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleCloseMenu();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, handleCloseMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, isMobile]);

  // Determine if header should be transparent
  // Only transparent on homepage when not scrolled
  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-3 md:py-4"
        )}
        role="banner"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "relative rounded-2xl transition-all duration-300",
              isTransparent
                ? "bg-black/20 backdrop-blur-md border border-white/10"
                : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            )}
          >
            <div className="px-4 sm:px-6 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <Logo scrolled={!isTransparent} />

                {/* Desktop Navigation */}
                <DesktopNavigation
                  pathname={pathname}
                  scrolled={!isTransparent}
                />

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                  {/* Phone number - Desktop */}
                  <a
                    href="tel:+919411978307"
                    className={cn(
                      "hidden lg:flex items-center gap-2 text-sm font-medium transition-colors",
                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-orange-600"
                    )}
                    aria-label="Call us at +91-9411978307"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91-9411978307</span>
                  </a>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href="/contact">
                      <span className="flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={handleToggleMenu}
                  className={cn(
                    "md:hidden p-2 rounded-lg transition-colors",
                    isTransparent
                      ? "text-white hover:bg-white/10"
                      : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isOpen}
        pathname={pathname}
        onClose={handleCloseMenu}
      />

      {/* 
        NO SPACER DIV HERE!
        The header is fixed and overlays content.
        Hero section should have its own top padding.
      */}
    </>
  );
}