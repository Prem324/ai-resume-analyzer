import React from "react";

const SplashScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

            <div className="relative flex flex-col items-center">
                {/* Glow Effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>

                {/* Logo Container */}
                <div className="relative mb-8 transform transition-transform duration-1000 scale-110 hover:scale-125">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain animate-bounce"
                        style={{ animationDuration: '2s' }}
                    />
                </div>

                {/* Text Animation */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        AI Resume Analyzer
                    </h1>

                    {/* Loading Bar */}
                    <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mt-6">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[loading_2.5s_ease-in-out_forwards]"
                            style={{
                                width: '0%',
                                animation: 'loadingProgress 2.5s ease-in-out forwards'
                            }}
                        ></div>
                    </div>

                    <p className="text-slate-400 text-sm font-medium tracking-widest uppercase animate-pulse mt-4">
                        Initializing Intelligence...
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes loadingProgress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
        </div>
    );
};

export default SplashScreen;
