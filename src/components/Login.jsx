import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router"; // Updated to react-router-dom for safety
import { BASE_URL } from "../utils/constants";
import LogoIcon from "./LogoIcon";
import BackgroundEffect from "./BackgroundEffect"; // Added Background Effect

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  // 4. Enter Key Support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      isLoginForm ? handleLogin() : handleSignUp();
    }
  };

  return (
    // 1. Visual Upgrade: Dark Mode Background & Full Screen
    <div className="relative min-h-screen flex justify-center items-center bg-[#0D1117] text-white overflow-hidden font-sans pt-10">
      {/* Background Layer */}
      <BackgroundEffect />

      {/* 1. Visual Upgrade: Glassmorphism Card */}
      <div className="relative z-10 w-full flex justify-center px-4">
        <div
          className="card bg-[#161B22]/80 backdrop-blur-xl border border-[#30363D] shadow-[0_0_50px_rgba(0,0,0,0.5)] w-96"
          onKeyDown={handleKeyDown}
        >
          <div className="card-body p-8">
            {/* Header */}
            <div className="flex flex-col items-center mb-4">
              <LogoIcon width={50} className="mb-2" />
              <h2 className="card-title justify-center text-2xl font-header text-white">
                {isLoginForm ? "Login" : "SignUp"}
              </h2>
              <p className="text-sm text-gray-400 font-body">
                {isLoginForm
                  ? "Welcome back, dev."
                  : "Commit to the community."}
              </p>
            </div>

            <div className="w-full space-y-3">
              {!isLoginForm && (
                <>
                  <fieldset className="fieldset p-0 border-none">
                    <legend className="fieldset-legend font-header text-xs text-gray-500 pb-1 font-mono">
                      &lt;First Name /&gt;
                    </legend>
                    <input
                      type="text"
                      value={firstName}
                      placeholder="John"
                      // 3. Code-Style Inputs (Dark Theme)
                      className="input input-bordered w-full bg-[#0D1117] border-[#30363D] text-white font-mono text-sm focus:border-[#58A6FF] focus:outline-none transition-all"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="fieldset p-0 border-none">
                    <legend className="fieldset-legend font-header text-xs text-gray-500 pb-1 font-mono">
                      &lt;Last Name /&gt;
                    </legend>
                    <input
                      type="text"
                      value={lastName}
                      placeholder="Doe"
                      className="input input-bordered w-full bg-[#0D1117] border-[#30363D] text-white font-mono text-sm focus:border-[#58A6FF] focus:outline-none transition-all"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </fieldset>
                </>
              )}

              <fieldset className="fieldset p-0 border-none">
                <legend className="fieldset-legend font-header text-xs text-gray-500 pb-1 font-mono">
                  &lt;EmailID /&gt;
                </legend>
                <input
                  type="text"
                  value={emailId}
                  placeholder="user@devtinder.com"
                  className="input input-bordered w-full bg-[#0D1117] border-[#30363D] text-white font-mono text-sm focus:border-[#58A6FF] focus:outline-none transition-all"
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset p-0 border-none">
                <legend className="fieldset-legend font-header text-xs text-gray-500 pb-1 font-mono">
                  &lt;Password /&gt;
                </legend>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  className="input input-bordered w-full bg-[#0D1117] border-[#30363D] text-white font-mono text-sm focus:border-[#58A6FF] focus:outline-none transition-all"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>

            <p className="text-[#FF7B72] text-sm mt-2">{error}</p>

            <div className="card-actions justify-end mt-4">
              <button
                className="btn w-full bg-[#238636] hover:bg-[#2ea043] text-white border-none font-header text-lg shadow-[0_0_20px_rgba(35,134,54,0.3)] transition-all duration-300"
                onClick={isLoginForm ? handleLogin : handleSignUp}
              >
                {isLoginForm ? " Login_" : "SignUp_"}
              </button>
              <p
                className="m-auto cursor-pointer py-2 text-sm text-gray-500 hover:text-[#58A6FF] transition-colors"
                onClick={() => setIsLoginForm((value) => !value)}
              >
                {isLoginForm
                  ? "New User? SignUp Here"
                  : "Existing User? Login Here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
