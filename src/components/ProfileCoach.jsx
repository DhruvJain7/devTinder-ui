import React from "react";

const ProfileCoach = ({ user }) => {
  // 1. Calculate Score
  let score = 0;
  if (user.firstName) score += 10;
  if (user.lastName) score += 10;
  if (user.photoUrl && user.photoUrl.length > 10) score += 20;
  if (user.about && user.about.length > 20) score += 20;
  if (user.skills && user.skills.length > 0) score += 20;
  if (user.age) score += 10;
  if (user.gender) score += 10;

  // Cap score at 100
  if (score > 100) score = 100;

  // 2. Determine Missing Fields for Advice
  const missing = [];
  if (!user.about || user.about.length < 20) missing.push("Write a longer bio");
  if (!user.skills || user.skills.length === 0)
    missing.push("Add at least 1 skill");
  if (!user.photoUrl) missing.push("Upload a profile photo");
  if (!user.age) missing.push("Add your age");

  return (
    <div className="card bg-[#161B22] w-96 shadow-xl border border-[#30363D] p-5">
      <h3 className="font-bold text-gray-300 mb-3 flex justify-between items-center text-sm font-mono uppercase tracking-wider">
        Profile Strength
        <span className={score === 100 ? "text-[#3FB950]" : "text-[#D29922]"}>
          {score}%
        </span>
      </h3>

      {/* Progress Bar */}
      <progress
        className={`progress w-full h-2 mb-4 ${score === 100 ? "progress-success" : "progress-warning"}`}
        value={score}
        max="100"
      ></progress>

      {/* Dynamic Advice */}
      <div className="text-xs font-mono text-gray-400">
        {score === 100 ? (
          <div className="flex items-center gap-2 text-[#3FB950]">
            <span>🚀 Ready to deploy! Your profile is maxed out.</span>
          </div>
        ) : (
          <div>
            <p className="mb-2 text-white font-semibold">
              To get more matches:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-gray-500">
              {missing.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCoach;
