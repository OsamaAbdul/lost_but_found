import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

const ReportFound = () => {
  const navigate = useNavigate();
  const { addFoundItem } = useContext(ItemContext);
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    description: '',
    location: '',
    dateFound: '',
    phone: '',
    email: '',
    address: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name: fieldName, value, files } = e.target; // Renamed 'name' to 'fieldName' to avoid global conflict
    setFormData((prev) => ({
      ...prev,
      [fieldName]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoundItem(formData);
    alert('Found item reported successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-10 transition-transform duration-300 hover:scale-105">
        {/* Decorative Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Report a <span className="text-teal-600">Found</span> Item
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-md mx-auto">
          Provide details about the item you found to help reunite it with its owner.
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="e.g., Silver Watch"
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              placeholder="Describe the item (color, size, brand, etc.)"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Location Found */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location Found
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="e.g., Main Street Cafe"
              />
            </div>

            {/* Date Found */}
            <div>
              <label htmlFor="dateFound" className="block text-sm font-medium text-gray-700">
                Date Found
              </label>
              <input
                type="date"
                name="dateFound"
                id="dateFound"
                value={formData.dateFound}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="e.g., (123) 456-7890"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                placeholder="e.g., user@example.com"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address (Optional)
            </label>
            <textarea
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              placeholder="e.g., 123 Main St, City, State"
            ></textarea>
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
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-teal-50 file:text-teal-700 file:font-medium hover:file:bg-teal-100"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-md shadow hover:bg-teal-700 transition-shadow duration-300"
            >
              Submit Found Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportFound;