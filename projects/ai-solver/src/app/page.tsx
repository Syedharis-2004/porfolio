"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
      
      // Create preview for images
      if (selectedFile.type.startsWith("image/")) {
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);
      } else {
        setPreview(null);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      setResult(null);
      setError(null);
      if (droppedFile.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(droppedFile));
      } else {
        setPreview(null);
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select a file to solve.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/solve", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate solution.");
      }

      setResult(data.solution);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-20 px-4 font-sans relative overflow-x-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
          Powered by Next-Gen AI 🚀
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-6 text-center tracking-tight">
          AI Assignment Solver
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl text-center font-light">
          Upload your assignment PDF or image, and our intelligent AI will provide <span className="text-indigo-300 font-medium">step-by-step solutions</span> instantly!
        </p>

        <div className="bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-700/50 w-full max-w-2xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-500/30">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,application/pdf"
            className="hidden"
          />
          
          <div 
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center min-h-[200px]
              ${file ? 'border-indigo-500 bg-indigo-500/5' : 'border-slate-600 hover:bg-slate-800/80 hover:border-indigo-400'}
            `}
          >
            {preview ? (
              <div className="relative w-full max-w-sm mx-auto">
                <img src={preview} alt="Preview" className="rounded-lg object-contain max-h-64 mx-auto shadow-lg" />
                <div className="mt-4 text-sm text-indigo-300 font-medium">
                  {file?.name}
                </div>
              </div>
            ) : file ? (
              <div className="flex flex-col items-center justify-center">
                 <svg className="h-16 w-16 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-semibold text-indigo-300">{file.name}</p>
                <p className="text-sm text-slate-500 mt-2">Click or drag to change file</p>
              </div>
            ) : (
              <>
                <div className="text-slate-500 mb-4 group-hover:text-indigo-400 transition-colors transform group-hover:-translate-y-1 duration-300">
                  <svg className="mx-auto h-16 w-16 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-indigo-400 group-hover:text-indigo-300">Click to upload or drag and drop</p>
                <p className="text-sm text-slate-500 mt-2 font-light">PDF, PNG, JPG up to 10MB</p>
              </>
            )}
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <button 
            onClick={handleSubmit}
            disabled={!file || loading}
            className={`w-full mt-8 font-bold py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2
              ${!file || loading 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5'
              }
            `}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing Document...
              </>
            ) : (
              "Solve Assignment Now"
            )}
          </button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="mt-12 w-full max-w-4xl bg-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-indigo-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
              <span className="text-indigo-400">✨</span> Solution Generated
            </h2>
            <div className="prose prose-invert prose-indigo max-w-none prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {result}
              </ReactMarkdown>
            </div>
          </div>
        )}

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
