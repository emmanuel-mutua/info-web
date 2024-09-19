// components/ServiceItem.tsx
import React from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode; // You can use an SVG or image for the icon
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col border border-yellow-400 rounded-md p-6 shadow-md hover:shadow-lg transition">
      {/* Icon and Title in a single row */}
      <div className="flex items-center mb-4">
        {/* Outlined icon */}
        <div className="p-2 border border-gray-400 rounded-md mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceItem;

