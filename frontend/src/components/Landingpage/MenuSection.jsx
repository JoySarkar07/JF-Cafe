import React, { useState } from "react";

const menuData = {
  "Coffee & Tea": [
    { name: "Signature Espresso", price: "$4.50", desc: "Rich and bold with chocolate notes" },
    { name: "Cappuccino Classic", price: "$5.00", desc: "Perfect balance of espresso and steamed milk" },
    { name: "Latte Artisan", price: "$5.50", desc: "Smooth espresso with velvety milk foam" },
    { name: "Cold Brew Special", price: "$4.00", desc: "Slow-brewed for 12 hours, naturally sweet" },
    { name: "Mocha Delight", price: "$6.00", desc: "Espresso with premium chocolate and cream" },
    { name: "Green Tea Blend", price: "$3.50", desc: "Premium loose leaf green tea" },
    { name: "Earl Grey Premium", price: "$3.50", desc: "Classic bergamot-infused black tea" },
    { name: "Chai Latte Spiced", price: "$5.00", desc: "Aromatic blend of spices and black tea" },
    { name: "Caramel Macchiato", price: "$5.75", desc: "Espresso, milk & caramel drizzle" },
    { name: "Matcha Latte", price: "$5.25", desc: "Creamy Japanese green tea latte" },
  ],
  Pizza: [
    { name: "Margherita Pizza", price: "$8.00", desc: "Classic pizza with mozzarella and basil" },
    { name: "Pepperoni Feast", price: "$9.50", desc: "Loaded with pepperoni and cheese" },
  ],
  Pasta: [
    { name: "Spaghetti Bolognese", price: "$10.00", desc: "Traditional meat sauce with pasta" },
    { name: "Fettuccine Alfredo", price: "$11.00", desc: "Creamy parmesan sauce with fresh pasta" },
  ],
  "Shakes & Smoothies": [
    { name: "Strawberry Shake", price: "$5.00", desc: "Fresh strawberries blended with milk" },
    { name: "Mango Smoothie", price: "$4.50", desc: "Refreshing tropical mango delight" },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", price: "$6.50", desc: "Warm cake with molten chocolate center" },
    { name: "Cheesecake Slice", price: "$5.50", desc: "Classic creamy cheesecake" },
  ],
  "Pastries & Snacks": [
    { name: "Croissant", price: "$3.00", desc: "Buttery flaky French pastry" },
    { name: "Muffin", price: "$2.50", desc: "Choice of blueberry or chocolate chip" },
  ],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Coffee & Tea");
  const [page, setPage] = useState(1);
  const categories = Object.keys(menuData);

  const itemsPerPage = 3; // ✅ 9 items per page
  const activeItems = menuData[activeTab];
  const totalPages = Math.ceil(activeItems.length / itemsPerPage);
  const paginatedItems = activeItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleTabChange = (category) => {
    setActiveTab(category);
    setPage(1);
  };

  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Complete Menu
        </h2>
        <p className="text-gray-600 mt-3">
          From premium coffee to delicious pizza and pasta, discover our full range of
          carefully crafted dishes and beverages
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === category
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
          {paginatedItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={`https://source.unsplash.com/400x250/?${item.name}`}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* Text */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                <span className="font-bold text-gray-900">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-700 font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
