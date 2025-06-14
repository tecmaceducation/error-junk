import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold">Tecmac Education</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading EdTech institute offering certified and career-focused programs in programming, multimedia, and finance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">Courses</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Full Stack Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Python Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tally ERP</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Sow-Ma complex, 243, 1st Floor, Sathy Rd, main signal, near cross cut, Gandhipuram, Coimbatore, Tamil Nadu 641012
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+919994779308" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 9994779308
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:tecmaceducation@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  tecmaceducation@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tecmac Education. All rights reserved. ISO 9001:2015 & MSME Certified.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
