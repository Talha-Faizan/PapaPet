import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      originalPrice: 98,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      originalPrice: 250,
      quantity: 3,
      image: "/placeholder.svg",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const browsingHistory = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
      price: 70,
      rating: 5,
      reviews: 738,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      price: 2300,
      rating: 5,
      reviews: 536,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)",
      price: 360,
      rating: 5,
      reviews: 423,
      image: "/placeholder.svg",
      badge: "BEST DEALS",
    },
    {
      id: 4,
      name: "Portable Washing Machine, 11lbs capacity Model 18NMF...",
      price: 80,
      rating: 4,
      reviews: 816,
      image: "/placeholder.svg",
    },
  ];

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const discount = 24;
  const tax = 61.99;
  const total = subtotal + shipping - discount + tax;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-orange-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="mx-auto p-4 bg-white">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Cart Section */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

          {/* Cart Items */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            {/* Header */}
            <div className="grid-cols-12 gap-4 text-sm font-medium text-gray-600 mb-4 hidden md:grid">
              <div className="col-span-6">PRODUCTS</div>
              <div className="col-span-2 text-center">PRICE</div>
              <div className="col-span-2 text-center">QUANTITY</div>
              <div className="col-span-2 text-center">SUB-TOTAL</div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-gray-200 last:border-b-0"
              >
                {/* Remove button and product info */}
                <div className="md:col-span-6 flex items-center gap-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-red-500 flex-shrink-0"
                  >
                    ×
                  </button>
                  <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm leading-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Price */}
                <div className="md:col-span-2 text-center">
                  <div className="flex items-center justify-center md:justify-center gap-2">
                    {item.originalPrice > item.price && (
                      <span className="text-gray-400 line-through text-sm">
                        ${item.originalPrice}
                      </span>
                    )}
                    <span className="font-semibold">${item.price}</span>
                  </div>
                </div>

                {/* Quantity */}
                <div className="md:col-span-2 flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="w-12 h-8 flex items-center justify-center text-sm font-medium">
                      {item.quantity.toString().padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="md:col-span-2 text-center">
                  <span className="font-semibold">
                    Rs {item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pr-5">
            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-400 text-orange-400 rounded font-medium hover:bg-orange-50 transition-colors">
              <ArrowLeft size={16} />
              RETURN TO SHOP
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-orange-400 text-orange-400 rounded font-medium hover:bg-orange-50 transition-colors">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Coupon Section */}
          <div className="mb-6">
            <div className="flex gap-2 ">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-1 md:px-3 py-3 border border-gray-300 rounded text-sm"
              />
              <button className="px-6 py-3 bg-orange-400 text-white rounded font-medium hover:bg-orange-500 transition-colors">
                APPLY COUPON
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Sub-total</span>
                <span className="font-medium">Rs {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">Rs {discount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">Rs {tax}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-lg">
                    Rs {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 px-6 py-3 bg-orange-400 text-white rounded font-medium hover:bg-orange-500 transition-colors flex items-center justify-center gap-2">
              PROCEED TO CHECKOUT
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Browsing History */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">BROWSING HISTORY</h2>
          <button className="text-orange-400 font-medium flex items-center gap-2 hover:text-orange-500">
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {browsingHistory.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative mb-4">
                <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 mb-2">
                {renderStars(product.rating)}
                <span className="text-gray-500 text-sm ml-1">
                  ({product.reviews})
                </span>
              </div>

              <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-tight">
                {product.name}
              </h3>

              <div className="text-lg font-semibold text-blue-500">
                ${product.price}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-50">
            <ArrowLeft size={16} />
          </button>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <button className="w-10 h-10 rounded-full border border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-50">
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
