import React, { useState, useEffect, useRef } from "react";
import { Filter } from "lucide-react";
import FilterSideBar from "../components/products/FilterSideBar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sideBarRef = useRef(null);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleToggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    const handleClickOutside = (event) => {
        // Close sidebar when clicking outside
        if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
            setIsSideBarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Simulate API call with mock products
        setTimeout(() => {
            const mockProducts = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/200?random=1" }],
                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 120,
                    images: [{ url: "https://picsum.photos/200?random=2" }],
                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 150,
                    images: [{ url: "https://picsum.photos/200?random=3" }],
                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 200,
                    images: [{ url: "https://picsum.photos/200?random=4" }],
                },
                {
                    _id: 5,
                    name: "Product 5",
                    price: 180,
                    images: [{ url: "https://picsum.photos/200?random=5" }],
                },
                {
                    _id: 6,
                    name: "Product 6",
                    price: 130,
                    images: [{ url: "https://picsum.photos/200?random=6" }],
                },
                {
                    _id: 7,
                    name: "Product 7",
                    price: 160,
                    images: [{ url: "https://picsum.photos/200?random=7" }],
                },
                {
                    _id: 8,
                    name: "Product 8",
                    price: 210,
                    images: [{ url: "https://picsum.photos/200?random=8" }],
                },
            ];
            
            setProducts(mockProducts);
        }, 1000);
    }, []);

    return (
        <div className="relative flex flex-col lg:flex-row">
            {/* Mobile Filter Button */}
            <button
                onClick={handleToggleSideBar}
                className="lg:hidden border p-2 flex justify-center items-center"
            >
                <Filter size={20} className="mr-2" />
                Filter
            </button>

            {/* Filter Sidebar (Ensured it stays above navbar) */}
            <div
                ref={sideBarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 lg:static`}
            >
                <FilterSideBar />
            </div>

            {/* Product List */}
            <div className="flex-grow p-4">
                <h2 className="text-2xl uppercase mb-4 ">
                    All Collection
                </h2>
                {/* Sort Options */}
                <SortOptions/>

                {/* Product Grid */}
                <ProductGrid products={products}/>

            </div>
        </div>
    );
};

export default CollectionPage;
