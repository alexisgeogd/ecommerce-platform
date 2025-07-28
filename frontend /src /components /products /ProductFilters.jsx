import { useState } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';

export default function ProductFilters({ 
  categories, 
  onFilterChange 
}) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onFilterChange({
      categories: newCategories,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium flex items-center">
          <FunnelIcon className="h-5 w-5 mr-2 text-gray-500" />
          Filters
        </h3>
        <button 
          onClick={() => {
            setSelectedCategories([]);
            setPriceRange([0, 1000]);
            onFilterChange({
              categories: [],
              minPrice: 0,
              maxPrice: 1000
            });
          }}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Price Range</h4>
        <div className="flex items-center justify-between mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => {
            const newRange = [priceRange[0], parseInt(e.target.value)];
            setPriceRange(newRange);
            onFilterChange({
              categories: selectedCategories,
              minPrice: newRange[0],
              maxPrice: newRange[1]
            });
          }}
          className="w-full"
        />
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryToggle(category)}
                className="mr-2 rounded text-blue-600"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
