export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-20 px-4 font-sans relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
          Powered by Next-Gen AI 🚀
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 text-center tracking-tight">
          AI Assignment Solver
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl text-center font-light">
          Upload your assignment PDF or image, and our intelligent AI will provide <span className="text-indigo-300 font-medium">step-by-step solutions</span> instantly!
        </p>

        <div className="bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700/50 w-full max-w-xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/30">
          <div className="border-2 border-dashed border-slate-600 rounded-2xl p-12 text-center hover:bg-slate-800/80 hover:border-indigo-400 transition-all duration-300 cursor-pointer group">
            <div className="text-slate-500 mb-4 group-hover:text-indigo-400 transition-colors transform group-hover:-translate-y-1 duration-300">
              <svg className="mx-auto h-16 w-16 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <p className="text-base font-semibold text-indigo-400 group-hover:text-indigo-300">Click to upload or drag and drop</p>
            <p className="text-sm text-slate-500 mt-2 font-light">PDF, PNG, JPG up to 10MB</p>
          </div>

          <button className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
            Solve Assignment Now
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl text-left w-full">
          <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-500/30 group">
            <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition-colors">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-slate-200 text-lg mb-3">High Accuracy OCR</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Extracts text, complex math equations, and handwritten notes perfectly from any image.</p>
          </div>
          <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-500/30 group">
             <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="font-bold text-slate-200 text-lg mb-3">Detailed Explanations</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Get step-by-step guidance and conceptual breakdowns, not just the final answers.</p>
          </div>
          <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-pink-500/30 group">
             <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="font-bold text-slate-200 text-lg mb-3">Multiple Formats</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Export your step-by-step solutions directly to Word, PDF, or LaTeX with one click.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
