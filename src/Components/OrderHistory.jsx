import { useState } from "react";

const OrderHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const orders = [
    {
      id: "#96459761",
      status: "IN PROGRESS",
      date: "Dec 30, 2019 07:52",
      total: "$80",
      productCount: 5,
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      date: "Dec 7, 2019 23:26",
      total: "$70",
      productCount: 4,
    },
    {
      id: "#95214362",
      status: "CANCELED",
      date: "Dec 7, 2019 23:26",
      total: "$2,300",
      productCount: 2,
    },
    {
      id: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$250",
      productCount: 1,
    },
    {
      id: "#51746385",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$360",
      productCount: 2,
    },
    {
      id: "#51746385",
      status: "CANCELED",
      date: "Dec 30, 2019 21:02",
      total: "$220",
      productCount: 7,
    },
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "IN PROGRESS":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "COMPLETED":
        return "text-green-600 bg-green-50 border-green-200";
      case "CANCELED":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-500 bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="w-full mx-auto p-4 mt-5  max-w-[100vw] overflow-x-hidden">
      <h2 className="text-xl font-semibold mb-6">Order History</h2>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 tracking-wider uppercase">
                  ORDER ID
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 tracking-wider uppercase">
                  STATUS
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 tracking-wider uppercase">
                  DATE
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 tracking-wider uppercase">
                  TOTAL
                </th>
                <th className="text-left py-4 px-6 text-xs font-medium text-gray-500 tracking-wider uppercase">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr
                  key={`${order.id}-${index}`}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-md border ${getStatusClasses(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {order.total} ({order.productCount} Products)
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center py-4 border-t border-gray-200 bg-gray-50/50">
          <div className="flex items-center space-x-2">
            <button
              className={`w-8 h-8 flex items-center justify-center text-sm ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              ←
            </button>

            <button
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                currentPage === 1
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setCurrentPage(1)}
            >
              01
            </button>

            <button
              className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                currentPage === 2
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setCurrentPage(2)}
            >
              02
            </button>

            <button
              className={`w-8 h-8 flex items-center justify-center text-sm ${
                currentPage === 2
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}
              disabled={currentPage === 2}
              onClick={() => setCurrentPage(Math.min(2, currentPage + 1))}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
