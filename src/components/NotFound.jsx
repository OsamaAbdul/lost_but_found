import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* 404 Section */}
      <div className="text-center max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10 transition-transform duration-300 hover:scale-105">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          <span className="text-blue-600">404</span> - Page Not Found
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-shadow duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;