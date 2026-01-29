import { Link, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BackgroundEffect from "../components/BackgroundEffect";

const Landing = () => {
  const user = useSelector((store) => store.user);
  const [textIndex, setTextIndex] = useState(0);
  const roles = [
    "Co-Founder",
    "Mentor",
    "Open Source Contributor",
    "Code Reviewer",
  ];

  // Typewriter effect logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // If user is already logged in, redirect to Feed
  if (user) return <Navigate to="/" />;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D1117] text-white font-sans">
      {/* 1. BACKGROUND LAYER */}
      <BackgroundEffect />

      {/* 3. HERO SECTION */}
      <main className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 mt-10 py-20">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-[#238636] bg-[#238636]/10 backdrop-blur-sm text-xs font-mono text-[#7EE787] uppercase tracking-widest"
        >
          Build The Future
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl"
        >
          Stop Coding Alone. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79C0FF] to-[#D2A8FF]">
            Find Your Next
          </span>
          {/* Typewriter Text */}
          <div className="h-20 md:h-24 overflow-hidden relative mt-2">
            <motion.div
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#7EE787]"
            >
              {roles[textIndex]}
            </motion.div>
          </div>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Whether you are building a startup, looking for a hackathon team, or
          just need a code review—connect with developers who speak your
          language.
          <span className="block mt-2 font-mono text-sm text-gray-500">
            // No recruiters. Just devs.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          <Link to="/login">
            <button className="btn btn-primary h-14 px-8 text-lg font-bold shadow-[0_0_30px_rgba(35,134,54,0.3)] border-none bg-[#238636] hover:bg-[#2ea043] text-white rounded-full">
              Join the Network
            </button>
          </Link>

          <div className="text-gray-500 text-sm font-mono">
            Free for developers
          </div>
        </motion.div>

        {/* 4. FEATURE GRID (Why use this?) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full text-left"
        >
          {/* Card 1 */}
          <div className="p-6 rounded-xl border border-[#30363D] bg-[#161B22]/50 hover:border-[#58A6FF] transition-colors group">
            <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">
              🚀
            </div>
            <h3 className="text-white font-bold mb-2">Launch Projects</h3>
            <p className="text-gray-400 text-sm">
              Find the backend to your frontend. Build side projects that
              actually ship.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-xl border border-[#30363D] bg-[#161B22]/50 hover:border-[#A371F7] transition-colors group">
            <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">
              🤝
            </div>
            <h3 className="text-white font-bold mb-2">Find Mentorship</h3>
            <p className="text-gray-400 text-sm">
              Connect with seniors to guide your career, or juniors to help you
              grow.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-xl border border-[#30363D] bg-[#161B22]/50 hover:border-[#7EE787] transition-colors group">
            <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all">
              🌐
            </div>
            <h3 className="text-white font-bold mb-2">Open Source</h3>
            <p className="text-gray-400 text-sm">
              Discover maintainers and contributors for your repositories.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;
