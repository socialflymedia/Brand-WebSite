"use client";

import React, { useEffect, useState, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, ArrowRight, Globe, Code, Megaphone, Palette, ChevronDown } from "lucide-react";
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

// Types
interface NavItem {
  title: string;
  href: string;
  desc?: string;
  icon?: React.ReactNode;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
  width: string;
  columns: string;
  icon?: React.ReactNode;
}

// Constants
const SCROLL_THRESHOLD = 20;

// Icons for services
const serviceIcons = {
  web: <Globe className="w-4 h-4" />,
  app: <Code className="w-4 h-4" />,
  marketing: <Megaphone className="w-4 h-4" />,
  design: <Palette className="w-4 h-4" />
};

// Navigation data
const NAVIGATION_DATA: NavSection[] = [
  {
    title: "Services",
    width: "w-[90vw] sm:w-[520px]",
    columns: "grid-cols-1",
    items: [
      {
        title: "Web Development",
        href: "/services/web-development",
        desc: "Modern, fast, and scalable web solutions",
        icon: serviceIcons.web
      },
      {
        title: "App Development",
        href: "/services/app-development",
        desc: "Native and cross-platform mobile apps",
        icon: serviceIcons.app
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        desc: "Data-driven growth strategies",
        icon: serviceIcons.marketing
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        desc: "Beautiful, intuitive user experiences",
        icon: serviceIcons.design,
        badge: "Popular"
      },
      {
        title: "Google Business Setup",
        href: "/services/google-business-setup",
        desc: "Improve local visibility & GMB optimization"
      },
      {
        title: "Meta Ads Management",
        href: "/services/meta-ads-management",
        desc: "Creative + data-driven Meta campaigns"
      },
      {
        title: "Ecommerce Solutions",
        href: "/services/ecommerce-solutions",
        desc: "Headless commerce, checkout & scaling"
      }
    ],
  },
  {
    title: "Products",
    width: "w-[90vw] sm:w-[640px]",
    columns: "grid-cols-1 sm:grid-cols-2",
    items: [
      {
        title: "EduFly ERP",
        href: "https://www.edufly.cloud",
        desc: "Manages all verticals of educational institutions",
        badge: "New"
      },
      {
        title: "MilkFly",
        href: "https://www.milk-track.vercel.app",
        desc: "Streamline your milk management operations",
      },    
    ],
  },
  {
    title: "Resources",
    width: "w-[90vw] sm:w-[560px]",
    columns: "grid-cols-1 sm:grid-cols-2",
    items: [
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Guides", href: "/resources/guides" },
      { title: "Documentation", href: "/resources/documentation" },
      { title: "Changelog", href: "/resources/changelog", badge: "Updated" },
      { title: "Community", href: "/resources/community" },
    ],
  },
];

const STATIC_LINKS: NavItem[] = [
  { title: "Contact Us", href: "/contact" },
  { title: "About", href: "/about" },
];

// Custom Hooks
const useScrolled = (threshold: number = SCROLL_THRESHOLD) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};

// Lightning-fast Logo with instant loading
const Logo = memo<{ mounted: boolean }>(({ mounted }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Preload the image as soon as component mounts
  useEffect(() => {
    if (mounted) {
      const img = new window.Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = '/icon.png';
    }
  }, [mounted]);

  return (
    <Link
      href="/"
      className="flex items-center gap-2 sm:gap-2.5 md:gap-3 group min-w-0 flex-shrink-0"
      aria-label="SocialFly Networks Home"
    >
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
        {mounted && imageLoaded && !imageError ? (
          <Image
            src="/icon.png"
            alt="SocialFly Networks Logo"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 44px"
            quality={100}
            unoptimized={false}
          />
        ) : (
          // SVG fallback that renders instantly - replace with your actual logo colors
          <div className="w-full h-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-orange-500"
              fill="currentColor"
            >
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              <path d="M12 6L12.5 10L16 10.5L12.5 11L12 15L11.5 11L8 10.5L11.5 10L12 6Z" />
            </svg>
          </div>
        )}
      </div>

      <div className="hidden sm:flex flex-col leading-tight min-w-0">
        <span className="text-sm md:text-base font-bold text-gray-900 dark:text-white truncate">
          SocialFly Networks
        </span>
        <span className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 font-medium">
          Digital Excellence
        </span>
      </div>
    </Link>
  );
});
Logo.displayName = 'Logo';

