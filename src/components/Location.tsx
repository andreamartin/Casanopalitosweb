import React from 'react';
import { MapPin, Compass, Wine, Waves, Coffee } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1000&q=80"
                alt="Ensenada Coastline"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -right-8 bg-white text-stone-900 p-8 rounded-2xl shadow-2xl hidden md:block max-w-xs">
              <MapPin className="text-stone-800 mb-4" size={32} />
              <h4 className="font-serif text-xl mb-2">El Sauzal</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                A charming coastal community just north of Ensenada, known for its surf breaks and craft breweries.
              </p>
            </div>
          </div>

          <div>
            <span className="text-stone-400 uppercase tracking-widest text-xs font-semibold mb-4 block">The Neighborhood</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Perfectly positioned in <br />
              <span className="italic text-stone-400">Baja California</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Wine size={20} className="text-stone-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Valle de Guadalupe</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Just a 20-minute drive to Mexico's premier wine country, featuring world-class wineries and farm-to-table dining.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Waves size={20} className="text-stone-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Coastal Living</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Enjoy the sound of the waves and easy access to local surf spots like San Miguel and Stacks.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Coffee size={20} className="text-stone-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">BREWma Craft Cafe</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    A local favorite in El Sauzal for specialty coffee, delicious breakfast, and a cozy atmosphere. 
                    <a 
                      href="https://www.google.com/maps/search/BREWma+Craft+Cafe+El+Sauzal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-300 hover:underline ml-1"
                    >
                      Visit them here.
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Compass size={20} className="text-stone-300" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Local Flavors</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Surrounded by Ensenada's best craft breweries (Agua Mala, Wendlandt) and incredible seafood.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <a 
                href="https://www.google.com/maps/place/El+Sauzal,+Baja+California,+Mexico/@31.8906687,-116.6912933,6126m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80d8ecb2e3a4efb3:0x557a7b995736151d!8m2!3d31.896313!4d-116.6996104!16s%2Fg%2F11c291py1_?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-stone-300 transition-colors font-medium"
              >
                Open in Google Maps
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
