import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const newArrivals = [
        { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/seed/picsum/200/300", altText: "Stylish Jacket" }] },
        { _id: "2", name: "Denim Jeans", price: 80, images: [{ url: "https://picsum.photos/seed/picsum/200/300", altText: "Denim Jeans" }] },
        { _id: "3", name: "Casual T-shirt", price: 40, images: [{ url: "https://picsum.photos/seed/picsum/200/300", altText: "Casual T-shirt" }] },
        { _id: "4", name: "Formal Shirt", price: 100, images: [{ url: "https://picsum.photos/seed/picsum/200/300", altText: "Formal Shirt" }] },
        { _id: "5", name: "Leather Shoes", price: 150, images: [{ url: "https://picsum.photos/seed/picsum/200/300", altText: "Leather Shoes" }] },
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);

    }

    const handleMouseMove = (e) => {
        if(!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;

    }

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    }

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);


        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons(); // Initial update

            return () => {
                container.removeEventListener("scroll", updateScrollButtons);
            };
        }
    }, []);

    return (
        <section>
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-gray-600 text-lg mb-8">
                    Discover the latest trends in fashion and explore our new arrivals.
                </p>

                {/* Scroll buttons with dynamic styles */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border transition-all ${canScrollLeft ? 'bg-white text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border transition-all ${canScrollRight ? 'bg-white text-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            {/* Scrollable Contents */}
            <div 
            ref={scrollRef} 
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove} 
            onMouseUp={handleMouseUpOrLeave} 
            onMouseLeave={handleMouseUpOrLeave}

            className={`container mx-auto overflow-x-scroll flex space-x-6 relative scroll-smooth ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
                {newArrivals.map((product) => (
                    <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                        <img src={product.images[0]?.url} alt={product.images[0]?.altText || product.name} className="w-full h-[500px] object-cover rounded-lg" draggable="false"/>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 backdrop-blur-md text-white rounded-b-lg">
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
