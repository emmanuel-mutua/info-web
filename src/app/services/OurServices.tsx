// components/OurServices.tsx
import React from 'react';
import ServiceItem from './ServiceItem';
import { ChartBarIcon } from '@heroicons/react/16/solid';
const OurServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 lg:px-24">
        <ServiceItem
          title="GET VALID RESOURCES"
          description="Teachers get available resources on valid platforms."
          icon={<ChartBarIcon className="w-12 h-12 text-yellow-400" />}
        />
        <ServiceItem
          title="PROFESSIONAL DEVELOPMENT"
          description="With a focus on professional growth and talent development, we empower users to expand their competencies."
          icon={<ChartBarIcon className="w-12 h-12 text-yellow-400" />}
        />
        <ServiceItem
          title="EASY ALLOCATION OF TEACHERS"
          description="KICD gets to easily allocate teachers to trainers per region, making it easy to manage the division of teachers."
          icon={<ChartBarIcon className="w-12 h-12 text-yellow-400" />}
        />
        <ServiceItem
          title="USER FRIENDLY INTERFACE"
          description="Optimized design for various devices and internet connectivity levels."
          icon={<ChartBarIcon className="w-12 h-12 text-yellow-400" />}
        />
      </div>
    </section>
  );
};

export default OurServices;
