import React from 'react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import { 
  Database, Globe, Smartphone, BarChart, Search, 
  Megaphone, MessageSquare, Mail 
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              Icon={Database}
              title="Custom ERP Solutions"
              description="Tailored enterprise resource planning systems to streamline your business operations."
            />
            <ServiceCard
              Icon={Globe}
              title="Website Development"
              description="Professional websites that capture your brand's essence and drive results."
            />
            <ServiceCard
              Icon={Smartphone}
              title="App Development"
              description="Native and cross-platform mobile applications for modern businesses."
            />
            <ServiceCard
              Icon={Megaphone}
              title="Social Media Marketing"
              description="Strategic social media campaigns to boost your brand presence."
            />
            <ServiceCard
              Icon={BarChart}
              title="Data Analysis"
              description="Transform your data into actionable insights for better decision making."
            />
            <ServiceCard
              Icon={Search}
              title="SEO Optimization"
              description="Improve your search rankings and drive organic traffic to your website."
            />
            <ServiceCard
              Icon={MessageSquare}
              title="Digital Branding"
              description="Build a strong, consistent brand identity across all digital platforms."
            />
            <ServiceCard
              Icon={Mail}
              title="Digital Marketing"
              description="Comprehensive digital marketing strategies to reach your target audience."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About SocialFly Media</h2>
              <p className="text-gray-600 mb-4">
                We are a full-service digital agency passionate about helping businesses succeed in the digital age. Our team of experts combines creativity with technical expertise to deliver outstanding results.
              </p>
              <p className="text-gray-600">
                With years of experience across various industries, we understand what it takes to create impactful digital solutions that drive growth and success.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SocialFly Media</h3>
              <p className="text-gray-400">
                Fly High, Reach Sky.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: socialflymedia2024@gmail.com</p>
              <p className="text-gray-400">Phone: +91 8126040011</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/socialflymediaa/" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="https://www.linkedin.com/company/social-flymedia/" className="text-gray-400 hover:text-white">LinkedIn</a>
                
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SocialFly Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;