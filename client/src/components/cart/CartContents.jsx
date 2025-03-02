import React from 'react';
import { Trash2 } from 'lucide-react';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 20,
            image: "https://picsum.photos/200?random=2",
        }
    ];

    return (
        <div className="p-4">
            {cartProducts.map((product, index) => (
                <div 
                    key={index} 
                    className="flex items-center justify-between border-b py-4 px-4 bg-white shadow-sm rounded-lg"
                >
                    {/* Product Image */}
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-20 h-24 object-cover rounded-lg"
                    />

                    {/* Product Details */}
                    <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">Size: {product.size} | Color: {product.color}</p>
                        <p className="text-md font-semibold text-gray-700 mt-1">${product.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-lg px-2 py-1 bg-gray-100">
                            <button className="px-2 text-gray-700 hover:text-black text-lg">−</button>
                            <span className="mx-3 font-medium">{product.quantity}</span>
                            <button className="px-2 text-gray-700 hover:text-black text-lg">+</button>
                        </div>

                        {/* Delete Button */}
                        <button className="text-red-600 hover:text-red-800 transition duration-200">
                            <Trash2 size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;
