// ============================================
// APP DEVELOPMENT SERVICE PAGE - ENTERPRISE VERSION
// /app/services/app-development/page.tsx
// ============================================

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Smartphone,
    Rocket,
    CheckCircle2,
    ArrowRight,
    Zap,
    Shield,
    Globe,
    Code2,
    Cpu,
    Database,
    Cloud,
    Lock,
    Activity,
    Layers,
    Terminal,
    Apple,
    PlayCircle,
    Gauge,
    Package,
    Workflow,
    TabletSmartphone,
    Fingerprint,
    Wifi,
    Battery,
    Download
} from "lucide-react";

export const metadata: Metadata = {
    title: "Mobile App Development Services | iOS, Android & Cross-Platform | SocialFly Networks",
    description: "Enterprise mobile app development. Native iOS & Android apps, React Native, Flutter cross-platform solutions. AR/VR integration, AI-powered features, and cloud-native architecture.",
    keywords: [
        "mobile app development",
        "iOS app development",
        "Android app development",
        "React Native development",
        "Flutter apps",
        "cross-platform mobile apps",
        "enterprise mobile solutions",
        "mobile app architecture",
        "native app development",
        "Progressive Web Apps"
    ],
    openGraph: {
        title: "Enterprise Mobile Solutions - SocialFly Networks",
        description: "Building next-generation mobile experiences with native performance and cross-platform efficiency.",
        images: ["/services/app-enterprise-og.jpg"],
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://socialflynetworks.com/services/app-development"
    },
    robots: {
        index: true,
        follow: true,
    }
};

// Structured Data
const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SocialFly Networks - Mobile App Development",
    "description": "Enterprise mobile app development and digital transformation",
    "@id": "https://socialflynetworks.com#appdev",
    "url": "https://socialflynetworks.com/services/app-development",
    "serviceType": "Mobile Application Development",
    "areaServed": {
        "@type": "Place",
        "name": "Global"
    },
    // include Zapstracts as an example project
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Selected Project - Zapstracts",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "CreativeWork",
                    "name": "Zapstracts",
                    "url": "https://zapstracts.com",
                    "description": "Ecommerce & lead-gen platform with payment integrations; secure checkout and product catalog optimizations."
                }
            }
        ]
    }
};

// App showcase - now only Zapstracts
const appShowcase = [
    {
        name: "Zapstracts",
        category: "E-Commerce",
        users: "3M+ Transactions",
        platforms: ["iOS", "Android", "Web"],
        features: "AR Try-On, Live Shopping"
    }
];

// Core capabilities
const capabilities = [
    {
        title: "Native Development",
        description: "High-performance native apps leveraging platform-specific capabilities",
        icon: Apple,
        technologies: ["Swift", "Kotlin", "SwiftUI", "Jetpack Compose"]
    },
    {
        title: "Cross-Platform Excellence",
        description: "Single codebase solutions without compromising on performance",
        icon: TabletSmartphone,
        technologies: ["React Native", "Flutter", "Ionic", "Xamarin"]
    },
    {
        title: "Cloud Integration",
        description: "Seamless backend integration with real-time synchronization",
        icon: Cloud,
        technologies: ["Firebase", "AWS Amplify", "Azure Mobile", "GraphQL"]
    },
    {
        title: "Advanced Features",
        description: "Cutting-edge capabilities for immersive experiences",
        icon: Fingerprint,
        technologies: ["AR/VR", "AI/ML", "IoT", "Blockchain"]
    }
];

// Development process
const process = [
    {
        phase: "Strategy & UX",
        description: "User research, wireframing, and experience design",
        icon: Workflow,
        duration: "2 weeks"
    },
    {
        phase: "Development Sprint",
        description: "Agile development with bi-weekly releases",
        icon: Code2,
        duration: "8-12 weeks"
    },
    {
        phase: "Testing & QA",
        description: "Automated testing across all devices",
        icon: Shield,
        duration: "2 weeks"
    },
    {
        phase: "Launch & Scale",
        description: "App store optimization and growth strategies",
        icon: Rocket,
        duration: "Ongoing"
    }
];

// Tech stack
const techStack = {
    native: ["Swift", "Objective-C", "Kotlin", "Java"],
    hybrid: ["React Native", "Flutter", "Ionic", "NativeScript"],
    backend: ["Node.js", "Python", "Go", "GraphQL"],
    cloud: ["AWS", "Firebase", "Azure", "Google Cloud"]
};

