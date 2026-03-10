import { useState, useEffect } from "react";
import UploadResume from "./components/UploadResume";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navbar />

      <div className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Everything inside this div is hidden on print */}
          <div className="print:hidden">
            <header className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                AI Resume Analyzer
              </h1>
              <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto px-4 leading-relaxed">
                Upload your resume and get instant, AI-powered feedback to help you land your dream job.
              </p>
            </header>

            <main className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                <UploadResume setResult={setResult} />
              </div>
            </main>
          </div>

          {/* The Result component handles what is shown/hidden via inner classes */}
          {result && (
            <div className="mt-8 transition-all duration-500">
              <Result result={result} />
            </div>
          )}

          <footer className="mt-16 text-center text-slate-500 text-sm print:hidden">
            <p>&copy; {new Date().getFullYear()} AI Resume Analyzer. Powered by Advanced Intelligence.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
