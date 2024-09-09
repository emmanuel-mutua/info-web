// components/ServiceItem.tsx
import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode; // You can use an SVG or image for the icon
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center border border-yellow-400 rounded-md p-6 shadow-md hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceItem;
