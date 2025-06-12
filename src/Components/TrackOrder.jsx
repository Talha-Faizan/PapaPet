import React, { useState } from "react";

const TrackOrder = () => {
  const [orderDetails] = useState({
    orderId: "#12345678",
    orderDate: "11 June 2025",
    orderTime: "11:24 PM",
    expectedArrival: "12/06/2025",
    totalItems: 2,
    totalAmount: "$1999",
  });

  const [status] = useState([
    {
      id: "1",
      title: "Order Placed",
      status: true,
    },
    {
      id: "2",
      title: "Packaging",
      status: true,
    },
    {
      id: "3",
      title: "On The Road",
      status: false,
    },
    {
      id: "4",
      title: "Delivered",
      status: false,
    },
  ]);

  const [activity] = useState([
    {
      id: "6",
      title: "Your order has been confirmed",
      status: true,
    },
    {
      id: "5",
      title: "Your order is successfully verified.",
      status: true,
    },
    {
      id: "4",
      title: "Your order is on the way to the last mile hub.",
      status: true,
    },
    {
      id: "3",
      title: "Your Order has reached at last mile hub.",
      status: false,
    },
    {
      id: "2",
      title: "Our delivery guy has picked up your order.",
      status: false,
    },
    {
      id: "1",
      title:
        "Your Order has been delivered. Thank you for Shopping with PapaPet.",
      status: false,
    },
  ]);

  const [products] = useState([
    {
      name: "Cat Food",
      desc: "Meow 250 grams packet",
      price: "₹99",
      quantity: 4,
    },
    {
      name: "Dog Food",
      desc: "Pedegree 1Kg packet",
      price: "₹1899",
      quantity: 1,
    },
  ]);

  const [addresses] = useState({
    billing: {
      name: "John Doe",
      street: "123 Maple Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      email: "john.doe@example.com",
    },
    shipping: {
      name: "John Doe",
      street: "123 Maple Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      email: "john.doe@example.com",
    },
  });

  const [orderNotes] = useState(
    "Please keep the food fresh. My cat is picky about texture. Thanks!"
  );
  return (
    <>
      <div className="px-2 sm:px-5 md:px-5 mt-10">
        <section className="flex justify-between items-center">
          <div className="w-full sm:w-3/4 leading-6">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
              {orderDetails.orderId}
            </h1>
            <p className="text-sm sm:text-base">
              {orderDetails.totalItems} items • Order Placed on{" "}
              {orderDetails.orderDate} at {orderDetails.orderTime}
            </p>
            <p className="text-sm sm:text-base">
              Order expected arrival{" "}
              <span className="font-bold">{orderDetails.expectedArrival}</span>
            </p>
          </div>
          <div className="w-full sm:w-1/4 text-blue-700 text-right">
            <h1 className="text-3xl font-black">{orderDetails.totalAmount}</h1>
          </div>
        </section>

        <div className="border-b border-gray-500 my-4 mb-10"></div>

        {/* status */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {status.map((data, index) => {
              return (
                <div
                  className="flex md:flex-col gap-3 sm:gap-5 items-center mb-3 sm:mb-5"
                  key={index}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                      data.status ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  >
                    <h1 className="text-base sm:text-xl font-bold">
                      {data.id}
                    </h1>
                  </div>
                  <p className="font-bold text-sm sm:text-base">{data.title}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/*Order Activity*/}
        <section className="mt-6 sm:mt-10">
          <h1 className="text-base sm:text-lg font-bold mb-3 sm:mb-5">
            Order Activity
          </h1>
          {activity.map((data, index) => {
            return (
              <div className="flex items-center gap-2 mb-2 sm:mb-3" key={index}>
                <div
                  className={`${
                    data.status ? "bg-green-700" : "bg-gray-200"
                  } h-2 w-2 sm:h-3 sm:w-3 rounded-full border-green-700`}
                ></div>
                <h1 className="text-xs sm:text-sm">{data.title}</h1>
              </div>
            );
          })}
        </section>

        {/* Products */}
        <section className="mt-6 sm:mt-10">
          <h1 className="font-bold text-base sm:text-lg mb-3 sm:mb-5">
            Products ({products.length})
          </h1>
          {products.map((data, index) => {
            return (
              <div className="flex justify-between mb-3" key={index}>
                <div>
                  <h1 className="font-bold text-sm sm:text-base">
                    {data.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {data.desc}
                  </p>
                </div>
                <div className="text-right mt-1 sm:mt-0">
                  <h1 className="font-bold text-sm sm:text-base">
                    {data.price}
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-500">
                    x{data.quantity}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-6 sm:mt-10 lg:flex items-stretch justify-between gap-2">
          <div className="border border-gray-300 rounded-lg p-2 sm:p-3 mb-4 sm:mb-5 lg:w-[33.33%] flex flex-col">
            <h1 className="font-bold text-sm sm:text-base">
              Billing Address:{" "}
            </h1>
            <p className="font-semibold text-sm sm:text-base">
              {addresses.billing.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {addresses.billing.street}, {addresses.billing.city},{" "}
              {addresses.billing.state} {addresses.billing.zipCode}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Email: {addresses.billing.email}
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-2 sm:p-3 mb-4 sm:mb-5 lg:w-[33.33%] flex flex-col">
            <h1 className="font-bold text-sm sm:text-base">
              Shipping Address:{" "}
            </h1>
            <p className="font-semibold text-sm sm:text-base">
              {addresses.shipping.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {addresses.shipping.street}, {addresses.shipping.city},{" "}
              {addresses.shipping.state} {addresses.shipping.zipCode}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Email: {addresses.shipping.email}
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-2 sm:p-3 mb-4 sm:mb-5 lg:w-[33.33%] flex flex-col">
            <h1 className="font-bold text-sm sm:text-base">Order Notes: </h1>
            <p className="text-xs sm:text-sm text-gray-500">{orderNotes}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TrackOrder;
