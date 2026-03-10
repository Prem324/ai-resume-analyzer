import React from "react";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/50 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-15 group-hover:opacity-40 transition duration-1000"></div>
                            <img
                                className="relative h-9 w-9 md:h-10 md:w-10 object-contain rounded-lg shadow-lg border border-slate-700/50"
                                src="/logo.png"
                                alt="AI Resume Analyzer"
                            />
                        </div>
                        <span className="text-lg md:text-xl font-black tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            AI Resume Analyzer
                        </span>
                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;
