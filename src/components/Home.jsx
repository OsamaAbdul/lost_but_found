import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10 transition-transform duration-300 hover:scale-105">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Lost Something? <span className="text-blue-600">Find It.</span>
          <br />
          Found Something? <span className="text-teal-600">Return It.</span>
        </h1>
        
        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
          Connect lost items with their owners effortlessly. Your platform for recovery and reunion.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => navigate('/report-lost')}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-shadow duration-300"
          >
            Report a Lost Item
          </button>
          <button
            onClick={() => navigate('/report-found')}
            className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-md shadow hover:bg-teal-700 transition-shadow duration-300"
          >
            Report a Found Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;