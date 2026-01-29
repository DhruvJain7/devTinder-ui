import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import LogoIcon from "./LogoIcon";
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
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center my-30">
      <div className="card bg-base-200 w-96 shadow-xl border border-base-300">
        <div className="card-body">
          <div className="flex flex-col items-center mb-4">
            <LogoIcon width={50} className="mb-2" />
            <h2 className="card-title justify-center text-2xl font-header text-primary">
              {isLoginForm ? "Login" : "SignUp"}
            </h2>
            <p className="text-sm text-base-content/70 font-body">
              {isLoginForm ? "Welcome back, dev." : "Commit to the community."}
            </p>
          </div>

          <div className="w-full">
            {!isLoginForm && (
              <>
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
                    &lt;Last Name /&gt;
                  </legend>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
              </>
            )}
            <fieldset className="fieldset p-0 mb-4 border-none">
              <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                &lt;EmailID /&gt;
              </legend>
              <input
                type="text"
                value={emailId}
                placeholder="user@devtinder.com"
                className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primaryfocus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset p-0 mb-4 border-none">
              <legend className="fieldset-legend font-header text-sm text-base-content/60 pb-1 ">
                &lt;Password /&gt;{" "}
              </legend>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                className="input input-bordered w-full bg-base-300 font-mono text-sm focus:border-primary focus:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-end mt-2">
            <button
              className="btn btn-primary w-full font-header text-lg text-white shadow-[0_0_10px_rgba(88,166,255,0.2)] hover:shadow-[0_0_20px_rgba(88,166,255,0.5)] border-none transition-all duration-300"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? " Login_" : "SignUp_"}
            </button>
            <p
              className="m-auto cursor-pointer py-2"
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
  );
};
export default Login;
