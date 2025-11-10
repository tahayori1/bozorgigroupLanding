import React from 'react';
import type { FamilyMember } from '../types';
import { useLanguage } from '../context/LanguageContext';

const familyData: FamilyMember[] = [
  { generation: 5, nameKey: 'family.gen5.name', titleKey: 'family.gen5.title', imageUrl: 'https://bozorgigroup.com/img/bozorg%20bozorgi.gif', descriptionKey: 'family.gen5.description' },
  { generation: 4, nameKey: 'family.gen4.name', titleKey: 'family.gen4.title', imageUrl: 'https://bozorgigroup.com/img/Asghar%20Bozorgi.jpg', descriptionKey: 'family.gen4.description' },
  { generation: 3, nameKey: 'family.gen3.name', titleKey: 'family.gen3.title', imageUrl: 'https://bozorgigroup.com/img/MuhammadAli%20Bozorgi.jpeg', descriptionKey: 'family.gen3.description' },
  { generation: 2, nameKey: 'family.gen2.name', titleKey: 'family.gen2.title', imageUrl: 'https://bozorgigroup.com/img/ali%20bozorgi.jpg', descriptionKey: 'family.gen2.description' },
  { generation: 1, nameKey: 'family.gen1.name', titleKey: 'family.gen1.title', imageUrl: 'https://bozorgigroup.com/img/ali%20asghar%20bozorgi.jpeg', descriptionKey: 'family.gen1.description' },
];

const HistoryCard: React.FC<{ member: FamilyMember, isRightAligned: boolean }> = ({ member, isRightAligned }) => {
    const { t } = useLanguage();
    return (
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg border border-gray-800 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className={`flex items-start gap-4 ${isRightAligned ? 'md:flex-row-reverse md:text-right' : 'md:flex-row text-left'}`}>
                <img src={member.imageUrl} alt={t[member.nameKey]} className="w-20 h-20 rounded-full object-cover border-2 border-gray-700 flex-shrink-0" />
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{t[member.nameKey]}</h3>
                    <p className="text-sm text-amber-400">{t[member.titleKey]}</p>
                    <p className="mt-2 text-sm text-gray-400">{t[member.descriptionKey]}</p>
                </div>
            </div>
        </div>
    );
}

const History: React.FC = () => {
  const { t, locale } = useLanguage();
  return (
    <section id="history" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 mb-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{t['history.title']}</h2>
          <p className="text-xl text-gray-400">
            {t['history.subtitle']}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 h-full w-0.5 bg-gray-700 start-5 md:start-1/2 md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {familyData.map((member, index) => {
              const isEven = index % 2 === 0;
              // LTR: even is left, odd is right. RTL: even is right, odd is left.
              const isRightAligned = locale === 'ar' ? isEven : !isEven;

              return (
                <div key={member.nameKey} className="relative md:grid md:grid-cols-2 md:gap-x-16 md:items-center">
                  {/* Circle marker */}
                  <div className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold text-lg shadow-amber-400/20 shadow-lg start-5 -translate-x-1/2 md:start-1/2">
                    {member.generation}
                  </div>

                  {/* Card */}
                  <div className={`ps-16 md:ps-0 ${isRightAligned ? 'md:col-start-2' : ''}`}>
                     <HistoryCard member={member} isRightAligned={isRightAligned} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;