// Responsive NavMenuItem with better mobile handling
const NavMenuItem = memo<{
  section: NavSection;
  pathname: string;
}>(({ section, pathname }) => {
  const isActive = section.items.some(item => pathname.startsWith(item.href));

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200",
          "hover:bg-white/10 dark:hover:bg-gray-800/30",
          "data-[state=open]:bg-white/10 dark:data-[state=open]:bg-gray-800/30",
          "flex items-center gap-1",
          isActive && "text-orange-500 dark:text-orange-400"
        )}
      >
        <span className="truncate">{section.title}</span>
        <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
      </NavigationMenuTrigger>

      <NavigationMenuContent
        className={cn(
          "min-w-[300px]",
          section.width
        )}
      >
        <div className="p-3 sm:p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-2xl max-h-[70vh] overflow-y-auto">
          <div className={cn("grid gap-1 sm:gap-2", section.columns)}>
            {section.items.map((item) => {
              const isItemActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group block p-2 sm:p-3 rounded-lg transition-all duration-200",
                    "hover:bg-gray-100/80 dark:hover:bg-gray-800/80",
                    isItemActive && "bg-orange-50/80 dark:bg-orange-900/20"
                  )}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    {item.icon && (
                      <div className="mt-0.5 p-1 sm:p-1.5 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex-shrink-0">
                        {item.icon}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={cn(
                          "text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors truncate",
                          isItemActive && "text-orange-600 dark:text-orange-400"
                        )}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-gradient-to-r from-orange-500 to-pink-500 text-white flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-orange-500 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
});
NavMenuItem.displayName = 'NavMenuItem';

// Responsive static links
const StaticNavLinks = memo<{ pathname: string }>(({ pathname }) => (
  <>
    {STATIC_LINKS.map((link) => {
      const isActive = pathname === link.href;
      return (
        <NavigationMenuItem key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200 inline-block truncate",
              "hover:bg-white/10 dark:hover:bg-gray-800/30",
              isActive ? "text-orange-500 dark:text-orange-400 bg-white/10 dark:bg-gray-800/30" : ""
            )}
          >
            {link.title}
          </Link>
        </NavigationMenuItem>
      );
    })}
  </>
));
StaticNavLinks.displayName = 'StaticNavLinks';

// Responsive Desktop Navigation
const DesktopNavigation = memo<{ pathname: string }>(({ pathname }) => (
  <nav className="hidden md:flex items-center gap-1 lg:gap-4 flex-1 justify-center" role="navigation">
    <NavigationMenu>
      <NavigationMenuList className="flex items-center gap-0 lg:gap-1 flex-wrap">
        {NAVIGATION_DATA.map((section) => (
          <NavMenuItem key={section.title} section={section} pathname={pathname} />
        ))}

        {/* Blog as a top-level item */}
        <NavigationMenuItem>
          <Link
            href="/blog"
            className={cn(
              "px-2 lg:px-3 py-2 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200 inline-block",
              "hover:bg-white/10 dark:hover:bg-gray-800/30",
              pathname === "/blog" ? "text-orange-500 dark:text-orange-400 bg-white/10 dark:bg-gray-800/30" : ""
            )}
          >
            Blog
          </Link>
        </NavigationMenuItem>

        <StaticNavLinks pathname={pathname} />
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
));
DesktopNavigation.displayName = 'DesktopNavigation';

// Responsive CTA Button
const CTAButton = memo(() => (
  <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
    <Button
      className="group px-3 lg:px-5 py-1.5 lg:py-2 text-xs lg:text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
      asChild
    >
      <Link href="/contact">
        <span className="flex items-center gap-1 lg:gap-2">
          <span className="truncate">Get Started</span>
          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </Button>
  </div>
));
CTAButton.displayName = 'CTAButton';

// Mobile Toggle
const MobileToggle = memo<{
  isOpen: boolean;
  onToggle: () => void;
}>(({ isOpen, onToggle }) => (
  <div className="md:hidden flex items-center gap-2 flex-shrink-0">
    <button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/30 transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  </div>
));
MobileToggle.displayName = 'MobileToggle';

