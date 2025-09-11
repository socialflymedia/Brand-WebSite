import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Code2,
    Rocket,
    CheckCircle2,
    Star,
    ArrowRight,
    Zap,
    Shield,
    Globe,
    Smartphone,
    Search,
    BarChart3,
    Clock,
    Users,
    Award,
    TrendingUp,
    Sparkles,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
    GitBranch,
    Cpu,
    Database,
    Cloud,
    Lock,
    Activity,
    Layers,
    Terminal,
    Server,
    Gauge,
    Package,
    Workflow
} from "lucide-react";

export const metadata: Metadata = {
    title: "Enterprise Web Development Solutions | Digital Transformation | SocialFly Networks",
    description: "Enterprise-grade web development and digital transformation solutions. Microservices architecture, cloud-native applications, Progressive Web Apps (PWA), and headless CMS implementations.",
    keywords: [
        "enterprise web development",
        "digital transformation",
        "microservices architecture",
        "cloud-native applications",
        "Progressive Web Apps PWA",
        "headless CMS",
        "JAMstack architecture",
        "serverless computing",
        "API-first development",
        "DevOps integration"
    ],
    openGraph: {
        title: "Enterprise Web Solutions - SocialFly Networks",
        description: "Building next-generation web platforms with cutting-edge architecture and scalable infrastructure.",
        images: ["/services/web-enterprise-og.jpg"],
        type: "website",
        locale: "en_IN",
    },
    alternates: {
        canonical: "https://socialflynetworks.com/services/web-development"
    },
    robots: {
        index: true,
        follow: true,
    }
};

// Structured Data for Enterprise SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SocialFly Networks - Web Development",
    "description": "Enterprise web development and digital transformation solutions",
    "@id": "https://socialflynetworks.com#webdev",
    "url": "https://socialflynetworks.com/services/web-development",
    "serviceType": "Technology Consulting and Implementation",
    "areaServed": {
        "@type": "Place",
        "name": "Global"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise Web Applications"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Migration Services"
                }
            }
        ]
    }
};

// Enterprise clients showcase
const clientShowcase = [
    {
        name: "Global Education Network",
        sector: "EdTech",
        implementation: "Multi-tenant SaaS Platform",
        impact: "10M+ Active Users",
        technologies: ["Next.js", "Kubernetes", "PostgreSQL"],
        image: "/portfolio/education-platform.png"
    },
    {
        name: "Architecture Innovation Hub",
        sector: "Real Estate Tech",
        implementation: "3D Visualization Platform",
        impact: "40% Faster Project Delivery",
        technologies: ["Three.js", "WebGL", "Node.js"],
        image: "/portfolio/architecture-hub.png"
    },
    {
        name: "Legal Tech Solutions",
        sector: "LegalTech",
        implementation: "AI-Powered Document Processing",
        impact: "85% Automation Rate",
        technologies: ["Python", "TensorFlow", "React"],
        image: "/portfolio/legal-tech.png"
    },
    {
        name: "FinTech Platform",
        sector: "Financial Services",
        implementation: "Blockchain Integration Layer",
        impact: "100K+ Transactions/Day",
        technologies: ["Web3", "Solidity", "GraphQL"],
        image: "/portfolio/fintech-platform.png"
    },
    {
        name: "Healthcare Analytics",
        sector: "HealthTech",
        implementation: "Real-time Data Pipeline",
        impact: "Sub-second Response Time",
        technologies: ["Apache Kafka", "Redis", "ElasticSearch"],
        image: "/portfolio/healthcare-analytics.png"
    },
    {
        name: "E-Commerce Enterprise",
        sector: "Retail",
        implementation: "Headless Commerce Architecture",
        impact: "3x Conversion Rate",
        technologies: ["Shopify Plus", "Next.js", "Contentful"],
        image: "/portfolio/ecommerce-enterprise.png"
    }
];

