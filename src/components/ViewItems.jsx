import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const ViewItems = () => {
  const { lostItems, foundItems } = useContext(ItemContext);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            View <span className="text-blue-600">Lost</span> and{' '}
            <span className="text-teal-600">Found</span> Items
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
            Browse reported items to find what's lost or reunite what's found.
          </p>
        </div>

        {/* Lost Items Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lost Items</h2>
          {lostItems.length === 0 ? (
            <p className="text-gray-500 text-center">No lost items reported yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {lostItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 hover:scale-105"
                >
                  {item.image && (
                    <img
                      src={URL.createObjectURL(item.image)}
                      alt={item.itemName}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{item.itemName}</h3>
                  <p className="text-sm text-gray-500">Category: {item.category}</p>
                  <p className="text-sm text-gray-500">Description: {item.description}</p>
                  <p className="text-sm text-gray-500">Location: {item.location}</p>
                  <p className="text-sm text-gray-500">Date Lost: {item.dateLost}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Found Items Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Found Items</h2>
          {foundItems.length === 0 ? (
            <p className="text-gray-500 text-center">No found items reported yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-xl p-6 transition-transform duration-300 hover:scale-105"
                >
                  {item.image && (
                    <img
                      src={URL.createObjectURL(item.image)}
                      alt={item.itemName}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900">{item.itemName}</h3>
                  <p className="text-sm text-gray-500">Category: {item.category}</p>
                  <p className="text-sm text-gray-500">Description: {item.description}</p>
                  <p className="text-sm text-gray-500">Location: {item.location}</p>
                  <p className="text-sm text-gray-500">Date Found: {item.dateFound}</p>
                  {item.phone && <p className="text-sm text-gray-500">Phone: {item.phone}</p>}
                  {item.email && <p className="text-sm text-gray-500">Email: {item.email}</p>}
                  {item.address && <p className="text-sm text-gray-500">Address: {item.address}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewItems;