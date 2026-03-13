import React from 'react';
import { motion } from 'motion/react';
import { Waves, Wifi, Car, Utensils, Coffee, Shield, Users, Bed, Bath } from 'lucide-react';

const amenities = [
  { icon: Waves, name: 'Ocean View', description: 'Stunning Pacific views from multiple rooms.' },
  { icon: Users, name: '8 Guests', description: 'Spacious enough for families and groups.' },
  { icon: Bed, name: '4 Bedrooms', description: 'Comfortable sleeping arrangements for everyone.' },
  { icon: Bath, name: '3.5 Baths', description: 'Modern bathrooms with all essentials.' },
  { icon: Wifi, name: 'High-speed WiFi', description: 'Stay connected while you relax.' },
  { icon: Car, name: 'Free Parking', description: 'Secure on-site parking for your vehicles.' },
  { icon: Utensils, name: 'Full Kitchen', description: 'Equipped with everything for home cooking.' },
  { icon: Coffee, name: 'Coffee Maker', description: 'Start your mornings with a fresh brew.' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-stone-500 uppercase tracking-widest text-xs font-semibold mb-4 block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              Everything you need for a <span className="italic text-stone-600">perfect stay</span>.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              Casa Nopalitos is designed to be your home away from home. Whether you're here for a weekend getaway or a long-term retreat, we've curated every detail to ensure comfort, convenience, and inspiration. We offer flexible options for both short-term vacations and extended stays.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-stone-200 pl-6">
                <span className="block text-3xl font-serif text-stone-900 mb-1">4.82</span>
                <span className="text-stone-500 text-sm uppercase tracking-wider">Airbnb Rating</span>
              </div>
              <div className="border-l-2 border-stone-200 pl-6">
                <span className="block text-3xl font-serif text-stone-900 mb-1">67+</span>
                <span className="text-stone-500 text-sm uppercase tracking-wider">Happy Guests</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {amenities.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="text-stone-800 mb-4" size={24} />
                <h3 className="text-stone-900 font-medium mb-2">{item.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
