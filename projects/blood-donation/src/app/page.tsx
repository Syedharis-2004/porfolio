export default function Home() {
  const recentRequests = [
    { id: 1, type: "O+", hospital: "City General", urgency: "High", status: "Pending" },
    { id: 2, type: "A-", hospital: "Mercy Clinic", urgency: "Critical", status: "Matched" },
    { id: 3, type: "B+", hospital: "St. Jude", urgency: "Medium", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-red-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">🩸</span> BloodDrop Manager
          </h1>
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
            Register as Donor
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-red-500">
            <h3 className="text-slate-500 text-sm font-medium">Total Registered Donors</h3>
            <p className="text-3xl font-bold mt-2">1,248</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-orange-500">
            <h3 className="text-slate-500 text-sm font-medium">Active Requests</h3>
            <p className="text-3xl font-bold mt-2">34</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-green-500">
            <h3 className="text-slate-500 text-sm font-medium">Lives Saved</h3>
            <p className="text-3xl font-bold mt-2">4,892</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Blood Requests</h2>
            <button className="text-sm font-medium text-red-600 hover:text-red-700">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-sm">
                  <th className="p-4 font-medium">Blood Type</th>
                  <th className="p-4 font-medium">Hospital</th>
                  <th className="p-4 font-medium">Urgency</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-red-600">{req.type}</td>
                    <td className="p-4">{req.hospital}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        req.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                        req.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {req.urgency}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        req.status === 'Matched' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View Details
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
