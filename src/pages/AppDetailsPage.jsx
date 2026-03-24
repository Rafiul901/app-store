import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { appData } from '../data/appData.js';
import { useAppContext } from '../context/AppContext.jsx';
import ReviewChart from '../components/ReviewChart.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

const AppDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { installApp, uninstallApp, isAppInstalled } = useAppContext();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundApp = appData.find(app => app.id === parseInt(id));
      setApp(foundApp);
      if (foundApp) {
        setInstalled(isAppInstalled(foundApp.id));
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, isAppInstalled]);

  const handleInstall = () => {
    const success = installApp(app);
    if (success) {
      setInstalled(true);
      toast.success(`${app.title} has been installed successfully!`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleUninstall = () => {
    uninstallApp(app.id);
    setInstalled(false);
    toast.info(`${app.title} has been uninstalled.`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (!app) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">App Not Found</h2>
          <p className="text-gray-600 mb-4">The app you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/apps')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Apps
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="md:col-span-1">
            <img
              src={app.image}
              alt={app.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{app.title}</h1>
            <p className="text-gray-600 mb-4">{app.companyName}</p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="ml-1 text-xl font-semibold">{app.ratingAvg.toFixed(1)}</span>
              </div>
              <div className="text-gray-600">
                {app.reviews.toLocaleString()} reviews
              </div>
              <div className="text-gray-600">
                {app.downloads.toLocaleString()} downloads
              </div>
              <div className="text-gray-600">
                {app.size} MB
              </div>
            </div>
            
            {installed ? (
              <button
                onClick={handleUninstall}
                className="px-8 py-3 rounded-lg font-semibold transition bg-red-600 text-white hover:bg-red-700"
              >
                Uninstall
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="px-8 py-3 rounded-lg font-semibold transition bg-blue-600 text-white hover:bg-blue-700"
              >
                Install
              </button>
            )}
          </div>
        </div>
        
        <div className="p-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Rating Distribution</h2>
          <ReviewChart ratings={app.ratings} />
        </div>
        
        <div className="p-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;