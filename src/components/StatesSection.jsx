// components/StatesSection.jsx
import React from 'react';

const StatesSection = () => {
  const stats = [
    { value: '29.6M', label: 'Total Downloads', icon: '📱' },
    { value: '90K', label: 'Active Apps', icon: '🚀' },
    { value: '132+', label: 'Countries', icon: '🌍' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatesSection;