export default function Home() {
  const recentRequests = [
    { id: 1, type: "O+", hospital: "City General", urgency: "High", status: "Pending" },
    { id: 2, type: "A-", hospital: "Mercy Clinic", urgency: "Critical", status: "Matched" },
    { id: 3, type: "B+", hospital: "St. Jude", urgency: "Medium", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-rose-100 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-black flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-500 tracking-tight">
            <span className="text-3xl animate-pulse text-rose-500 drop-shadow-md">🩸</span> BloodDrop
          </h1>
          <button className="bg-gradient-to-r from-rose-500 to-red-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5 transition-all duration-300">
            Register as Donor
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 mt-12 mb-20">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-2">Welcome Back, <span className="text-rose-500">Admin</span></h2>
          <p className="text-slate-500 text-lg">Here's the latest overview of blood donation activities today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-rose-200 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-slate-500 font-medium tracking-wide">Total Donors</h3>
              <p className="text-4xl font-black mt-1 text-slate-800">1,248</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-slate-500 font-medium tracking-wide">Active Requests</h3>
              <p className="text-4xl font-black mt-1 text-slate-800">34</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-slate-500 font-medium tracking-wide">Lives Saved</h3>
              <p className="text-4xl font-black mt-1 text-slate-800">4,892</p>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-2xl font-bold text-slate-800">Recent Requests</h2>
            <button className="text-sm font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors">
              View All History
            </button>
          </div>
          <div className="overflow-x-auto p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-400 text-sm tracking-wider uppercase border-b border-slate-100">
                  <th className="p-4 font-semibold pb-4">Blood Type</th>
                  <th className="p-4 font-semibold pb-4">Hospital</th>
                  <th className="p-4 font-semibold pb-4">Urgency</th>
                  <th className="p-4 font-semibold pb-4">Status</th>
                  <th className="p-4 font-semibold pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center font-black text-rose-600 border border-rose-100 group-hover:scale-110 transition-transform">
                        {req.type}
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-700">{req.hospital}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        req.urgency === 'Critical' ? 'bg-rose-100 text-rose-700 ring-1 ring-rose-200' :
                        req.urgency === 'High' ? 'bg-orange-100 text-orange-700 ring-1 ring-orange-200' :
                        'bg-amber-100 text-amber-700 ring-1 ring-amber-200'
                      }`}>
                        {req.urgency}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${req.status === 'Matched' ? 'bg-emerald-500' : 'bg-slate-400 animate-pulse'}`}></div>
                        <span className={`font-semibold ${
                          req.status === 'Matched' ? 'text-emerald-700' : 'text-slate-600'
                        }`}>
                          {req.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <button className="text-slate-400 hover:text-rose-600 transition-colors p-2 rounded-lg hover:bg-rose-50">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
