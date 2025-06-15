import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, History, Truck, ShoppingCart, LogOut } from "lucide-react";

const SideBar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { id: "Profile", icon: User, label: "Profile", path: "/" },
    {
      id: "Order History",
      icon: History,
      label: "Order History",
      path: "/order-history",
    },
    {
      id: "Track Order",
      icon: Truck,
      label: "Track Order",
      path: "/track-order",
    },
    {
      id: "Shopping Cart",
      icon: ShoppingCart,
      label: "Shopping Cart",
      path: "/shopping-cart",
    },
    { id: "LogOut", icon: LogOut, label: "LogOut", path: "/logout" }, // Update path if needed
  ];

  // Highlight the active item based on route
  useEffect(() => {
    const current = menuItems.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.id);
  }, [location.pathname]);

  return (
    <div className="hidden md:flex w-64 bg-white shadow-lg h-[100vh] flex-col p-4 sp34`ace-y-2">
      {menuItems.map(({ id, icon: Icon, label, path }) => (
        <Link
          key={id}
          to={path}
          className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-colors ${
            activeItem === id
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-orange-200 hover:text-orange-800"
          }`}
        >
          <Icon size={20} />
          <span className="text-sm font-medium">{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
