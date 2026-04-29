import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders.json";

export default function Orders() {
  return (
    <div className="space-y-6">
      <PageHeader />

      {/* 🔥 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-2xl font-bold">{ordersData.length}</h2>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <p className="text-yellow-700 text-sm">Pending</p>
          <h2 className="text-xl font-bold">
            {ordersData.filter(o => o.status === "Pending").length}
          </h2>
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          <p className="text-green-700 text-sm">Completed</p>
          <h2 className="text-xl font-bold">
            {ordersData.filter(o => o.status === "Completed").length}
          </h2>
        </div>

        <div className="bg-red-100 p-4 rounded-xl">
          <p className="text-red-700 text-sm">Cancelled</p>
          <h2 className="text-xl font-bold">
            {ordersData.filter(o => o.status === "Cancelled").length}
          </h2>
        </div>
      </div>

      {/* 📦 Table */}
      <div className="bg-white rounded-xl shadow p-4">
        <h1 className="text-xl font-bold mb-4">Orders List</h1>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-left text-sm">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {ordersData.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50 text-sm">
                  <td className="p-3 font-medium">{order.id}</td>
                  <td className="p-3">{order.customer}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="p-3">
                    Rp {order.total.toLocaleString("id-ID")}
                  </td>

                  <td className="p-3">
                    {new Date(order.date).toLocaleDateString("id-ID")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}