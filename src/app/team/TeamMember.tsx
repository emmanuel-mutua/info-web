// components/TeamMember.tsx
import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={name}
          width={128}
          height={128}
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-medium text-gray-600">{name}</h3>
    </div>
  );
};

export default TeamMember;
