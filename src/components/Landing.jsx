import { Link, Navigate } from "react-router";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import HeroCard from "./HeroCard";

// --- 1. CHAT WIDGET (1-on-1 DM Style) ---
const ChatWidget = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: "them", text: "Hey! I saw you're working with Rust. 🦀" },
    {
      id: 2,
      role: "me",
      text: "Yeah! Just started rewriting my backend in it.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const script = [
      {
        role: "them",
        text: "That's awesome. I'm a React dev looking for a backend partner.",
      },
      { role: "me", text: "Perfect timing. I hate writing CSS. 😅" },
      {
        role: "them",
        text: "Haha deal. I'll handle the pixels, you handle the memory safety?",
      },
      { role: "me", text: "Let's ship it. 🚀" },
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < script.length) {
        setMessages((prev) => [...prev, { ...script[i], id: Date.now() }]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl overflow-hidden bg-[#0D1117] border border-[#30363D]">
      {/* Header */}
      <div className="bg-[#161B22] p-3 border-b border-[#30363D] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-gray-200 text-xs font-bold font-mono">
              @sarah_js
            </span>
            <span className="text-[#7EE787] text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#238636]"></span>{" "}
              Online
            </span>
          </div>
        </div>
        <div className="text-gray-500 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div
        ref={scrollRef}
        className="h-[280px] p-4 flex flex-col gap-3 overflow-y-auto scroll-smooth"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex w-full ${msg.role === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "me"
                    ? "bg-[#1F6FEB] text-white rounded-tr-sm"
                    : "bg-[#21262D] text-gray-300 rounded-tl-sm border border-[#30363D]"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="bg-[#161B22] p-3 border-t border-[#30363D]">
        <div className="bg-[#0D1117] border border-[#30363D] rounded-full px-4 py-2 text-gray-500 text-xs flex items-center justify-between">
          <span>Reply to @sarah_js...</span>
          <div className="w-6 h-6 rounded-full bg-[#238636] flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path d="M3.105 2.289a.75.75 0 0 0-.826.95l1.414 4.925A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.896 28.896 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.289Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 2. GLOWING TERMINAL WIDGET ---
// --- 2. GLOWING TERMINAL WIDGET (Fixed Alignment) ---
// --- 2. GLOWING TERMINAL WIDGET (Fixed Double Buttons) ---
const TerminalWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mt-16 mx-auto relative group"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#238636] to-[#2ea043] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

      {/* FIX: Removed 'mockup-code' to stop the extra gray buttons.
          Added 'rounded-xl' and 'font-mono' to replace the style manually.
      */}
      <div className="relative rounded-xl bg-[#0D1117] border border-[#30363D] text-left shadow-2xl overflow-hidden text-xs sm:text-sm font-mono">
        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-[#30363D] bg-[#161B22]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-gray-500 text-[10px]">
            user@devtinder-server:~
          </div>
        </div>

        {/* TERMINAL BODY */}
        <div className="px-6 py-6 space-y-3 leading-relaxed">
          <div>
            <span className="text-[#A371F7]">➜</span>{" "}
            <span className="text-[#79C0FF]">~</span>{" "}
            <span className="text-gray-400">npm run match-engine</span>
          </div>
          <div className="text-gray-500">
            <span className="text-gray-600">[INFO]</span> Initializing DevTinder
            Protocol v2.0...
          </div>
          <div className="text-gray-300">
            <span className="text-[#238636]">[SUCCESS]</span> Connected to
            MongoDB Cluster.
          </div>
          <div className="flex gap-2">
            <span className="text-[#D2A8FF]">[SEARCH]</span>{" "}
            <span>Scanning for skills:</span>
            <span className="text-[#79C0FF]">
              [ 'React', 'Node.js', 'Rust' ]
            </span>
          </div>
          <div className="text-[#7EE787] animate-pulse">
            <span className="text-white">_</span> Found 128 potential matches in
            your area.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. INFINITE SCROLL MARQUEE ---
const TechStackMarquee = () => {
  const stacks = [
    "REACT",
    "NODE.JS",
    "TYPESCRIPT",
    "MONGODB",
    "DOCKER",
    "AWS",
    "REDIS",
    "GRAPHQL",
    "NEXT.JS",
    "TAILWIND",
  ];
  return (
    <div className="w-full py-16 overflow-hidden relative border-t border-[#30363D] mt-32 bg-[#0D1117]">
      <div className="text-center mb-10 opacity-50 font-mono text-xs tracking-[0.3em] text-[#58A6FF]">
        POWERED BY MODERN STACK
      </div>
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full z-10 bg-gradient-to-r from-[#0D1117] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full z-10 bg-gradient-to-l from-[#0D1117] to-transparent pointer-events-none"></div>

      <div className="flex w-max gap-12 animate-[scroll_30s_linear_infinite]">
        {[...stacks, ...stacks, ...stacks].map((tech, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-black text-[#30363D] font-sans tracking-tighter uppercase hover:text-[#58A6FF] transition-colors duration-300 cursor-default select-none"
          >
            {tech}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
};

// --- MAIN LANDING COMPONENT ---
const Landing = () => {
  const user = useSelector((store) => store.user);
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Co-Founder", "Mentor", "Contributor", "Reviewer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (user) return <Navigate to="/" />;

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#0D1117] text-white font-sans">
      <BackgroundEffect />

      <main className="relative z-10 flex flex-col items-center px-4 pt-32 pb-20 w-full max-w-7xl mx-auto">
        {/* === HERO SECTION === */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 px-4 py-1.5 rounded-full border border-[#238636] bg-[#238636]/10 backdrop-blur-sm text-xs font-mono text-[#7EE787] uppercase tracking-widest"
            >
              Build The Future
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Stop Coding Alone. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#79C0FF] to-[#D2A8FF]">
                Find Your Next
              </span>
              <div className="h-20 md:h-24 overflow-hidden relative mt-2 w-full flex justify-center md:justify-start">
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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              Whether you are building a startup or just need a code
              review—connect with developers who speak your language.
              <span className="block mt-2 font-mono text-sm text-gray-500">
                // No recruiters. Just devs.
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center md:justify-start"
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
          </div>
          {/* Right Card */}
          <div className="md:w-1/2 w-full flex justify-center relative perspective-1000 mt-10 md:mt-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#A371F7] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#58A6FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <HeroCard />
          </div>
        </div>

        {/* === SOCIAL PROOF SECTION === */}
        <div className="w-full mt-40 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-[#58A6FF] font-mono">git commit</span>{" "}
            (Community)
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Chat */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left mb-6">
                <h3 className="text-xl font-bold text-white">
                  Real Conversations.
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Connect, chat, and build. See what developers are saying right
                  now.
                </p>
              </div>
              <ChatWidget />
            </div>
            {/* Reviews */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] border-l-4 border-l-[#238636] hover:bg-[#161B22]/80 transition-colors">
                <p className="text-gray-300 italic text-sm">
                  "I was tired of explaining what a 'Pull Request' is to
                  recruiters. Here, everyone gets it."
                </p>
                <div className="mt-2 text-[#58A6FF] text-xs font-bold font-mono">
                  @Sarah_FullStack
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] border-l-4 border-l-[#A371F7] hover:bg-[#161B22]/80 transition-colors">
                <p className="text-gray-300 italic text-sm">
                  "Found a mentor who helped me refactor my entire backend in 2
                  days."
                </p>
                <div className="mt-2 text-[#58A6FF] text-xs font-bold font-mono">
                  @Junior_Dev_99
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] border-l-4 border-l-[#7EE787] hover:bg-[#161B22]/80 transition-colors">
                <p className="text-gray-300 italic text-sm">
                  "The best place to find hackathon partners. Period."
                </p>
                <div className="mt-2 text-[#58A6FF] text-xs font-bold font-mono">
                  @Hackathon_Winner
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === FEATURES GRID === */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-10"
        >
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

        {/* === BOTTOM: TERMINAL & MARQUEE === */}
        <div className="mt-24 w-full flex flex-col items-center">
          <h3 className="text-[#238636] font-mono text-xs mb-8 tracking-widest animate-pulse">
            ● SYSTEM STATUS: ONLINE
          </h3>
          <TerminalWidget />
        </div>
        <TechStackMarquee />
      </main>
    </div>
  );
};

export default Landing;
