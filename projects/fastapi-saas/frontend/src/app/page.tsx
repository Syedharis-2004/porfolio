export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          FastAPI SaaS
        </h1>
        <div className="flex gap-4">
          <button className="text-slate-300 hover:text-white transition-colors">Login</button>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 text-center mt-20">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Dockerized Backend.<br />
          <span className="text-blue-500">Infinite Scalability.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          A high-performance SaaS boilerplate powered by FastAPI, PostgreSQL, and Docker. Ready to deploy in seconds.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
            Start Free Trial
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-slate-700">
            View Documentation
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Lightning Fast</h3>
            <p className="text-slate-400">Built on FastAPI and Uvicorn, serving requests asynchronously with massive throughput.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Docker Native</h3>
            <p className="text-slate-400">Complete docker-compose setup included out of the box for instant local development.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Type Safe</h3>
            <p className="text-slate-400">End-to-end type safety with Pydantic models validating all incoming and outgoing data.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
