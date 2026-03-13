/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
