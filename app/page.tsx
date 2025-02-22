"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, ArrowUpCircle, Rocket, Palette, ChartBar, Regex, MenuIcon, BrainCircuit, Globe, Smartphone, BadgeCheck, ChartPie, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { rules } from "@/constants/rules";
import toast, { Toaster } from "react-hot-toast"

interface payloadData {
  name: string;
  email: string;
  msg: string;
};

interface ruleType {
  regex: RegExp;
  errorMessage: string;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<payloadData>({
    name: "",
    email: "",
    msg: "",
  });

  const sendMessage = async () => {
    setData({
      name: "",
      email: "",
      msg: "",
    })
  }


  const validation = (e: any) => {
    e.preventDefault();
    let isValid: boolean = true;
    if (data.name === "" || data.email === "" || data.msg === "") {
      toast.error("Please enter every field");
      return;
    }
    const values: string[] = [data.name, data.email, data.msg];
    const validateRules: ruleType[] = rules();
    validateRules.map((rule: ruleType, id) => {
      if (!RegExp(rule.regex).test(values[id])) {
        toast.error(rule.errorMessage);
        isValid = false;
        return;
      }
    })
    if (isValid) toast.promise(
      sendMessage(),
      {
        loading: 'Sending...',
        success: <b>Message Sent!</b>,
        error: <b>Could not sent.</b>,
      }
    );;
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Toaster />
      {/* Navbar */}
      <nav className="fixed w-screen bg-gray-300/60 border-gray-300/60 dark:bg-gray-900/10 backdrop-blur-lg z-50 border-b dark:border-gray-800/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between px-3 h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <img src="./SocialFlyClipped.png" className="h-14 rounded-lg dark:bg-transparent bg-black/80 p-2 px-4" alt="" />

            </motion.div>

            <div className="min-[768px]:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon size={35} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`absolute left-0 top-[65px] w-full p-4 shadow-lg rounded-lg 
          backdrop-blur-lg bg-white/100 dark:bg-gray-900/100 border border-white/20 dark:border-gray-800/20 
          ${isOpen ? "block" : "hidden"}`}
            >
              <ul className="flex flex-col items-center  space-y-4 text-lg font-semibold">
                {["home", "services", "about", "products", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { scrollToSection(section); setIsOpen(false); }}
                    className="nav-link text-gray-900 w-full dark:text-white hover:text-blue-500 transition-all"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <hr className="w-full border-1 mt-2 border-gray-200 dark:border-gray-800" />
                  </motion.button>
                ))}

              </ul>
            </motion.div>


            <div className="flex items-center space-x-8 max-[768px]:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("home")}
                className="nav-link"
              >
                Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("services")}
                className="nav-link"
              >
                Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                About
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("products")}
                className="nav-link"
              >
                Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contact
              </motion.button>


            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 px-4 rounded-full flex items-center bg-gray-800/10 backdrop-blur-lg hover:bg-white/20 dark:hover:bg-gray-800/20"
            >
              {darkMode ? (
                <Sun className="h-7 w-7 text-yellow-500" />
              ) : (
                <Moon className="h-7 w-7 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800"
      >
        <div className="w-fit mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:w-[500px] max-[520px]:w-[90%] max-[520px]:m-auto items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 right-20 w-40 h-40 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative max-[450px]:px-3 px-10">
                <h1 className="text-5xl max-[520px]:text-4xl max-[520px]:text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-2 mb-6">
                  Transforming Business Challenges into Digital Success
                </h1>
                <p className="text-lg text-justify w-full text-gray-600 max-[520px]:text-justify max-[520px]:text-lg dark:text-gray-300 mb-8 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-lg">
                  At SocialFly Media, we simplify your business operations through smart automation and streamlined solutions. From enhancing productivity to boosting your online presence, we provide end-to-end digital strategies that reduce daily hassles and accelerate growth. Let's transform your business for the digital age.

                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r  from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30 transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center items-center"
            >
              <img
                src="./landingPage.png"
                alt="Social Media Marketing"
                className="rounded-lg col-span-2 h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive social media solutions for your business
            </p>
          </motion.div>
          <div className="flex justify-evenly items-center flex-wrap ">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="backdrop-blur-lg w-[350px] h-[250px] my-4 bg-white/30 dark:bg-gray-800/30 p-8 rounded-xl border border-white/20 cursor-pointer dark:border-gray-700/20 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                className="rounded-lg shadow-2xl h-[300px] w-full object-cover col-span-2"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team"
                className="rounded-lg cursor-pointer shadow-2xl hover:scale-105 transition-transform"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Office"
                className="rounded-lg cursor-pointer shadow-2xl hover:scale-105 transition-transform"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 p-8 rounded-xl border border-white/20 dark:border-gray-700/20"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                About Us
              </h2>
              <p className="text-md max-[450px]:text-justify text-sm text-gray-600 dark:text-gray-300 mb-6">
                At SocialFly Media, we empower businesses to achieve more by streamlining their processes, automating routine tasks, and elevating their digital presence. We recognize the complexities of managing day-to-day operations while striving for growth. That’s why we deliver comprehensive solutions designed to optimize workflows, minimize operational burdens, and accelerate business success.
                From crafting dynamic websites and innovative web applications to strategically managing your social media presence, we create customized digital strategies that engage your target audience effectively. Our mission is to equip you with the tools and insights needed to thrive in today’s competitive digital landscape, enabling you to lead with agility and innovation.

              </p>
              <p className="font-bold max-[450px]:text-sm text-lg">Partner with us to transform your business operations and expand your digital footprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-12">
            Our Products
          </h2>
          <div className="flex justify-evenly items-center">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col justify-evenly items-center">
                <motion.div

                  className="relative w-[500px] max-[550px]:w-[90%] max-[550px]:h-[200px] h-[350px] cursor-pointer rounded-lg overflow-hidden shadow-lg group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm px-4">{product.description}</p>
                  </motion.div>
                </motion.div>
                <p className="w-[90%] max-[550px]:text-sm mt-8 text-justify text-md"><strong className="text-[#544EEA] text-xl max-[550px]:text-sm">EduFly</strong> is an all-in-one <strong className="text-[#544EEA] text-xl max-[550px]:text-sm">School ERP solution</strong> designed to transform the way educational institutions operate. From seamless student enrollment to efficient staff management,  brings every aspect of school administration under one unified platform, streamlining processes like never before.
                  Built with intuitive interfaces and powerful functionalities, EduFly bridges the communication gap between teachers, students, and parents, fostering a collaborative and transparent educational ecosystem. With exciting and interactive activities crafted especially for kids, EduFly makes learning not just effective but fun too!
                  Say goodbye to manual tasks and complex workflows—EduFly automates administrative processes, tracks student performance, and manages extracurricular programs effortlessly. This allows schools to focus on their core mission: providing exceptional education.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get in touch with us to discuss your digital needs
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="backdrop-blur-lg bg-[#2763EB] bg-opacity-5 dark:bg-gray-800/30 p-8 rounded-xl border border-white/20 dark:border-gray-700/20 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 dark:border-gray-700/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 dark:border-gray-700/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 dark:border-gray-700/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data.msg}
                  onChange={e => setData({ ...data, msg: e.target.value })}
                ></textarea>
                <span className="text-gray-400 text-xs float-right">Maximum of 250 words</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30 transition-all"
                onClick={validation}
              >
                Send Message
              </motion.button>
            </motion.form>

          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-purple-500/30 transition-all"
          >
            <ArrowUpCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
            <div>
              <h3 className="text-xl font-bold ">Social Fly Media</h3>
              <p className="text-gray-400 mt-2">
                Elevate your social media presence with our expert strategies and creative content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-400 flex items-center hover:text-white"> <Mail size={20} className="mr-3" /> Email: socialflymedia2024@gmail.com</li>
                <li className="text-gray-400 flex items-center hover:text-white"> <Phone size={20} className="mr-3" /> Phone: +91 8126040011, +91 8171254458</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/company/social-flymedia/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 flex justify-evenly items-center hover:text-white">
                  <Linkedin size={20} className="mr-2" />Linkedin
                </a>

                <a href="https://www.instagram.com/socialflymediaa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 flex justify-evenly items-center hover:text-white">
                  <Instagram size={20} className="mr-2" />Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} Social Fly Media. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

const services = [
  {
    title: "Custom ERP Solutions",
    description: "Tailored enterprise resource planning systems to streamline your business operations.",
    icon: <Rocket className="h-8 w-8" />,
  },
  {
    title: "Website Development",
    description: "Professional websites that capture your brand's essence and drive results.",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for modern businesses.",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "Social Media Marketing",
    description: "We grow brands online with engaging content, targeted ads, and data-driven strategies.",
    icon: <BadgeCheck className="h-8 w-8" />,
  },
  {
    title: "Automation",
    description: "Streamlining tasks with AI and smart tools to boost efficiency, save time, and enhance productivity.",
    icon: <BrainCircuit className="h-8 w-8" />,
  },
  {
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic to your website.",
    icon: <ChartBar className="h-8 w-8" />,
  },
  {
    title: "Business Intelligence Service",
    description: "We analyze data to identify trends and insights, enabling smarter decisions and business growth.",
    icon: <ChartPie className="h-8 w-8" />,
  },
];

const products = [
  {
    id: 1,
    title: "EduFly",
    description: "A smart school ERP by our company, streamlining administration, attendance, communication, and academic management for seamless efficiency.",
    image: "./landing_page.png",
  },
];
