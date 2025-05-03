import React from 'react'

const checkout = {
    _id: "12345",
    createdAt: new Date(),
    checkOutItems: [
        {
            productId: "001",
            productName: "Men's Jacket",
            size: "M",
            price: 1500,
            quantity: 2,
            image: "https://picsum.photos/seed/jacket/64"
        },
        {
            productId: "002",
            productName: "Women's Kurti",
            size: "L",
            price: 899,
            quantity: 1,
            image: "https://picsum.photos/seed/kurti/64"
        },
        {
            productId: "003",
            productName: "Men's T-Shirt",
            size: "L",
            price: 499,
            quantity: 3,
            image: "https://picsum.photos/seed/tshirt/64"
        },
        {
            productId: "004",
            productName: "Women's Jeans",
            size: "30",
            price: 1199,
            quantity: 1,
            image: "https://picsum.photos/seed/jeans/64"
        },
        {
            productId: "005",
            productName: "Men's Formal Shirt",
            size: "XL",
            price: 799,
            quantity: 1,
            image: "https://picsum.photos/seed/formalshirt/64"
        }
    ],
    shippingAddress: {
        name: "John Doe",
        address: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA"
    },

};


const OrderConfirmationPage = () => {
    const calculateEstimateDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        const estimatedDeliveryDate = new Date(orderDate);
        estimatedDeliveryDate.setDate(orderDate.getDate() + 7);
        return estimatedDeliveryDate.toLocaleDateString('en-GB');
    }

    return (
        <div className='max-w-4xl mx-auto p-6 bg-white '>
            <h1 className='text-xl font-bold text-center text-emerald-700 mb-8'>
                Thank you for your order!
            </h1>
            {
                checkout && (
                  <div className='p-6 rounded-lg border'>
                    {/* Header */}
                    <div className='flex justify-between mb-10'>
                      <h2 className='text-xl font-semibold'>Order Id: {checkout._id}</h2>
                      <p className='text-gray-500'>
                        {new Date(checkout.createdAt).toLocaleDateString('en-GB')}
                      </p>
                    </div>
              
                    {/* Estimated Delivery */}
                    <div className='mb-8'>
                      <h3 className='text-lg font-semibold mb-2'>Estimated Delivery</h3>
                      <p className='text-emerald-700 text-sm'>
                        {calculateEstimateDelivery(checkout.createdAt)}
                      </p>
                    </div>
              
                    {/* Ordered Items */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Ordered Items</h3>
                      <div className="space-y-4">
                        {checkout.checkOutItems.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between border-b pb-4"
                          >
                            <div className="flex items-center">
                              <img
                                src={item.image}
                                alt={item.productName}
                                className="w-16 h-16 object-cover rounded mr-4"
                              />
                              <div>
                                <h4 className="font-medium text-gray-800">{item.productName}</h4>
                                <p className="text-sm text-gray-500">Size: {item.size}</p>
                                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">₹{item.price} each</p>
                              <p className="text-base font-semibold text-gray-800">
                                ₹{item.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
              
                      {/* Order Total */}
                      <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold text-gray-800">
                        <span>Total</span>
                        <span>
                          ₹
                          {checkout.checkOutItems.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )}
                        </span>
                      </div>
                    </div>
              
                    {/* Shipping Method */}
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Shipping Method</h3>
                      <p className="text-sm text-gray-600">
                        Standard Shipping
                      </p>
                    </div>
              
                    {/* Payment Method */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Method</h3>
                      <p className="text-sm text-gray-600">Paid via PayPal</p>
                    </div>
                  </div>
                )
              
              
            }


        </div>
    )
}

export default OrderConfirmationPage
