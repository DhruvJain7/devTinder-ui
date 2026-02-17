import { motion } from "framer-motion";

const HeroCard = () => {
  // Hardcoded "Perfect" Match Data
  const demoProfile = {
    firstName: "Timothy",
    lastName: "Dahl",
    age: 28,
    gender: "Male",
    photoUrl:
      "https://imgs.search.brave.com/5lQI3cq-KB5Dx5mXl7zsdjIQDRVxJYy5rUE3UE9msW8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZWFyZGVkLW1h/bi1mcmVlbGFuY2Vy/LXVzaW5nLWNvbXB1/dGVyLW1vZGVybi1j/b3dvcmtpbmctcGxh/Y2UtZnJlZWxhbmNl/LWJ1c2luZXNzLWNv/bmNlcHRfOTM2NzUt/ODM0NzIuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MCZxPTgw", // Use a high-quality static image
    about:
      "Full Stack Wizard. Ex-Google. Looking for a reckless frontend dev to build the next Unicorn. 🦄",
    skills: ["React", "Node.js", "Rust", "AWS", "AI/ML"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, rotate: -10 }}
      animate={{ opacity: 1, x: 0, rotate: 6 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative w-80 md:w-96 bg-[#161B22] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(88,166,255,0.2)] border border-[#30363D] flex flex-col select-none pointer-events-none"
    >
      {/* 1. IMAGE HEADER */}
      <div className="relative h-64 w-full">
        <img
          src={demoProfile.photoUrl}
          alt="Demo User"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h2 className="text-2xl font-bold text-white shadow-sm tracking-tight">
            {demoProfile.firstName} {demoProfile.lastName}
          </h2>
          <p className="text-sm font-mono text-[#7EE787]">
            {demoProfile.age},{" "}
            <span className="text-gray-400">{demoProfile.gender}</span>
          </p>
        </div>
      </div>

      {/* 2. CARD BODY */}
      <div className="px-4 pb-4 flex flex-col gap-3">
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-1">
          {demoProfile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#79C0FF] bg-[#1F6FEB]/10 border border-[#1F6FEB]/30 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bio */}
        <div className="w-full text-left bg-[#0D1117] p-3 rounded-lg border border-[#30363D]/50 font-mono text-xs text-gray-400 leading-5">
          <span className="text-[#FF7B72]">const</span>{" "}
          <span className="text-[#D2A8FF]">match</span>{" "}
          <span className="text-[#FF7B72]">=</span>{" "}
          <span className="text-[#A5D6FF]">"</span>
          {demoProfile.about}
          <span className="text-[#A5D6FF]">"</span>;
        </div>

        {/* Fake Buttons */}
        <div className="flex gap-3 mt-2 pt-3 border-t border-[#30363D]">
          <div className="h-10 w-full bg-[#238636] rounded-lg opacity-80 flex items-center justify-center text-white font-bold text-sm">
            Interested (Enter)
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-4 right-4 bg-[#238636] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
        98% Match
      </div>
    </motion.div>
  );
};

export default HeroCard;
