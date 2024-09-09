// components/HeroSection.tsx
import React from 'react';

export default function HeroSection () {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('../images/open-laptop.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Started Today Discover about CBC training and management
        </h1>
        <p className="text-lg mb-6">
          Sign Up to learn more and join the future of education.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-500 transition">
          START
        </button>
      </div>
    </div>
  );
}