// Core capabilities
const capabilities = [
    {
        title: "Cloud-Native Architecture",
        description: "Designing and implementing containerized microservices with auto-scaling capabilities on AWS, Azure, and GCP.",
        icon: Cloud,
        features: [
            "Kubernetes Orchestration",
            "Service Mesh Implementation",
            "Multi-cloud Strategy",
            "Infrastructure as Code"
        ],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "API-First Development",
        description: "Building robust RESTful and GraphQL APIs with comprehensive documentation and versioning strategies.",
        icon: Layers,
        features: [
            "GraphQL Federation",
            "API Gateway Pattern",
            "Rate Limiting & Throttling",
            "OpenAPI Specification"
        ],
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Progressive Web Applications",
        description: "Delivering app-like experiences with offline capabilities, push notifications, and native device features.",
        icon: Smartphone,
        features: [
            "Service Worker Implementation",
            "Web App Manifest",
            "Offline-First Strategy",
            "App Shell Architecture"
        ],
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Performance Engineering",
        description: "Optimizing Core Web Vitals and implementing advanced caching strategies for sub-second load times.",
        icon: Gauge,
        features: [
            "CDN Optimization",
            "Edge Computing",
            "Lazy Loading Patterns",
            "Critical CSS Extraction"
        ],
        gradient: "from-red-500 to-orange-500"
    },
    {
        title: "Security & Compliance",
        description: "Implementing zero-trust architecture with SOC2, GDPR, and HIPAA compliance frameworks.",
        icon: Shield,
        features: [
            "OAuth 2.0 & SAML",
            "End-to-end Encryption",
            "OWASP Top 10 Protection",
            "Security Audit Trails"
        ],
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        title: "DevOps Integration",
        description: "Establishing CI/CD pipelines with automated testing, monitoring, and deployment strategies.",
        icon: GitBranch,
        features: [
            "GitOps Workflow",
            "Blue-Green Deployments",
            "Automated Testing Suites",
            "Real-time Monitoring"
        ],
        gradient: "from-yellow-500 to-orange-500"
    }
];

// Technology ecosystem
const techEcosystem = {
    frontend: ["React 18", "Next.js 14", "Vue 3", "Angular 17", "Svelte", "Solid.js"],
    backend: ["Node.js", "Python", "Go", "Rust", "Java Spring", ".NET Core"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "DynamoDB", "Neo4j"],
    cloud: ["AWS", "Azure", "GCP", "Vercel", "Cloudflare", "DigitalOcean"],
    devops: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions"],
    monitoring: ["Datadog", "New Relic", "Grafana", "Prometheus", "ELK Stack", "Sentry"]
};

// Implementation methodology
const methodology = [
    {
        phase: "Discovery & Architecture",
        duration: "2-4 weeks",
        activities: [
            "Technical Requirements Analysis",
            "System Architecture Design",
            "Technology Stack Selection",
            "Risk Assessment & Mitigation"
        ],
        icon: Search
    },
    {
        phase: "Proof of Concept",
        duration: "3-6 weeks",
        activities: [
            "Core Feature Development",
            "Performance Benchmarking",
            "Security Testing",
            "Stakeholder Validation"
        ],
        icon: Package
    },
    {
        phase: "Agile Development",
        duration: "12-24 weeks",
        activities: [
            "Sprint Planning & Execution",
            "Continuous Integration",
            "Automated Testing",
            "Regular Deployments"
        ],
        icon: Workflow
    },
    {
        phase: "Deployment & Optimization",
        duration: "2-4 weeks",
        activities: [
            "Production Deployment",
            "Performance Tuning",
            "Load Testing",
            "Documentation"
        ],
        icon: Rocket
    },
    {
        phase: "Hypercare & Evolution",
        duration: "Ongoing",
        activities: [
            "24/7 Monitoring",
            "Incident Management",
            "Feature Enhancement",
            "Scaling Support"
        ],
        icon: Activity
    }
];

