import React from 'react';
import type { TeamMember } from '../types';

const teamData: TeamMember[] = [
  { name: 'John Bozorgi', title: 'Founder & Managing Partner', imageUrl: 'https://picsum.photos/400/400?random=20' },
  { name: 'Jane Doe', title: 'Partner, Investments', imageUrl: 'https://picsum.photos/400/400?random=21' },
  { name: 'Michael Smith', title: 'Partner, Operations', imageUrl: 'https://picsum.photos/400/400?random=22' },
  { name: 'Emily Chen', title: 'Principal', imageUrl: 'https://picsum.photos/400/400?random=23' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center group">
    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
      <img className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" src={member.imageUrl} alt={member.name} />
       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
    <h3 className="mt-6 text-lg font-medium text-white">{member.name}</h3>
    <p className="text-amber-400">{member.title}</p>
  </div>
);


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="lg:text-center space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Our Team</h2>
            <p className="text-xl text-gray-400">
              A dedicated group of professionals with a passion for building great companies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {teamData.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