export default function AppDevelopmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-black">
                {/* Animated orange gradient blobs */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-20 left-1/4 w-[350px] h-[350px] bg-orange-600/15 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
                </div>

                {/* Dot pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8">
                                <Smartphone className="w-4 h-4 text-orange-400" />
                                <span className="text-sm font-medium text-orange-400">
                                    Enterprise Mobile Solutions
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                Mobile Apps That
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                    Captivate Users
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                                Native performance. Cross-platform efficiency. Building mobile experiences
                                that drive engagement and deliver results.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                {[
                                    { value: "10M+", label: "App Downloads" },
                                    { value: "99.9%", label: "Crash-free Rate" },
                                    { value: "4.8★", label: "Average Rating" },
                                    { value: "50+", label: "Apps Launched" }
                                ].map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                                >
                                    <span>Start Your Project</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#showcase"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all"
                                >
                                    <PlayCircle className="w-5 h-5" />
                                    <span>View Portfolio</span>
                                </Link>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="relative hidden lg:block">
                            <div className="relative">
                                {/* Phone mockups */}
                                {/* Direct screenshots (replace mockups) */}
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left image */}
                                    <div className="relative w-64 h-[520px] bg-gray-900 rounded-[1rem] border-4 border-gray-800 overflow-hidden">
                                        <Image
                                            src="/projects/zapstracts-hero-1.webp"
                                            alt="Zapstracts — Home screen with featured products"
                                            fill
                                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 256px"
                                            style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                                            priority={true}
                                            placeholder="empty"
                                        />
                                    </div>

                                    {/* Right image */}
                                    <div className="relative w-64 h-[520px] bg-gray-900 rounded-[1rem] border-4 border-gray-800 overflow-hidden">
                                        <Image
                                            src="/projects/zapstracts-hero-2.webp"
                                            alt="Zapstracts — Product detail and checkout flow"
                                            fill
                                            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 256px"
                                            style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                                            priority={false}
                                            placeholder="empty"
                                        />
                                    </div>
                                </div>


                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-xl">
                                    <span className="text-sm text-gray-300">Cross-Platform</span>
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-orange-500/30 px-4 py-2 rounded-xl">
                                    <span className="text-sm text-gray-300">Native Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-gray-950 relative">
                <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Mobile <span className="text-orange-500">Expertise</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            End-to-end mobile solutions from concept to deployment
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                                    <capability.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {capability.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">
                                    {capability.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {capability.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 bg-orange-500/10 text-orange-400 rounded-md border border-orange-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Showcase */}
            <section id="showcase" className="py-20 bg-black relative">
                <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Recent <span className="text-orange-500">Launch</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A flagship app that has transformed user experience and commerce flows
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                        {appShowcase.map((app, index) => (
                            <div
                                key={index}
                                className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                                        {app.category}
                                    </span>
                                    <Download className="w-4 h-4 text-gray-600 group-hover:text-orange-400 transition-colors" />
                                </div>

                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {app.name}
                                </h3>

                                <p className="text-green-400 text-sm font-medium mb-3">
                                    {app.users}
                                </p>

                                <p className="text-gray-500 text-xs mb-4">
                                    {app.features}
                                </p>

                                <div className="flex gap-2 mb-4">
                                    {app.platforms.map((platform, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 bg-gray-900 text-gray-400 rounded border border-gray-800"
                                        >
                                            {platform}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href="https://zapstracts.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold">
                                        Visit Zapstracts
                                    </a>
                                    <a href="/contact" className="text-sm text-gray-300 underline">Discuss a similar app</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-950 relative">
                <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Agile <span className="text-orange-500">Process</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From concept to launch in record time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {process.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Connection line */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
                                )}

                                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2">
                                        {item.phase}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-3">
                                        {item.description}
                                    </p>

                                    <span className="text-xs text-orange-400 font-medium">
                                        {item.duration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-black relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Technology <span className="text-orange-500">Stack</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {Object.entries(techStack).map(([category, technologies]) => (
                            <div key={category} className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all">
                                <h3 className="text-sm font-semibold text-orange-400 mb-4 uppercase tracking-wider">
                                    {category}
                                </h3>
                                <div className="space-y-2">
                                    {technologies.map((tech, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                                            <span className="text-gray-300 text-sm">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-600/15 rounded-full blur-[100px] animate-pulse animation-delay-2000" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Next Big App?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Let&apos;s create mobile experiences that users love and businesses rely on.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                            >
                                <Smartphone className="w-5 h-5" />
                                <span>Discuss Your App Idea</span>
                            </Link>

                            <a
                                href="/resources/mobile-strategy-guide"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-orange-500/30 hover:bg-orange-500/10 transition-all"
                            >
                                <Download className="w-5 h-5" />
                                <span>Mobile Strategy Guide</span>
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Apple className="w-5 h-5" />
                                <span>iOS</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PlayCircle className="w-5 h-5" />
                                <span>Android</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5" />
                                <span>Cross-Platform</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5" />
                                <span>PWA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
