export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-4 font-sans">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">AI Assignment Solver</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl text-center">
        Upload your assignment PDF or image, and our intelligent AI will provide step-by-step solutions instantly!
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-xl">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="text-gray-500 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-sm font-medium text-blue-600">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500 mt-1">PDF, PNG, JPG up to 10MB</p>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">
          Solve Assignment
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">High Accuracy OCR</h3>
          <p className="text-sm text-gray-600">Extracts text and math equations perfectly from images.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Detailed Explanations</h3>
          <p className="text-sm text-gray-600">Step-by-step guidance, not just final answers.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Multiple Formats</h3>
          <p className="text-sm text-gray-600">Export solutions to Word, PDF or LaTeX directly.</p>
        </div>
      </div>
    </div>
  );
}
