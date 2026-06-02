export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99.00", image: "🎧", category: "Electronics", color: "from-blue-50 to-indigo-50", hoverColor: "group-hover:bg-indigo-100" },
    { id: 2, name: "Mechanical Keyboard", price: "$149.00", image: "⌨️", category: "Electronics", color: "from-emerald-50 to-teal-50", hoverColor: "group-hover:bg-teal-100" },
    { id: 3, name: "Running Shoes", price: "$89.00", image: "👟", category: "Sports", color: "from-rose-50 to-pink-50", hoverColor: "group-hover:bg-pink-100" },
    { id: 4, name: "Smart Watch", price: "$199.00", image: "⌚", category: "Electronics", color: "from-amber-50 to-orange-50", hoverColor: "group-hover:bg-orange-100" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 selection:bg-indigo-200">
      {/* Glassmorphism Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xl">S</span>
            ShopZone
          </h1>
          <div className="flex gap-6 items-center">
            <button className="text-slate-500 hover:text-indigo-600 font-semibold transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Cart <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs">2</span>
            </button>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-20 text-center">
         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
           Curated for your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">modern lifestyle.</span>
         </h1>
         <p className="text-xl text-slate-500 max-w-2xl mx-auto">Explore our collection of premium electronics, accessories, and sporting goods designed for perfection.</p>
      </div>

      <main className="max-w-7xl mx-auto px-6 mb-24">
        <div className="mb-10 flex justify-between items-end border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trending Now</h2>
          </div>
          <button className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1 group">
            View All Collection 
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container with Hover Zoom */}
              <div className={`aspect-[4/5] bg-gradient-to-br ${product.color} rounded-3xl mb-6 flex items-center justify-center text-8xl transition-all duration-500 relative overflow-hidden shadow-sm border border-slate-100 group-hover:shadow-xl`}>
                <div className={`absolute inset-0 opacity-0 ${product.hoverColor} transition-opacity duration-500`}></div>
                <div className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 relative z-10 drop-shadow-xl">
                  {product.image}
                </div>
                
                {/* Floating Add to Cart Button */}
                <button className="absolute bottom-6 bg-white/90 backdrop-blur text-slate-900 font-bold py-3 px-6 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-indigo-600 hover:text-white border border-slate-100">
                  Quick Add
                </button>
              </div>
              
              {/* Product Info */}
              <div className="px-2">
                <p className="text-xs font-bold text-slate-400 mb-1.5 tracking-widest uppercase">{product.category}</p>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{product.name}</h3>
                  <p className="text-lg font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
