import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-400 pt-16 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-24 gap-y-12 mb-24">
          {/* Logo, Description and Social Links - Takes 2 columns */}
          <div className="lg:col-span-4">
          <img src='AgroPlus.png' className="w-60"/>
            <div className="text-sm mb-3">a <span className="text-[#FFE81A]">Yarl</span>global company</div>
            <p className="text-sm text-gray-400/80 max-w-md mb-8">
              Roar Media is a top-tier content production studio for the platform age.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/" className="bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/" className="bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/" className="bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/" className="bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/solution" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors">
                Content Archive
                <svg className="ml-1 w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.07102 1.99999L9.07102 1.99999L9.07102 8.99999" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9.07102 1.99999L1.07102 10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-medium mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="/solution#viral" className="hover:text-white transition-colors">Viral Exec</a></li>
              <li><a href="/solution#viral-commerce" className="hover:text-white transition-colors">Viral Commerce</a></li>
              <li><a href="/solution#viral-content" className="hover:text-white transition-colors">Viral Content</a></li>
             {/*<li><a href="#" className="hover:text-white transition-colors">Short Form Videos</a></li>*/}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-800/40 py-3">
  <div className="text-gray-400/60 text-sm">© 2025 Roar Media. All rights reserved</div>
  <div className="flex space-x-6">
    <a href="#" className="text-gray-400/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
    <a href="#" className="text-gray-400/60 hover:text-white transition-colors text-sm">Cookie Policy</a>
  </div>
</div>
</div>
    </footer>
  );
};

export default Footer;