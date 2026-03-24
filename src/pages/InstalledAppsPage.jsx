import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext.jsx';
import AppCard from '../components/AppCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { Link } from 'react-router-dom';

const InstalledAppsPage = () => {
  const { installedApps } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a small loading delay for better UX
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Installed Apps</h1>
        <p className="text-gray-600">Manage and explore your installed applications</p>
      </div>

      {installedApps.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Apps Installed Yet</h2>
          <p className="text-gray-600 mb-4">Browse the App Store to find and install amazing apps!</p>
          <Link
            to="/apps"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Apps
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600">
              Total Installed: <span className="font-semibold">{installedApps.length}</span> apps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {installedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InstalledAppsPage;