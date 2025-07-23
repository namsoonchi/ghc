import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Personal Care',
    'Companionship',
    'Meal Preparation',
    'Light Housekeeping',
    'Medication Reminders',
    'Health Monitoring'
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1C4E80] via-[#1C4E80] to-[#00796B] text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7CB342]/25 to-[#33691E]/15 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00ACC1]/25 to-[#00796B]/20 rounded-full translate-y-32 -translate-x-32"></div>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-br from-[#7CB342]/10 to-[#00ACC1]/10 rounded-full"></div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#7CB342] rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CareConnect</h3>
                  <p className="text-xs text-[#7CB342] font-medium">HOME HEALTH AIDE</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Providing compassionate, professional home health aide services to help you maintain independence and dignity in the comfort of your own home.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#F3F3F3]/20 to-[#00ACC1]/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#7CB342] hover:to-[#33691E] transition-all duration-300 border border-[#00ACC1]/30">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#F3F3F3]/20 to-[#00ACC1]/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#7CB342] hover:to-[#33691E] transition-all duration-300 border border-[#00ACC1]/30">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#F3F3F3]/20 to-[#00ACC1]/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#7CB342] hover:to-[#33691E] transition-all duration-300 border border-[#00ACC1]/30">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#F3F3F3]/20 to-[#00ACC1]/20 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#7CB342] hover:to-[#33691E] transition-all duration-300 border border-[#00ACC1]/30">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-[#7CB342] transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-white/80 hover:text-[#7CB342] transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#7CB342] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">(555) 123-4567</p>
                    <p className="text-white/60 text-sm">24/7 Emergency Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#7CB342] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">info@careconnect.com</p>
                    <p className="text-white/60 text-sm">Response within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#7CB342] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">123 Care Street</p>
                    <p className="text-white/60 text-sm">City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gradient-to-r from-[#00ACC1]/30 via-[#7CB342]/20 to-[#00ACC1]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © 2024 CareConnect Home Health Aide Services. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-[#7CB342] transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-[#7CB342] transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-[#7CB342] transition-colors duration-300">HIPAA Notice</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;