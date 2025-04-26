
import { Laptop, Smartphone, Notebook as Robot, Database, Search, Code, LineChart, TrendingUp, MessageSquare, Workflow } from "lucide-react";

export type ServiceType = {
  title: string;
  description: string;
  icon: any;
};

export const services: ServiceType[] = [
  {
    title: "Website Development",
    description: "Responsive, fast, and scalable websites tailored for your business.",
    icon: Laptop,
  },
  {
    title: "Mobile App Development",
    description: "Custom Android and iOS apps to bring your ideas to users' hands.",
    icon: Smartphone,
  },
  {
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks with intelligent workflows.",
    icon: Robot,
  },
  {
    title: "Web Scraping Solutions",
    description: "Extract valuable data from the web efficiently and reliably.",
    icon: Database,
  },
  {
    title: "SEO & Performance Optimization",
    description: "Boost visibility, speed, and rankings across search engines.",
    icon: Search,
  },
  {
    title: "Custom SaaS Development",
    description: "Tailored SaaS platforms built for your business needs.",
    icon: Code,
  },
 
  {
    title: "Predictive Analytics",
    description: "Forecast trends and optimize strategies with AI insights.",
    icon: TrendingUp,
  },
  {
    title: "AI Chatbot Integration",
    description: "Enhance customer support with smart, conversational bots.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation Tools",
    description: "Streamline operations and improve efficiency with custom tools.",
    icon: Workflow,
  },
];

export type TestimonialType = {
  content: string;
  author: string;
  position: string;
  initials: string;
};

export const testimonials: TestimonialType[] = [
  {
    content: "They helped me to develop Instant EduDoc - an AI note taking website. SocialFlyMedia individuals were exceptional in the development of our project website. They welcomed feedback and made improvements accordingly. Great work!",
    author: "Shivam Maurya",
    position: "CEO, Programming With Maurya",
    initials: "SM",
  },
  {
    content: "We worked together to build the app syncUwell (a student engagement and wellness platform). The platform made was to help students manage their daily academics while not missing out on their extra-curriculars and other activities. It was amazing, the work used to be done on time. I couldn't actually believe someone could make an app so quickly.",
    author: "Shreya Srinivasan",
    position: "Co-Founder, syncUwell",
    initials: "SS",
  },
  {
    content: "SocialFly Media played a key role in getting our dairy business off the ground — from setup and launch to marketing and supply chain. His support made a real difference.",
    author: "Maanik Chaudhary",
    position: "CEO, Advika Dairy Farms",
    initials: "MC",
  },
];

export type ProductType = {
  name: string;
  description: string;
  image: string;
};

export const products: ProductType[] = [
  {
    name: "EduFly",
    description: "An all-in-one School ERP solution designed to transform the way educational institutions operate. From seamless student enrollment to efficient staff management, brings every aspect of school administration under one unified platform, streamlining processes like never before.",
    image: "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];