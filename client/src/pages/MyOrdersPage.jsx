import React, { useState, useEffect } from "react";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulate API call with mock orders
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "123 Main St",
                        city: "New York",
                        state: "NY",
                        zipCode: "10001",
                    },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/200?random=1",
                        },
                    ],
                    totalPrice: 120,
                    isPaid: true,
                },
                {
                    _id: "12346",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "456 Elm St",
                        city: "Los Angeles",
                        state: "CA",
                        zipCode: "90001",
                    },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/200?random=2",
                        },
                    ],
                    totalPrice: 200,
                    isPaid: false,
                },
                {
                    _id: "12347",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "789 Pine St",
                        city: "Chicago",
                        state: "IL",
                        zipCode: "60601",
                    },
                    orderItems: [
                        {
                            name: "Product 3",
                            image: "https://picsum.photos/200?random=3",
                        },
                    ],
                    totalPrice: 150,
                    isPaid: true,
                },
                {
                    _id: "12348",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "321 Oak St",
                        city: "Houston",
                        state: "TX",
                        zipCode: "77001",
                    },
                    orderItems: [
                        {
                            name: "Product 4",
                            image: "https://picsum.photos/200?random=4",
                        },
                    ],
                    totalPrice: 180,
                    isPaid: false,
                },
                {
                    _id: "12349",
                    createdAt: new Date(),
                    shippingAddress: {
                        street: "654 Maple St",
                        city: "San Francisco",
                        state: "CA",
                        zipCode: "94101",
                    },
                    orderItems: [
                        {
                            name: "Product 5",
                            image: "https://picsum.photos/200?random=5",
                        },
                    ],
                    totalPrice: 220,
                    isPaid: true,
                },
            ];

            setOrders(mockOrders);
        }, 1000);
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
            <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                <table className="min-w-full text-left text-gray-500">
                    <thead className="bg-gray-300 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-6">Image</th>
                            <th className="py-3 px-6">Order ID</th>
                            <th className="py-3 px-6">Created</th>
                            <th className="py-3 px-6">Shipping Address</th>
                            <th className="py-3 px-6">Items</th>
                            <th className="py-3 px-6">Price</th>
                            <th className="py-3 px-6">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b hover:bg-gray-50 cursor-pointer"
                                >
                                    {/* Image */}
                                    <td className="py-2 px-4">
                                        <img
                                            src={order.orderItems[0].image}
                                            alt={order.orderItems[0].name}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                                        />
                                    </td>

                                    {/* Order ID */}
                                    <td className="py-2 px-4 font-medium text-gray-900">
                                        #{order._id}
                                    </td>

                                    {/* Created At */}
                                    <td className="py-2 px-4">
                                    {new Date(order.createdAt).toLocaleString()}

                                    </td>

                                    {/* Shipping Address */}
                                    <td className="py-2 px-4">
                                        {order.shippingAddress.street},{" "}
                                        {order.shippingAddress.city},{" "}
                                        {order.shippingAddress.state},{" "}
                                        {order.shippingAddress.zipCode}
                                    </td>

                                    {/* Items */}
                                    <td className="py-2 px-4">
                                        {order.orderItems.length}
                                    </td>

                                    {/* Price */}
                                    <td className="py-2 px-4 font-semibold text-gray-900">
                                        ${order.totalPrice}
                                    </td>

                                    {/* Status */}
                                    <td
                                        className={`py-2 px-4 font-semibold ${
                                            order.isPaid
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}
                                    >
                                        {order.isPaid ? "Paid" : "Unpaid"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="py-6 px-6 text-center text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrdersPage;
