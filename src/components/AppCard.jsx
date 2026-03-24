// components/AppCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{app.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-600">{app.ratingAvg.toFixed(1)}</span>
            </div>
            <div className="text-sm text-gray-500">
              {app.downloads.toLocaleString()} downloads
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;