// components/Team.tsx
import React from 'react';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: 'Mwanasha Omari',
    imageUrl: '/images/trecy.jpg',
  },
  {
    name: 'Caren Chepngetich',
    imageUrl: '/images/trecy.jpg',
  },
  {
    name: 'Esther Naserian',
    imageUrl: '/images/trecy.jpg',
  },
  {
    name: 'Trecy Malonza',
    imageUrl: '/images/trecy.jpg',
  },
  {
    name: 'Glory Kuria',
    imageUrl: '/images/trecy.jpg',
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 lg:px-24">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} imageUrl={member.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Team;
