import { Link, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BackgroundEffect from "../components/BackgroundEffect";

// --- SUB-COMPONENTS ---

// 1. The Terminal Widget (Hero Visual)
const TerminalWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="w-full max-w-3xl mt-24 mx-auto"
    >
      <div className="mockup-code bg-[#161B22] border border-[#30363D] text-left shadow-2xl overflow-hidden text-xs sm:text-sm">
        {/* Fake Window Controls */}
        <div className="flex gap-2 px-4 mb-2 opacity-50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* The Logs - FIXED: Replaced '>' with '&gt;' */}
        <div className="px-6 font-mono space-y-2">
          <p className="text-gray-500">
            $ npm run find-match --skills="React, Node"
          </p>
          <p className="text-yellow-500 animate-pulse">
            &gt; Searching database for co-founders...
          </p>
          <p className="text-gray-400">
            &gt; Found User: <span className="text-[#58A6FF]">"Alex_Dev"</span>{" "}
            (Match: 98%)
          </p>
          <p className="text-gray-400">
            &gt; Found User: <span className="text-[#58A6FF]">"Sarah_JS"</span>{" "}
            (Match: 95%)
          </p>
          <p className="text-[#7EE787]">
            &gt; Connection established. Ready to merge. 🚀
          </p>
          <p className="text-gray-500 mt-4">
            $ <span className="animate-pulse">_</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
// 2. The Tech Stack Marquee (Bottom)
const TechStackMarquee = () => {
  const stacks = [
    "React",
    "Node.js",
    "Python",
    "Rust",
    "Go",
    "Docker",
    "AWS",
    "TypeScript",
  ];

  return (
    <div className="w-full py-10 overflow-hidden opacity-50 select-none pointer-events-none border-t border-[#30363D] mt-24">
      <div className="flex justify-center flex-wrap gap-8 md:gap-16 animate-pulse text-gray-600 font-mono text-sm md:text-xl font-bold uppercase tracking-widest px-4 text-center">
        {stacks.map((tech, i) => (
          <span key={i}>#{tech}</span>
        ))}
      </div>
    </div>
  );
};

// 3. Testimonials Section
const Testimonials = () => {
  const reviews = [
    {
      user: "frontend_wiz",
      role: "React Dev",
      comment:
        "LGTM! 👍 Finally found a backend dev who writes clean APIs. We shipped the MVP in 3 days.",
      diff: "+ 1 Partner Added",
    },
    {
      user: "system_arch",
      role: "Full Stack",
      comment:
        "Refactored my startup team. Found a co-founder who actually understands Scalability.",
      diff: "+ 2 Commits Merged",
    },
  ];

  return (
    <div className="py-25 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        <span className="text-[#58A6FF] font-mono">git blame</span>{" "}
        (Testimonials)
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-[#0D1117] border border-[#30363D] p-5 rounded-xl max-w-md w-full hover:border-[#58A6FF] transition-colors"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div className="bg-[#1F6FEB] text-white rounded-full w-10 flex justify-center items-center">
                    <span className="text-xs font-bold">
                      {review.user[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-[#58A6FF] text-sm font-mono">
                    @{review.user}
                  </div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
              <span className="text-[#7EE787] text-xs font-mono bg-[#238636]/20 px-2 py-1 rounded">
                {review.diff}
              </span>
            </div>
            {/* Body */}
            <div className="text-gray-300 text-sm italic border-l-2 border-[#30363D] pl-4">
              "{review.comment}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN LANDING COMPONENT ---

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
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D1117] text-white font-sans pt-25 ">
      {/* 1. BACKGROUND LAYER */}
      <BackgroundEffect />

      {/* HERO SECTION */}
      <main className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4 mt-10 py-10">
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
          className="flex flex-col sm:flex-row gap-5 items-center "
        >
          <Link to="/login">
            <button className="btn btn-primary h-14 px-8 text-lg font-bold shadow-[0_0_30px_rgba(35,134,54,0.3)] border-none bg-[#238636] hover:bg-[#2ea043] text-white rounded-full transition-transform hover:scale-105">
              Join the Network
            </button>
          </Link>

          <div className="text-gray-500 text-sm font-mono">
            Free for developers
          </div>
        </motion.div>

        {/* === NEW ADDITION 1: TERMINAL WIDGET === */}
        <TerminalWidget />

        {/* 4. FEATURE GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6  max-w-5xl w-full text-left mt-28"
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

        {/* === NEW ADDITION 2: TESTIMONIALS === */}
        <Testimonials />

        {/* === NEW ADDITION 3: MARQUEE === */}
        <TechStackMarquee />
      </main>

      {/* FOOTER STATS */}
    </div>
  );
};

export default Landing;
