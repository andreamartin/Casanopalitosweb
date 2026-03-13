import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-50 pt-24 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-3xl tracking-tight text-stone-800 block mb-6">Casa Nopalitos</span>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-8">
              A curated coastal retreat in the heart of El Sauzal, Ensenada. Experience the best of Baja's ocean views and wine country proximity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-800 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-800 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-stone-900 mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-stone-500 text-sm">
                <Mail size={16} />
                <a href="mailto:reservations@casanopalitos.com" className="hover:text-stone-900 transition-colors">
                  reservations@casanopalitos.com
                </a>
              </li>
              <li className="mt-8">
                <a 
                  href="https://www.airbnb.co.za/rooms/36112909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
                >
                  Book on Airbnb
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-stone-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">Home</a></li>
              <li><a href="#amenities" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">Amenities</a></li>
              <li><a href="#gallery" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">Gallery</a></li>
              <li><a href="#location" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">Location</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs">
            © {new Date().getFullYear()} Casa Nopalitos. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 hover:text-stone-600 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 hover:text-stone-600 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
