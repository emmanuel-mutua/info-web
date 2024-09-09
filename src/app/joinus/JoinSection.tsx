// components/JoinSection.tsx
import React from 'react';
import Image from 'next/image';

const JoinSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-24 bg-white">
      {/* Text Section */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">
          Join us in making CBC more easier
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/images/join-us-image.jpg" // Make sure this image is in your public/images folder
          alt="Join us"
          width={400}
          height={250}
          className="rounded"
        />
      </div>
    </section>
  );
};

export default JoinSection;