export default function WebDevelopmentPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero Section - Black with orange blobs */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-black">
                {/* Animated orange gradient blobs */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[150px] animate-pulse animation-delay-4000" />
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            {/* Enterprise badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8">
                                <Cpu className="w-4 h-4 text-orange-400" />
                                <span className="text-sm font-medium text-orange-400">
                                    Enterprise Digital Transformation
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                                Web Development
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                    Redefined
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                                Building enterprise-grade web platforms with microservices architecture,
                                cloud-native infrastructure, and AI-powered capabilities that scale to millions of users.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                {[
                                    { label: "Enterprise Clients", value: "50+", color: "text-orange-400" },
                                    { label: "APIs Deployed", value: "200+", color: "text-orange-400" },
                                    { label: "Uptime SLA", value: "99.99%", color: "text-orange-400" },
                                    { label: "Global Reach", value: "25 Countries", color: "text-orange-400" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                                >
                                    <span>Schedule Technical Consultation</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="#case-studies"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-orange-500/30 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all"
                                >
                                    <span>View Case Studies</span>
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image/Graphic */}
                        <div className="relative hidden lg:block">
                            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-orange-500/20">
                                {/* Replace placeholder with actual image */}
                                <Image
                                    src="/services/web-hero.png" // 🔥 put your image path here (public/services/web-hero.jpg)
                                    alt="Enterprise Web Development"
                                    fill
                                    className="object-cover rounded-2xl"
                                    priority
                                />

                                {/* Optional dark gradient overlay for readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-orange-500/30 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm text-gray-300">Systems Online</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-orange-500/30 p-4 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-orange-400" />
                                        <span className="text-sm text-gray-300">Real-time Monitoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities Section */}
            <section className="py-20 bg-gray-950 relative">
                {/* Subtle orange blob */}
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Core <span className="text-orange-500">Technical</span> Capabilities
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Leveraging cutting-edge technologies and architectural patterns to deliver
                            scalable, secure, and performant web solutions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${capability.gradient} rounded-xl flex items-center justify-center mb-6`}>
                                        <capability.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-white mb-3">
                                        {capability.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6">
                                        {capability.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {capability.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Showcase Section */}
            <section id="case-studies" className="py-20 bg-black relative">
                {/* Orange blob */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Enterprise <span className="text-orange-500">Implementations</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Transforming businesses across industries with innovative web solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clientShowcase.map((client, index) => (
                            <div
                                key={index}
                                className="group bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
                            >
                                {/* Image placeholder */}
                                {/* Image placeholder → replaced with actual image */}
                                <div className="relative h-48">
                                    <Image
                                        src={client.image} // <-- make sure each client has an `image` in clientShowcase
                                        alt={`${client.name} - ${client.sector}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index === 0} // only the first one gets priority for LCP
                                    />

                                    {/* Optional dark overlay for text contrast */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all" />

                                    {/* Sector badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-orange-500/80 text-white text-xs font-semibold rounded-full shadow-lg">
                                            {client.sector}
                                        </span>
                                    </div>
                                </div>


                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {client.name}
                                    </h3>

                                    <p className="text-gray-400 mb-4">
                                        {client.implementation}
                                    </p>

                                    <div className="flex items-center gap-2 mb-6">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                        <span className="text-green-400 font-semibold">
                                            {client.impact}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {client.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Ecosystem */}
            <section className="py-20 bg-gray-950 relative">
                {/* Orange blob */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Technology <span className="text-orange-500">Ecosystem</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Comprehensive tech stack covering every aspect of modern web development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {Object.entries(techEcosystem).map(([category, technologies]) => (
                            <div key={category} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                                <h3 className="text-lg font-semibold text-orange-400 mb-4 capitalize flex items-center gap-2">
                                    <Database className="w-5 h-5" />
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-800 hover:border-orange-500/30 transition-all"
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

            {/* Implementation Methodology */}
            <section className="py-20 bg-black relative">
                {/* Orange blobs */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Implementation <span className="text-orange-500">Methodology</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Agile-driven approach ensuring predictable delivery and continuous value creation
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-600" />

                            {methodology.map((phase, index) => (
                                <div key={index} className="relative mb-12 last:mb-0">
                                    <div className="flex items-start gap-8">
                                        {/* Timeline dot with icon */}
                                        <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                                            <phase.icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-2xl font-semibold text-white">
                                                    {phase.phase}
                                                </h3>
                                                <span className="text-sm font-medium text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                                                    {phase.duration}
                                                </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.activities.map((activity, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                                        <span className="text-gray-400 text-sm">
                                                            {activity}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Enterprise focused */}
            <section className="py-20 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
                {/* Animated orange blobs */}
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[120px] animate-pulse animation-delay-2000" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Transform Your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Digital Infrastructure?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Partner with us to build scalable, secure, and innovative web solutions
                            that drive business growth and operational excellence.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-0.5 transition-all"
                            >
                                <Terminal className="w-5 h-5" />
                                <span>Schedule Technical Discussion</span>
                            </Link>

                            <a
                                href="/resources/web-development-whitepaper"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-orange-500/30 hover:bg-orange-500/10 transition-all"
                            >
                                <Server className="w-5 h-5" />
                                <span>Download Technical Whitepaper</span>
                            </a>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500">
                            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                                <Shield className="w-5 h-5" />
                                <span>SOC2 Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                                <Award className="w-5 h-5" />
                                <span>ISO 27001 Certified</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                                <Lock className="w-5 h-5" />
                                <span>GDPR Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}