export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.00", image: "🎧", category: "Electronics" },
    { id: 2, name: "Mechanical Keyboard", price: "$149.00", image: "⌨️", category: "Electronics" },
    { id: 3, name: "Running Shoes", price: "$89.00", image: "👟", category: "Sports" },
    { id: 4, name: "Smart Watch", price: "$199.00", image: "⌚", category: "Electronics" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tight text-indigo-600">ShopZone</h1>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-indigo-600 font-medium">Cart (2)</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-500 mt-2">Discover our top-rated electronics and accessories.</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">View All →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-6xl group-hover:bg-indigo-50 transition-colors">
                {product.image}
              </div>
              <p className="text-xs font-bold text-indigo-600 mb-1 tracking-wider uppercase">{product.category}</p>
              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-black text-gray-900">{product.price}</p>
                <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
