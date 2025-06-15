import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavPill() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Profile", path: "/" },
    { name: "Order History", path: "/order-history" },
    { name: "Shopping Cart", path: "/shopping-cart" },
    { name: "Track Order", path: "/track-order" },
  ];

  const currentPage = menuItems.find(item => item.path === location.pathname)?.name || "Menu";

  return (
    <div className="md:hidden">
      <div className="rounded-full flex justify-center items-center mt-3">
        <div className="relative">
          <button
            className="bg-orange-500 flex justify-center items-center rounded-full px-12 py-3 text-white font-bold hover:bg-orange-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {currentPage}
          </button>

          {isOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-center text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {index < menuItems.length - 1 && (
                    <div className="border-b border-gray-200" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavPill;
