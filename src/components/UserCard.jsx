import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const UserCard = ({ user, isPreview = false }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about, skills } =
    user;
  const dispatch = useDispatch();
  const controls = useAnimation();

  // --- LOGIC ---
  const handleSendRequest = async (status, userId) => {
    if (isPreview) return;
    try {
      await controls.start({
        x: status === "interested" ? 500 : -500,
        opacity: 0,
      });
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isPreview) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleSendRequest("interested", _id);
      if (e.key === "ArrowLeft") handleSendRequest("ignored", _id);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [_id, isPreview]);

  const handleDragEnd = (event, info) => {
    if (isPreview) return;
    const threshold = 150;
    if (info.offset.x > threshold) handleSendRequest("interested", _id);
    else if (info.offset.x < -threshold) handleSendRequest("ignored", _id);
    else controls.start({ x: 0 });
  };

  return (
    <motion.div
      drag={isPreview ? false : "x"}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      className={`relative w-96 bg-[#161B22] rounded-2xl overflow-hidden shadow-2xl border border-[#30363D] flex flex-col ${
        isPreview ? "cursor-default" : "cursor-grab active:cursor-grabbing"
      }`}
    >
      {/* --- 1. PRO HEADER (Gradient + Name) --- */}
      <div className="relative h-72 w-full">
        <img
          src={photoUrl}
          alt="user"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h2 className="text-3xl font-bold text-white shadow-sm tracking-tight drop-shadow-md">
            {firstName} {lastName}
          </h2>
          {age && gender && (
            <p className="text-sm font-mono text-[#7EE787] font-semibold drop-shadow-md">
              {age}, <span className="text-gray-400">{gender}</span>
            </p>
          )}
        </div>
      </div>

      {/* --- 2. CARD BODY --- */}
      <div className="px-4 pb-4 flex flex-col gap-3">
        {/* SKILLS */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-1">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#79C0FF] bg-[#1F6FEB]/10 border border-[#1F6FEB]/30 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* BIO */}
        <div className="w-full text-left bg-[#0D1117] p-3 rounded-lg border border-[#30363D]/50 font-mono text-xs text-gray-400 leading-5">
          <span className="text-[#FF7B72]">const</span>{" "}
          <span className="text-[#D2A8FF]">aboutMe</span>{" "}
          <span className="text-[#FF7B72]">=</span>{" "}
          <span className="text-[#A5D6FF]">"</span>
          <span className="text-gray-300 italic">
            {about || "404 Bio Not Found"}
          </span>
          <span className="text-[#A5D6FF]">"</span>;
        </div>

        {/* GIT GRAPH (Visual Only) */}
        <div className="flex gap-1 w-full justify-between opacity-60">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className={`w-full h-2 rounded-sm ${Math.random() > 0.6 ? "bg-[#238636]" : "bg-[#161B22] border border-[#30363D]"}`}
            ></div>
          ))}
        </div>

        {/* --- 3. YOUR SIGNATURE BUTTONS (Restored) --- */}
        {!isPreview && (
          <div className="card-actions flex-nowrap justify-center w-full gap-3 mt-2 pt-3 border-t border-[#30363D] min-w-[100px]">
            <button
              className="btn btn-reject w-1/3 border-[#30363D] hover:border-red-500/50 hover:bg-red-500/10"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
              <span className="text-[10px] font-normal text-white/40 lowercase ml-1">
                revert
              </span>
            </button>

            <button
              className="btn btn-accept flex-grow hover:bg-green-600 border-[#30363D]"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
              <span className="text-[10px] font-normal text-white/60 lowercase ml-1">
                commit
              </span>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserCard;
