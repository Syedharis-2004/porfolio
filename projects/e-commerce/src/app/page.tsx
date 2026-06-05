"use client";
import { useState } from "react";

const allProducts = [
  // Electronics
  { id: 1,  name: "Wireless Headphones Pro", price: 99,  originalPrice: 149, image: "🎧", category: "Electronics", rating: 4.8, reviews: 1240, badge: "Best Seller", color: "from-blue-50 to-indigo-100" },
  { id: 2,  name: "Mechanical Keyboard RGB", price: 149, originalPrice: 199, image: "⌨️", category: "Electronics", rating: 4.6, reviews: 876,  badge: "Sale",        color: "from-emerald-50 to-teal-100" },
  { id: 3,  name: "Smart Watch Ultra",       price: 199, originalPrice: 249, image: "⌚", category: "Electronics", rating: 4.9, reviews: 2103, badge: "New",          color: "from-amber-50 to-orange-100" },
  { id: 4,  name: "Portable Speaker 360°",  price: 79,  originalPrice: 99,  image: "🔊", category: "Electronics", rating: 4.5, reviews: 634,  badge: null,          color: "from-rose-50 to-pink-100" },
  { id: 5,  name: "4K Webcam HD",           price: 129, originalPrice: 179, image: "📷", category: "Electronics", rating: 4.7, reviews: 512,  badge: "Sale",        color: "from-violet-50 to-purple-100" },
  { id: 6,  name: "USB-C Hub 7-in-1",       price: 49,  originalPrice: 69,  image: "🔌", category: "Electronics", rating: 4.4, reviews: 389,  badge: null,          color: "from-cyan-50 to-sky-100" },
  // Sports
  { id: 7,  name: "Running Shoes Elite",    price: 89,  originalPrice: 120, image: "👟", category: "Sports",      rating: 4.7, reviews: 981,  badge: "Best Seller", color: "from-lime-50 to-green-100" },
  { id: 8,  name: "Yoga Mat Premium",       price: 39,  originalPrice: 59,  image: "🧘", category: "Sports",      rating: 4.6, reviews: 714,  badge: null,          color: "from-fuchsia-50 to-pink-100" },
  { id: 9,  name: "Water Bottle 1L",        price: 29,  originalPrice: 45,  image: "🍶", category: "Sports",      rating: 4.5, reviews: 456,  badge: "Sale",        color: "from-sky-50 to-blue-100" },
  // Fashion
  { id: 10, name: "Minimal Tote Bag",       price: 59,  originalPrice: 89,  image: "👜", category: "Fashion",     rating: 4.8, reviews: 1560, badge: "Trending",    color: "from-orange-50 to-amber-100" },
  { id: 11, name: "Sunglasses UV400",       price: 69,  originalPrice: 99,  image: "🕶️", category: "Fashion",     rating: 4.6, reviews: 823,  badge: null,          color: "from-yellow-50 to-lime-100" },
  { id: 12, name: "Leather Wallet Slim",    price: 45,  originalPrice: 65,  image: "👛", category: "Fashion",     rating: 4.7, reviews: 672,  badge: "New",         color: "from-red-50 to-rose-100" },
];

const CATEGORIES = ["All", "Electronics", "Sports", "Fashion"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const filtered = allProducts.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (id: number) => setCart(prev => [...prev, id]);

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "½" : "");
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans text-slate-900 selection:bg-indigo-200">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg">S</div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">ShopZone</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2.5 rounded-full w-80 border border-slate-200 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-600 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <button className="relative text-slate-600 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white text-xs font-black rounded-full flex items-center justify-center">{cart.length}</span>
              )}
            </button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-600 transition-all duration-300 shadow-md hover:-translate-y-0.5">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO BANNER ── */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold mb-5">
              🔥 Summer Sale — Up to 40% Off
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Curated for your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">modern lifestyle.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-xl">Premium electronics, sports gear & fashion — all in one place. Free delivery on orders over $75.</p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3.5 rounded-full font-bold transition-all shadow-xl shadow-indigo-900/50 hover:-translate-y-0.5">
                Shop Now
              </button>
              <button className="bg-white/10 border border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all">
                View Deals
              </button>
            </div>
          </div>
          <div className="text-[160px] leading-none select-none opacity-80 hidden md:block">🛍️</div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="max-w-7xl mx-auto px-6 py-12 pb-24">

        {/* Category Tabs + Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500 font-medium">{filtered.length} products found</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(product => {
            const discount = Math.round((1 - product.price / product.originalPrice) * 100);
            const inCart = cart.includes(product.id);
            return (
              <div key={product.id} className="group cursor-pointer">
                {/* Image */}
                <div className={`aspect-square bg-gradient-to-br ${product.color} rounded-3xl mb-4 flex items-center justify-center text-7xl relative overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500`}>
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 text-xs font-black px-3 py-1 rounded-full ${
                      product.badge === "Sale" ? "bg-red-500 text-white" :
                      product.badge === "New" ? "bg-emerald-500 text-white" :
                      product.badge === "Best Seller" ? "bg-amber-400 text-slate-900" :
                      "bg-indigo-600 text-white"
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  {/* Discount */}
                  <div className="absolute top-3 right-3 text-xs font-black bg-slate-900/80 text-white px-2 py-1 rounded-lg">
                    -{discount}%
                  </div>
                  {/* Emoji zoom */}
                  <div className="group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 drop-shadow-xl">
                    {product.image}
                  </div>
                  {/* Quick Add */}
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-bold py-2.5 px-6 rounded-full text-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl whitespace-nowrap ${
                      inCart ? "bg-emerald-500 text-white" : "bg-slate-900 text-white hover:bg-indigo-600"
                    }`}
                  >
                    {inCart ? "✓ Added" : "+ Add to Cart"}
                  </button>
                </div>

                {/* Info */}
                <div className="px-1">
                  <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">{product.category}</p>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors leading-snug">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-amber-400 text-sm">{renderStars(product.rating)}</span>
                    <span className="text-xs text-slate-400 font-medium">({product.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black text-slate-900">${product.price}</span>
                      <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all ${
                        inCart ? "bg-emerald-100 text-emerald-600" : "bg-slate-900 text-white hover:bg-indigo-600"
                      }`}
                    >
                      {inCart ? "✓" : "+"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-xl font-bold text-slate-600">No products found</p>
            <p className="mt-2">Try a different search or category.</p>
          </div>
        )}
      </main>

      {/* Cart Toast */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 z-50">
          <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="font-bold">{cart.length} item{cart.length > 1 ? "s" : ""} in cart</span>
          <button onClick={() => setCart([])} className="text-slate-400 hover:text-white ml-2 transition-colors">✕</button>
        </div>
      )}
    </div>
  );
}
