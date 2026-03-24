import React, { useState, useEffect } from 'react';
import { appData } from '../data/appData.js';
import AppCard from '../components/AppCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const AllAppsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState(appData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = appData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">All Apps</h1>
        <p className="text-gray-600">Discover amazing apps for your needs</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-gray-600">
          Total Apps: <span className="font-semibold">{filteredApps.length}</span>
        </div>
        <div className="w-full md:w-96">
          <input
            type="text"
            placeholder="Search apps by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No App Found</p>
          <p className="text-gray-400 mt-2">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;