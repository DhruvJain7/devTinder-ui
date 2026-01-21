import { useState } from "react";
import LogoIcon from "./LogoIcon";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

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
          about,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center items-center mx-10 ">
          <div className="card bg-base-200 w-96 shadow-xl border border-base-300">
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

              <div className="w-full">
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;First Name /&gt;
                  </legend>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="John"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;Last Name /&gt;{" "}
                  </legend>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary focus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;Age /&gt;
                  </legend>
                  <input
                    type="number"
                    value={age}
                    placeholder="null"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;Gender /&gt;
                  </legend>
                  <input
                    type="text"
                    value={gender}
                    placeholder="unspecified"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;Photo URL /&gt;
                  </legend>
                  <input
                    type="text"
                    value={photoUrl}
                    placeholder=""
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset p-0 mb-4 border-none">
                  <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                    &lt;About /&gt;
                  </legend>
                  <input
                    type="text"
                    value={about}
                    placeholder=""
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </fieldset>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-end mt-2">
                <button
                  className="btn btn-primary w-full font-header text-lg text-white shadow-[0_0_10px_rgba(88,166,255,0.2)] hover:shadow-[0_0_20px_rgba(88,166,255,0.5)] border-none transition-all duration-300"
                  onClick={saveProfile}
                >
                  Save Profile_
                </button>
              </div>
            </div>
          </div>
        </div>

        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Your Profile has Been Updated !!</span>
          </div>
        </div>
      )}
    </>
  );
};
export default EditProfile;
