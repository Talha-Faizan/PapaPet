import React, { useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import OrderHistory from './OrderHistory'
import Profile from './Profile'
import ShoppingCart from './ShoppingCart'
import TrackOrder from './TrackOrder'

function NavPill() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  // Navigation menu items
  const menuItems = [
    { name: "Profile", component: <Profile />, path: "/profile" },
    { name: "Order History", component: <OrderHistory />, path: "/order-history" },
    { name: "Shopping Cart", component: <ShoppingCart />, path: "/shopping-cart" },
    { name: "Track Order", component: <TrackOrder />, path: "/track-order" }
  ]

  // Get current page name based on path
  const getCurrentPageName = () => {
    const currentItem = menuItems.find(item => item.path === location.pathname)
    return currentItem ? currentItem.name : "Menu"
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="rounded-full flex justify-center items-center mt-3">
        <div className="relative">
          {/* Profile button */}
          <div 
            className="bg-orange-800 flex justify-center items-center rounded-full px-12 py-3 text-white font-bold cursor-pointer hover:bg-orange-900 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {getCurrentPageName()}
          </div>
          
          {/* Dropdown menu */}
          <div 
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 transition-all duration-300 ease-in-out transform origin-top ${
              isOpen 
                ? 'opacity-100 scale-y-100' 
                : 'opacity-0 scale-y-0 pointer-events-none'
            }`}
          >
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link 
                  to={item.path}
                  className="block px-4 py-2 text-center text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {index < menuItems.length - 1 && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route definitions */}
      <Routes>
        {menuItems.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </>
  )
}

export default NavPill