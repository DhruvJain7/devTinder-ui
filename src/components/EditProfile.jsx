import { useState } from "react";
import LogoIcon from "./LogoIcon";
import UserCard from "./UserCard";
import ProfileCoach from "./ProfileCoach"; // Import the new component
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(
    user.skills ? user.skills.join(", ") : "",
  );

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  // Helper to get array from string for Previews
  const getSkillsArray = () => {
    return typeof skills === "string" && skills.trim() !== ""
      ? skills
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== "")
      : [];
  };

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          skills: getSkillsArray(), // Use helper logic
          about,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };

  const liveUser = {
    firstName,
    lastName,
    photoUrl,
    age,
    gender,
    about,
    skills: getSkillsArray(),
  };

  return (
    <>
      {/* Main Layout: Flex Row on LG screens, Column on smaller */}
      <div className="flex flex-col lg:flex-row justify-center items-start my-10 pb-20 pt-10 gap-10 px-4">
        {/* --- LEFT COLUMN: EDIT FORM --- */}
        <div className="flex justify-center items-center w-full max-w-[400px]">
          <div className="card bg-base-200 w-full shadow-xl border border-base-300">
            <div className="card-body">
              <div className="flex flex-col items-center mb-4">
                <LogoIcon width={50} className="mb-2" />
                <h2 className="card-title justify-center text-2xl font-header text-primary">
                  Edit Profile
                </h2>
                <p className="text-sm text-base-content/70 font-body mt-2">
                  Updating Metadata
                </p>
              </div>

              <div className="w-full space-y-4">
                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;First Name /&gt;
                  </legend>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="John"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;Last Name /&gt;
                  </legend>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;Age /&gt;
                  </legend>
                  <input
                    type="number"
                    value={age}
                    placeholder="null"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;Gender /&gt;
                  </legend>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="select select-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;Photo URL /&gt;
                  </legend>
                  <input
                    type="text"
                    value={photoUrl}
                    placeholder="https://..."
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;Skills /&gt;
                  </legend>
                  <input
                    type="text"
                    placeholder="React, Node.js, AWS"
                    value={skills}
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all"
                    onChange={(e) => setSkills(e.target.value)}
                  />
                  <div className="label">
                    <span className="label-text-alt text-gray-500 font-mono text-[10px]">
                      * Separate with commas
                    </span>
                  </div>
                </fieldset>

                <fieldset className="fieldset p-0 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1">
                    &lt;About /&gt;
                  </legend>
                  <textarea
                    className="textarea input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary transition-all h-24"
                    placeholder="Tell us about your code..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>

              <p className="text-red-500 text-sm mt-2">{error}</p>

              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary w-full font-header text-lg text-white shadow-lg border-none hover:shadow-primary/50 transition-all duration-300"
                  onClick={saveProfile}
                >
                  Save Profile_
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: STICKY PREVIEW SECTION --- */}
        <div className="hidden lg:flex flex-col gap-6 sticky top-24 h-fit w-[400px]">
          {/* 1. The Live Preview Card */}
          <UserCard user={liveUser} isPreview={true} />

          {/* 2. The Profile Coach Widget */}
          <ProfileCoach user={liveUser} />
        </div>
      </div>

      {/* --- TOAST NOTIFICATION --- */}
      {showToast && (
        <div className="toast toast-bottom toast-end z-50">
          <div className="alert bg-[#0D1117] border border-[#30363D] shadow-2xl p-4 rounded-md font-mono text-sm min-w-[300px]">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center gap-2 mb-1 opacity-50 text-xs">
                <div className="w-2 h-2 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
                <span className="ml-2 text-gray-400">bash — 80x24</span>
              </div>
              <div>
                <span className="text-[#58A6FF]">user@devtinder</span>
                <span className="text-gray-400">:</span>
                <span className="text-[#7EE787]">~/profile</span>
                <span className="text-gray-400">$ </span>
                <span className="text-white">./save_changes.sh</span>
              </div>
              <div className="mt-1">
                <span className="text-[#3FB950]">✔ Success: Updated.</span>
                <span className="animate-pulse text-[#58A6FF]">_</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default EditProfile;
