function Result({ result }) {
  if (!result) return null;

  return (
    <div className="animate-in fade-in zoom-in duration-500">

      {/* 1. On-Screen UI Card - HIDDEN ON PRINT */}
      <div className="print:hidden bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl mb-8 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Full Analysis</h2>
          </div>

          <button
            onClick={() => window.print()}
            className="group flex items-center space-x-3 px-6 py-3 bg-white text-slate-900 rounded-xl transition-all hover:bg-slate-100 shadow-xl active:scale-95 cursor-pointer font-bold"
          >
            <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <span>Generate PDF Report</span>
          </button>
        </div>

        <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-700/30">
          <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap">
            {result}
          </div>
        </div>
      </div>

      {/* 2. PDF Printed Layout - SHOWN ONLY ON PRINT */}
      <div className="hidden print:block print-only text-black bg-white min-h-screen font-serif p-0 m-0">
        <div className="border-b-4 border-black pb-8 mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter">Resume Audit</h1>
            <p className="text-xl font-bold text-gray-800 mt-1 italic">Professional AI Assessment Report</p>
          </div>
          <div className="text-right text-xs font-mono">
            <p>ISSUED: {new Date().toLocaleDateString()}</p>
            <p>REF NO: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
        </div>

        <div className="text-[12pt] leading-loose whitespace-pre-wrap text-black pr-4">
          {result}
        </div>

        {/* This ensures the PDF doesn't have blank space trailing with dark backgrounds */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-[10px] text-gray-400 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} AI RESUME ANALYZER PRO • ALL RIGHTS RESERVED • CONFIDENTIAL</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
