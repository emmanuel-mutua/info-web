import React from 'react';

export default function Footer () {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        
        {/* Get In Touch Section */}
        <div className="mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A3 3 0 016.75 3.75h10.5a3 3 0 013 3v10.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 11.25h7.5M8.25 8.25h7.5M8.25 14.25h7.5" />
            </svg>
            <p>+254 792 804 646</p>
          </div>
          <div className="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A3 3 0 016.75 3.75h10.5a3 3 0 013 3v10.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V6.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 11.25h7.5M8.25 8.25h7.5M8.25 14.25h7.5" />
            </svg>
            <p>ujuzi@gmail.com</p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-6 sm:mb-0">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p>Mission</p>
          <p>Vision</p>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Location</h2>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.375a8.625 8.625 0 01-17.25 0 8.625 8.625 0 0117.25 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.375a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>Karen Hardy, 616 Korongo Road</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
