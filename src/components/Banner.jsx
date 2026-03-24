// components/Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">We Build Productive Apps</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Discover the best productivity apps that will transform your workflow and boost your efficiency.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Play Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;