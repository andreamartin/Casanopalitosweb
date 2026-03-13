import React from 'react';
import { motion } from 'motion/react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    title: 'Living Area',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    title: 'Ocean View Bedroom',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Kitchen',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    title: 'Oceanfront Terrace',
    size: 'medium'
  },
  {
    url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    title: 'Master Suite',
    size: 'medium'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-500 uppercase tracking-widest text-xs font-semibold mb-4 block">Visual Tour</span>
          <h2 className="text-4xl font-serif text-stone-900">Inside Casa Nopalitos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'medium' ? 'md:col-span-1 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-medium text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
