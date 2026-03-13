import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, Home, MapPin, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl tracking-tight text-stone-800">Casa Nopalitos</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-stone-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://www.airbnb.co.za/rooms/36112909"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-stone-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-stone-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.airbnb.co.za/rooms/36112909"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-stone-800 text-white px-6 py-3 rounded-full text-base font-medium mt-4"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