// Mobile Accordion Item
const MobileAccordionItem = memo<{ section: NavSection; pathname: string }>(({ section, pathname }) => (
  <AccordionItem
    value={section.title.toLowerCase()}
    className="border border-white/10 dark:border-gray-700/30 rounded-lg overflow-hidden backdrop-blur-sm"
  >
    <AccordionTrigger className="px-4 hover:bg-white/5 dark:hover:bg-gray-800/30 text-left text-sm font-medium">
      {section.title}
    </AccordionTrigger>
    <AccordionContent className="px-4 pb-3">
      <div className="space-y-1">
        {section.items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between p-2.5 rounded-md transition-colors group",
                "hover:bg-white/10 dark:hover:bg-gray-700/30",
                isActive && "bg-orange-500/10 text-orange-500"
              )}
            >
              <span className="text-sm truncate flex-1">{item.title}</span>
              {item.badge && (
                <span className="px-1.5 py-0.5 text-[10px] rounded bg-gradient-to-r from-orange-500 to-pink-500 text-white flex-shrink-0 ml-2">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </AccordionContent>
  </AccordionItem>
));
MobileAccordionItem.displayName = 'MobileAccordionItem';

// Mobile Navigation
const MobileNavigation = memo<{ isOpen: boolean; pathname: string }>(({ isOpen, pathname }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
      >
        <nav className="mt-4 pb-4 px-2 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/about"
              className={cn(
                "p-3 rounded-lg text-center text-sm font-medium transition-all",
                "bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm",
                "hover:bg-white/10 dark:hover:bg-gray-700/30",
                pathname === "/about" && "bg-orange-500/10 text-orange-500"
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "p-3 rounded-lg text-center text-sm font-medium transition-all",
                "bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm",
                "hover:bg-white/10 dark:hover:bg-gray-700/30",
                pathname === "/contact" && "bg-orange-500/10 text-orange-500"
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Accordion Menu */}
          <Accordion type="single" collapsible className="space-y-2">
            {NAVIGATION_DATA.map((section) => (
              <MobileAccordionItem
                key={section.title}
                section={section}
                pathname={pathname}
              />
            ))}
          </Accordion>

          {/* Blog Link */}
          <Link
            href="/blog"
            className={cn(
              "block p-3 rounded-lg text-sm font-medium text-center transition-all",
              "bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm",
              "hover:bg-white/10 dark:hover:bg-gray-700/30",
              pathname === "/blog" && "bg-orange-500/10 text-orange-500"
            )}
          >
            Blog
          </Link>

          {/* CTA Buttons */}
          <div className="space-y-2 pt-2">
            <Button
              className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-medium shadow-md"
              asChild
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              variant="outline"
              className="w-full py-2.5 border border-orange-500/30 text-orange-500 hover:bg-orange-500/10 rounded-lg font-medium backdrop-blur-sm"
              asChild
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
));
MobileNavigation.displayName = 'MobileNavigation';

// Main Header Component with image preloading
export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();

  // Preload logo immediately when component mounts
  useEffect(() => {
    setMounted(true);
    
    // Preload the logo image immediately
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = '/icon.png';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  // Keyboard navigation
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    return () => { 
      document.body.style.overflow = ''; 
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const handleToggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-1 sm:py-2" : "py-2 sm:py-3 md:py-4"
        )}
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8">
          <div className={cn(
            "relative rounded-xl sm:rounded-2xl transition-all duration-500",
            scrolled
              ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-xl"
              : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-lg",
            "border border-white/20 dark:border-gray-700/20"
          )}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500/5 via-transparent to-pink-500/5 pointer-events-none" />

            <div className="relative px-4 sm:px-6 py-2 sm:py-3 md:px-8">
              <div className="flex items-center justify-between gap-2 sm:gap-4 min-h-[44px]">
                <Logo mounted={mounted} />
                <DesktopNavigation pathname={pathname} />
                <CTAButton />
                <MobileToggle isOpen={isOpen} onToggle={handleToggleMenu} />
              </div>

              <MobileNavigation isOpen={isOpen} pathname={pathname} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={handleToggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}