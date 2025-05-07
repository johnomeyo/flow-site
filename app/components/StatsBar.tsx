// src/components/StatsBar.tsx
import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '200+', label: 'Investments Facilitated' }, // Adapted text
  { value: '150+', label: 'Startups Funded' },       // Adapted text
  { value: '50+', label: 'Partnerships Formed' },    // Adapted text
];

const StatsBar: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-around items-center border border-gray-300 rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
            {/* Add a divider between items on larger screens */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            )}
             {/* Add a divider below item on smaller screens */}
            {index < stats.length - 1 && (
              <div className="block md:hidden w-24 h-px bg-gray-300 mx-auto"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;