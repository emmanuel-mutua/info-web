// components/Navbar.tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-50 text-white py-4 px-6 w-full flex justify-center items-center">
      <div className="flex gap-8">
        <a href="#" className="text-yellow-400 font-bold hover:text-yellow-300">
          Home
        </a>
        <a href="#" className="hover:text-yellow-300">Our Services</a>
        <a href="#" className="hover:text-yellow-300">Our Team</a>
        <a href="#" className="hover:text-yellow-300">Contact</a>
      </div>
    </nav>
  );
}
