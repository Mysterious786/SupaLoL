import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Roadmap', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'For Developers', href: '#' },
        { name: 'For Teams', href: '#' },
        { name: 'For Agencies', href: '#' },
        { name: 'For Enterprise', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Support', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust Supaimg for their image hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 hover:bg-gray-100 font-semibold flex items-center justify-center">
              Start for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-blue-600 font-semibold">
              Contact sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/logo copy.png" alt="Supaimg" className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Supaimg</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The simplest way to upload, share, and manage images. 
                Built for developers, loved by everyone.
              </p>
              <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 p-6 border border-gray-600">
                <div className="flex items-center space-x-4 ripehash-container">
                  <div className="relative">
                    <img src="/Group 2201.png" alt="Ripe Hash" className="h-12 w-auto ripehash-logo" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">A Ripe Hash Product</p>
                    <p className="text-gray-300 text-sm">Building the future of digital solutions</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-600"></div>
                <a 
                  href="https://www.ripehash.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                  aria-label="Visit Ripe Hash website"
                ></a>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Supaimg. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;