import React from "react";
import { Routes, Route } from "react-router-dom";
import OrderHistory from "./Components/OrderHistory";
import Profile from "./Components/Profile";
import ShoppingCart from "./Components/ShoppingCart";
import TrackOrder from "./Components/TrackOrder";

const routes = [
  { path: "/", element: <Profile /> },
  { path: "/order-history", element: <OrderHistory /> },
  { path: "/shopping-cart", element: <ShoppingCart /> },
  { path: "/track-order", element: <TrackOrder /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
export { routes }
