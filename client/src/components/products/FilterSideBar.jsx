import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(""); // Track selected color
  const [price, setPrice] = useState(0); // Track price
  const [priceRange, setPriceRange] = useState([]); 
  const [debouncedPrice, setDebouncedPrice] = useState();

  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    priceRange: {
      min: 0,
      max: 100,
    },
  });

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#008000" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Purple", hex: "#800080" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Gray", hex: "#808080" },
    { name: "Brown", hex: "#A52A2A" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Lime", hex: "#00FF00" },
    { name: "Teal", hex: "#008080" },
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Linen", "Silk", "Wool", "Spandex"];
  const brands = ["Adidas", "Puma", "Reebok", "Nike", "Vans", "New Balance"];
  const gender = ["Male", "Female", "Other"];

  

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      priceRange: {
        min: parseInt(params.min) || 0,
        max: parseInt(params.max) || 100,
      },
    });
    // console.log("Search Params:", params.toString());
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
  
    let updatedParams = { ...Object.fromEntries([...searchParams]) };
  
    if (type === "radio") {
      updatedParams[name] = value;
    }
  
    if (type === "checkbox") {
      let updatedValues = filter[name] ? [...filter[name]] : [];
      
      if (checked) {
        updatedValues.push(value);
      } else {
        updatedValues = updatedValues.filter((item) => item !== value);
      }
  
      updatedParams[name] = updatedValues.length ? updatedValues.join(",") : null;
  
      setFilter((prev) => ({
        ...prev,
        [name]: updatedValues
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [name]: value
      }));
    }

    
  
    Object.keys(updatedParams).forEach((key) => {
      if (!updatedParams[key]) delete updatedParams[key];
    });
  
    setSearchParams(updatedParams);
  };
  
  

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSearchParams({ ...Object.fromEntries([...searchParams]), color });
    console.log("Selected Color:", color);
  };

  useEffect(() => {
    console.log("Updated Filter:", filter);
  }, [filter, setFilter]);


  // const updateURLParams = (newValues) => {
  //   const params = new URLSearchParams();
  
  //   Object.keys(newValues).forEach((key) => {
  //     if (Array.isArray(newValues[key]) && newValues[key].length > 0) {
  //       params.set(key, newValues[key].join(","));
  //     } else if (newValues[key]) {
  //       params.set(key, newValues[key]);
  //     }
  //   });
  
  //   if (newValues.price) {
  //     params.set("minPrice", newValues.price);
  //   }
  
  //   setSearchParams(params);
  //   navigate(`?${params.toString()}`);
  // };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
  };

  // Debounce logic for URL update
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedPrice(price);
      const updatedParams = {
        ...Object.fromEntries([...searchParams]),
        min: 0,
        max: price,
      };
      setSearchParams(updatedParams);
    }, 500); // Debounce delay

    return () => clearTimeout(timer); // Cleanup
  }, [price]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              value={category}
              onChange={handleFilterChange}
              name="category"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-500">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {gender.map((g) => (
          <div key={g} className="flex items-center mb-1">
            <input
              type="radio"
              value={g}
              onChange={handleFilterChange}
              name="gender"
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-500">{g}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="grid grid-cols-3 gap-4 p-3 border rounded-lg bg-gray-200">
          {colors.map(({ name, hex }) => (
            <div
              key={name}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${selectedColor === name ? "border-black scale-110" : "border-transparent"
                }`}
              style={{ backgroundColor: hex }}
              onClick={() => handleColorSelect(name)}
            ></div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="size"
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
                value={size}
                onChange={handleFilterChange}
              />
              <span className="text-gray-500">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block font-medium text-gray-600 mb-2">Material</label>
        <div className="flex flex-wrap gap-2">
          {materials.map((material) => (
            <div key={material} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="material"
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
                value={material}
                onChange={handleFilterChange}
              />
              <span className="text-gray-500">{material}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block font-medium text-gray-600 mb-3">Price Range</label>
        <div className="relative flex items-center">
          <span className="text-gray-500 text-sm absolute left-0">$0</span>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              // console.log("Selected Price:", e.target.value);
              handlePriceChange(e);
            }}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition focus:ring focus:ring-blue-600"
          />
          <span className="text-gray-500 text-sm absolute right-0">$100</span>
        </div>
        <div className="mt-3 text-center text-gray-800 font-semibold">
          Selected Price: ${price}
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
