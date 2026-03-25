import React from 'react';
import heroImg from '../../assets/hero.png';



const Banner = () => {
  return (
    <div className="relative bg-[#f0f2f5] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blue right border accent */}
      <div className="absolute right-0 top-0 h-full w-2 bg-blue-500" />

      {/* Main content */}
      <div className="container mx-auto px-8 flex flex-col items-center text-center relative z-10">

        {/* Headline */}
        <h1 className="text-5xl font-extrabold text-[#1a1a2e] mb-2 leading-tight">
          We Build
        </h1>
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          <span className="text-purple-500">Productive</span>{' '}
          <span className="text-[#1a3a3a]">Apps</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 max-w-xl mb-8 text-base leading-relaxed">
          At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-md transition"
          >
            {/* Google Play Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 20.5v-17c0-.83 1-.83 1.5-.5l15 8.5-15 8.5c-.5.33-1.5.33-1.5-.5z" fill="#4285F4"/>
              <path d="M3 3.5L13.5 12 3 20.5V3.5z" fill="#34A853"/>
              <path d="M13.5 12L3 3.5l15-1.5L13.5 12z" fill="#FBBC05"/>
              <path d="M13.5 12l4.5 7.5-15-1.5L13.5 12z" fill="#EA4335"/>
            </svg>
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 bg-white text-gray-800 px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-md transition"
          >
            {/* Icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#007AFF">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            HERO.IO
          </a>
        </div>

        {/* Phone + Floating Icons Section */}
        <div className="relative flex items-center justify-center w-full max-w-2xl">

          {/* Left floating icons */}
          <div className="absolute left-0 flex flex-col gap-6 items-center" style={{ left: '0px' }}>
            {/* Timer icon */}
            <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>
            {/* Checkmark icon */}
            <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
            {/* Power icon */}
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/>
              </svg>
            </div>
          </div>

         
          <div className="relative z-10 mx-auto">
            <img
              src={heroImg}
              alt="App Preview"
              className="w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right floating icons */}
          <div className="absolute right-0 flex flex-col gap-6 items-center" style={{ right: '0px' }}>
            {/* Clock icon */}
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>
            {/* Trello icon */}
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M21 3H3C1.9 3 1 3.9 1 5v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-8h5v8zm9 0h-5V7h5v10z"/>
              </svg>
            </div>
            {/* Yen/Currency icon */}
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-9h2.5L12 6.5 8.5 11H11v1H8.5v1.5H11V16h2v-2.5h2.5V12H13v-1z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;