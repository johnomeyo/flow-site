'use client';

import Image from 'next/image';
import React from 'react';

type ScreenshotSection = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const screenshots: ScreenshotSection[] = [
  {
    id: 1,
    title: 'Investor Dashboard',
    description: 'A clean overview of startups, pitch requests, and direct messaging with founders.',
    imageUrl: '/screens/3.jpeg',
  },
  {
    id: 2,
    title: 'Entrepreneur Profile',
    description: 'Showcase your startup details and milestones to impress potential investors.',
    imageUrl: '/screens/2.jpeg',
  },
  {
    id: 3,
    title: 'Pitch Scheduling',
    description: 'Easily book a virtual pitch session with interested investors at your convenience.',
    imageUrl: '/screens/1.jpeg',
  },
];

export default function ScreenshotShowcase() {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        {screenshots.map((screen, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={screen.id}
              className={`flex flex-col-reverse md:flex-row ${
                isEven ? 'md:flex-row-reverse' : ''
              } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={screen.imageUrl}
                  alt={screen.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 text-gray-800">
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">{screen.title}</h2>
                <p className="text-lg text-gray-700">{screen.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
