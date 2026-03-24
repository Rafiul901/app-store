// components/TopAppsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data/appData';
import AppCard from './AppCard';

const TopAppsSection = () => {
  const topApps = appData.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Apps</h2>
        <Link
          to="/apps"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Show All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default TopAppsSection;