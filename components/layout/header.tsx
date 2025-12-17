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
  Sparkles
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

// Types
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

// Constants
const SCROLL_THRESHOLD = 10;
const MOBILE_BREAKPOINT = 768;
const LOGO_SIZES = {
  mobile: { width: 32, height: 32 },
  tablet: { width: 40, height: 40 },
  desktop: { width: 44, height: 44 }
};

// Service Icons
const SERVICE_ICONS = {
  web: <Globe className="w-4 h-4" />,
  app: <Code className="w-4 h-4" />,
  marketing: <Megaphone className="w-4 h-4" />,
  design: <Palette className="w-4 h-4" />
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
        icon: SERVICE_ICONS.web
      },
      {
        title: "App Development",
        href: "/services/app-development",
        desc: "Native and cross-platform mobile apps",
        icon: SERVICE_ICONS.app
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        desc: "Data-driven growth strategies",
        icon: SERVICE_ICONS.marketing
      },
      {
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
        desc: "Beautiful, intuitive user experiences",
        icon: SERVICE_ICONS.design,
        badge: "Popular"
      }
    ],
  },
  {
    title: "Products",
    items: [
      {
        title: "EduFly ERP",
        href: "https://www.edufly.cloud",
        desc: "Manages all verticals of educational institutions",
        badge: "New",
        external: true
      },
      {
        title: "MilkFly",
        href: "https://milk-track.vercel.app",
        desc: "Streamline your milk management operations",
        external: true
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

// Custom Hooks
const useScrolled = (threshold: number = SCROLL_THRESHOLD): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  return scrolled;
};

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

// Components
const Logo = memo(() => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
      aria-label="SocialFly Networks Home"
    >
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
        {!imageError ? (
          <Image
            src="/icon.png"
            alt="SocialFly Networks"
            fill
            className="object-cover"
            priority
            sizes="44px"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        )}
      </div>

      <div className="hidden sm:flex flex-col justify-center">
        <span className="text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-tight">
          SocialFly Networks
        </span>
        <span className="text-[10px] lg:text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
          Digital Excellence
        </span>
      </div>
    </Link>
  );
});
Logo.displayName = 'Logo';

const NavigationDropdown = memo<{
  section: NavSection;
  isActive: boolean;
}>(({ section, isActive }) => {
  const columnCount = section.items.length > 4 ? 2 : 1;
  const dropdownWidth = columnCount === 2 ? 'w-[640px]' : 'w-[380px]';

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "h-9 px-3 text-sm font-medium rounded-lg transition-all duration-200",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
          "data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800",
          isActive && "text-orange-600 dark:text-orange-400"
        )}
      >
        {section.title}
      </NavigationMenuTrigger>

      <NavigationMenuContent className={cn("min-w-[320px]", dropdownWidth)}>
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className={cn(
            "grid gap-2",
            columnCount === 2 ? "grid-cols-2" : "grid-cols-1"
          )}>
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
NavigationDropdown.displayName = 'NavigationDropdown';

const DesktopNavigation = memo<{ pathname: string }>(({ pathname }) => {
  const navItems = useMemo(() => (
    <>
      {NAVIGATION_DATA.map((section) => {
        const isActive = section.items.some(item => pathname.startsWith(item.href));
        return (
          <NavigationDropdown
            key={section.title}
            section={section}
            isActive={isActive}
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
                "inline-flex items-center h-9 px-3 text-sm font-medium rounded-lg transition-all duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                isActive && "text-orange-600 dark:text-orange-400 bg-gray-100 dark:bg-gray-800"
              )}
            >
              {link.title}
            </Link>
          </NavigationMenuItem>
        );
      })}
    </>
  ), [pathname]);

  return (
    <nav className="hidden md:flex items-center justify-center flex-1" role="navigation">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-1">
          {navItems}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
});
DesktopNavigation.displayName = 'DesktopNavigation';

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />

          {/* Slide-out Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
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
              {/* Services Accordion */}
              <Accordion type="single" collapsible>
                {NAVIGATION_DATA.map((section) => (
                  <AccordionItem key={section.title} value={section.title}>
                    <AccordionTrigger className="text-sm font-semibold">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-1 pt-2">
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
                                isActive && "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <span>{item.title}</span>
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
                        isActive && "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                asChild
              >
                <Link href="/contact" onClick={onClose}>
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
MobileNavigation.displayName = 'MobileNavigation';

// Main Header Component
export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

  const handleCloseMenu = useCallback(() => setIsOpen(false), []);
  const handleToggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Close menu on route change
  useEffect(() => {
    handleCloseMenu();
  }, [pathname, handleCloseMenu]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) handleCloseMenu();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleCloseMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, isMobile]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "py-2" : "py-3 md:py-4"
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className={cn(
            "relative rounded-2xl transition-all duration-300",
            "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl",
            "border border-gray-200/50 dark:border-gray-700/50",
            scrolled ? "shadow-lg" : "shadow-xl"
          )}>
            <div className="px-4 sm:px-6 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <DesktopNavigation pathname={pathname} />

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                 
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
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
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

      {/* Spacer to prevent content from going under fixed header */}
      <div className={cn(
        "transition-all duration-300",
        scrolled ? "h-[68px] md:h-[72px]" : "h-[76px] md:h-[88px]"
      )} />
    </>
  );
}