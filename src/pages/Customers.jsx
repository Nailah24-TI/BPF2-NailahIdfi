import PageHeader from "../components/PageHeader";
import customersData from "../data/customers.json";

export default function Customers() {
  return (
    <div className="space-y-6">
      <PageHeader />

      <h2 className="text-xl font-semibold text-gray-800">
        Explore Customers
      </h2>

      {/* 🔥 Responsive + Scroll Mobile */}
      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
        
        {customersData.map((cust, index) => (
          <div
            key={cust.id}
            className={`
              min-w-[260px] snap-center
              rounded-2xl overflow-hidden shadow-md
              bg-white transition hover:scale-[1.03] hover:shadow-xl
              
              ${index === 2 ? "ring-2 ring-indigo-500" : ""}
            `}
          >
            {/* 🎨 Image + Gradient */}
            <div className="relative h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Avatar */}
              <div className="absolute bottom-[-20px] left-4">
                <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold shadow">
                  {cust.name.charAt(0)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pt-6 p-4">
              <h3 className="font-semibold text-gray-800">
                {cust.name}
              </h3>

              <p className="text-xs text-gray-400 mb-2">
                {cust.id}
              </p>

              <p className="text-sm text-gray-600 truncate">
                {cust.email}
              </p>

              <p className="text-sm text-gray-600">
                {cust.phone}
              </p>

              {/* Loyalty */}
              <div className="mt-3 flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    cust.loyalty === "Gold"
                      ? "bg-yellow-400 text-white"
                      : cust.loyalty === "Silver"
                      ? "bg-gray-400 text-white"
                      : "bg-orange-400 text-white"
                  }`}
                >
                  {cust.loyalty}
                </span>

                <button className="text-xs text-indigo-600 font-medium hover:underline">
                  View →
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}