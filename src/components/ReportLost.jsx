import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

const ReportLost = () => {
  const navigate = useNavigate();
  const { addLostItem } = useContext(ItemContext);
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    location: '',
    dateLost: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLostItem(formData);
    alert('Lost item reported successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10 transition-transform duration-300 hover:scale-105">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Report a <span className="text-blue-600">Lost</span> Item
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
          Fill out the details below to help us find your lost item.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Item Name */}
            <div>
              <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                id="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="e.g., Blue Backpack"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Documents">Documents</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Describe the item (color, size, brand, etc.)"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location Lost */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location Lost
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="e.g., Central Park, NYC"
              />
            </div>

            {/* Date Lost */}
            <div>
              <label htmlFor="dateLost" className="block text-sm font-medium text-gray-700">
                Date Lost
              </label>
              <input
                type="date"
                name="dateLost"
                id="dateLost"
                value={formData.dateLost}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-700 file:font-medium hover:file:bg-blue-100"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-shadow duration-300"
            >
              Submit Lost Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportLost;