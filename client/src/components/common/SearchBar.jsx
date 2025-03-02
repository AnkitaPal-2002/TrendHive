import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Term:", search);
    };

    return (
        <div className="relative flex items-center">
            {/* Search Icon (Visible when search bar is closed) */}
            {!isOpen && (
                <button onClick={handleSearchToggle} className="text-gray-600 hover:text-gray-800">
                    <Search size={24} strokeWidth={2} />
                </button>
            )}

            {/* Expanded Search Bar (Visible when search bar is open) */}
            {isOpen && (
                <div className="fixed top-1 left-0 w-full h-30 bg-white flex items-center justify-center z-50 transition-all duration-300">
                    <form className="relative w-1/2 flex items-center" onSubmit={handleSearch}>
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder-gray-700"
                        />
                        {/* Search Button Inside Input */}
                        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
                            <Search size={24} strokeWidth={2} />
                        </button>
                    </form>

                    {/* Close Button */}
                    <button
                        type="button"
                        className="absolute right-4 top-5 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                        onClick={handleSearchToggle}
                    >
                        <X size={24} strokeWidth={2} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
